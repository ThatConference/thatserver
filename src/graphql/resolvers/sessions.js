import * as _ from 'lodash';

const sessionResolver = (event, args, { db }) => {
  const eventId = _.isEmpty(args) ? event.id : args.eventId;

  return db
    .collection('sessions')
    .where('eventId', '==', eventId)
    .get()
    .then((docs) => {
      const results = [];
      docs.forEach(doc => results.push({ id: doc.id, ...doc.data() }));
      return results;
    });
};

export default sessionResolver;
