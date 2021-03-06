import _ from 'lodash';

const getSessionsByEvent = (event, args, { db }) => {
  const eventId = _.isEmpty(args) ? event.id : args.eventId;
  return db
    .collection('sessions')
    .where('eventId', '==', eventId)
    .where('accepted', '==', true)
    .where('canceled', '==', false)
    .orderBy('scheduledDateTime', 'ASC')
    .get()
    .then((docs) => {
      const results = [];
      docs.forEach(doc => results.push({ id: doc.id, ...doc.data() }));
      return results.map(r => ({ ...r, tags: r.tags.map(t => t.Name) }));
    });
};

const getSessionsByRoom = (event, args, { db }) =>
  db
    .collection('sessions')
    .where('eventId', '==', args.eventId)
    .where('scheduledRoom', '==', args.roomName)
    .where('accepted', '==', true)
    .where('canceled', '==', false)
    .orderBy('scheduledDateTime', 'ASC')
    .get()
    .then((docs) => {
      const results = [];
      docs.forEach(doc => results.push({ id: doc.id, ...doc.data() }));
      return results.map(r => ({ ...r, tags: r.tags.map(t => t.Name) }));
    });

export default { getSessionsByEvent, getSessionsByRoom };
