import * as _ from 'lodash';

const customerResolver = (customer, args, { db }) => {
  const customerId = _.isEmpty(args) ? customer.id : args.customerId;

  return db
    .collection('customers')
    .doc(customerId)
    .collection('buttons')
    .get()
    .then((docs) => {
      const results = [];
      docs.forEach(doc => results.push({ id: doc.id, ...doc.data() }));
      return results;
    });
};

export default customerResolver;
