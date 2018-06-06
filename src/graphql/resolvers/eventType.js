const speakers = (event, args, { db }) =>
  db
    .collection('speakers')
    .where('eventId', '==', event.id)
    .get()
    .then((docs) => {
      const results = [];
      docs.forEach(doc => results.push({ id: doc.id, ...doc.data() }));
      return results;
    });

export default { speakers };
