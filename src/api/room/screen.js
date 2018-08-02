import _ from 'lodash';
import logger from '../../utilities/logger';

// todo: make a argument somewhere.
const tcEventId = '8FAmhWWyIWDZ6a01gk1A';

const getSessionsByRoom = (eventId, roomName, db) => {
  logger.trace('getSessionsByRoom');
  return db
    .collection('sessions')
    .where('eventId', '==', eventId)
    .where('scheduledRoom', '==', roomName)
    .where('canceled', '==', false)
    .orderBy('scheduledDateTime', 'ASC')
    .get()
    .then((docs) => {
      const results = [];
      docs.forEach(doc => results.push({ id: doc.id, ...doc.data() }));
      return results;
    })
    .catch((err) => {
      logger.error('getSessionByRoom errored', err);
    });
};

const getSessionsById = (sessionId, db) => {
  logger.trace('getSessionsById');
  return db
    .collection('sessions')
    .doc(sessionId)
    .get()
    .then((doc) => {
      if (!doc.exists) {
        logger.warn('No such document!');
        return {};
      }
      const session = doc.data();
      // logger.data('Document data:', session);
      return session;
    })
    .catch((err) => {
      logger.error('getSessionsById errored', err);
    });
};

const updateSession = (sessionId, session, db) => {
  logger.trace('updateSession');
  return db
    .collection('sessions')
    .doc(sessionId)
    .set({ eventId: tcEventId, ...session })
    .then(docRef => logger.info('Added document with ID: ', docRef.id))
    .catch(err => logger.error('updateSession errored', err));
};

const post = async (request, response) => {
  try {
    logger.trace('session update called');
    logger.data(request.body);

    const pubsub = request.app.get('pubsub');
    const db = request.app.get('db');
    const newSession = request.body;

    // get the current session ( if exists ) as we need to know what room will be effected.
    logger.debug('getting original session information');
    const originalSession = await getSessionsById(newSession.id, db);

    // update the new session the session
    logger.debug('updating the db with the new session information');
    await updateSession(newSession.id, newSession, db);

    // get all sessions for affected room
    logger.debug('Getting session list for affected rooms');
    const sessionList = await getSessionsByRoom(tcEventId, newSession.scheduledRoom, db);

    // if the room changed, get old room list and update clients
    if (!_.isEmpty(originalSession)) {
      if (originalSession.scheduledRoom.toLowerCase() !== newSession.scheduledRoom.toLowerCase()) {
        const oldRoomSessionList = await getSessionsByRoom(
          tcEventId,
          originalSession.scheduledRoom,
          db,
        );
        logger.debug('publishing new info to old room list');
        pubsub.publish('roomScreenChanged', oldRoomSessionList);
      }
    }

    // update all clients new room
    logger.debug('publishing new info to new room list');
    pubsub.publish('roomScreenChanged', sessionList);

    response.sendStatus(200);
  } catch (e) {
    logger.error(e);
    response.send(500);
  }
};

// eslint-disable-next-line
export { post };
