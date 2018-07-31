import logger from '../utilities/logger';
import twilio from '../data/twilio';

const message = (cache, coreId, db) => {
  const shouldSendMessage = () => {
    const coreIdValue = cache.get(coreId);

    // we found the coreId in the cache so we shouldn't send the message
    if (coreIdValue) return false;

    // we didn't find it so we're going to set it in the cache for 5 seconds
    cache.set(coreId, coreId, 60); // expires in 60 seconds
    return true;
  };

  const buildMessage = async () =>
    db
      .collection('buttons')
      .where('isAssigned', '==', true)
      .where('coreId', '==', coreId)
      .get()
      .then((docs) => {
        if (docs.length > 1) logger.info('one coreId is assigned to two different buttons');

        let m = 'no message';

        // todo - we're just always taking the last room... meh
        docs.forEach((doc) => {
          m = `🔴 ALERT - ${doc
            .data()
            .roomName.toUpperCase()} requested help. https://map.thatconference.com`;
        });

        return m;
      });

  const getRecipients = async () =>
    db
      .collection('onCall')
      .where('activeDuty', '==', true)
      .get()
      .then((docs) => {
        const results = [];
        docs.forEach(doc => results.push({ id: doc.id, ...doc.data() }));
        return results;
      });

  const send = async () => {
    const recipients = await getRecipients();
    const numbers = recipients.map(r => r.phoneNumber);

    if (shouldSendMessage() && numbers.length > 0) {
      const messageBody = await buildMessage();
      logger.trace(`sending message: ${messageBody}`);

      twilio.sendSMS(numbers, messageBody);
    }
  };

  return { send };
};

export default message;
