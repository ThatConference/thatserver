import * as _ from 'lodash';

const roomResolver = (event, args, { db }) => {
  const eventId = _.isEmpty(args) ? event.id : args.eventId;

  return db
    .collection('events')
    .doc(eventId)
    .collection('rooms')
    .get()
    .then((docs) => {
      const results = [];
      docs.forEach(doc => results.push({ id: doc.id, ...doc.data() }));
      return results;
    });
};

export default roomResolver;
