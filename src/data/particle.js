import request from 'request-promise';
import logger from '../utilities/logger';

const acknowledge = particleCoreId =>
  new Promise((resolve, reject) => {
    // Build the URL to post to the particle cloud
    // example url https://api.particle.io/v1/devices/[DEVICE_ID]/[FUNCTION_NAME]?access_token=[ACCESS_TOKEN]
    const slug = 'https://api.particle.io/v1/devices/';

    if (!process.env.PARTICLE_TOKEN) {
      const message = 'no env setting for PARTICLE_TOKEN';
      logger.error(message);
      reject(message);
    }

    const postUrl = `${slug}${particleCoreId}/ackHelp?access_token=${process.env.PARTICLE_TOKEN}`;
    logger.debug(`particle ack uri: ${postUrl}`);

    request
      .post({ url: postUrl, body: '' })
      .then(response => resolve(response))
      .catch(e => reject(e));
  });

export default {
  acknowledge,
};
