import Twilio from 'twilio';
import Cache from 'node-cache';

import logger from '../utilities/logger';

const sendSMS = (recipients, message) => {
  logger.trace('sending sms message to twilio');

  const client = new Twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH);

  recipients.forEach(r =>
    client.messages
      .create({
        body: message,
        from: process.env.TWILIO_FROM,
        to: r,
      })
      .catch(e => logger.error(e)));
};

export default {
  sendSMS,
};
