import _ from 'lodash';

const getSessionsByEvent = (event, args, { db }) => {
  const eventId = _.isEmpty(args) ? event.id : args.eventId;

  db
    .collection('sessions')
    .where('eventId', '==', eventId)
    .orderBy('scheduledDateTime')
    .get()
    .then((docs) => {
      const results = [];
      docs.forEach(doc => results.push({ id: doc.id, ...doc.data() }));
      return results;
    });
};

const getSessionsByRoom = (event, args, { db }) =>
  db
    .collection('sessions')
    .where('eventId', '==', args.eventId)
    .where('scheduledRoom', '==', args.roomName)
    .orderBy('scheduledDateTime', 'ASC')
    .get()
    .then((docs) => {
      const results = [];
      docs.forEach(doc => results.push({ id: doc.id, ...doc.data() }));
      return results;
    });

export default { getSessionsByEvent, getSessionsByRoom };
