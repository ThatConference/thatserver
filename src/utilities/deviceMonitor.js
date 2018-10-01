import request from 'request-promise';
import logger from './logger';

import buttons from '../data/buttons';

const monitorDelay = 120000;
const slug = 'https://api.particle.io/v1/diagnostics/';

const run = (cache, db) => {
  logger.trace('Requesting devices to publish health status...');

  setInterval(async () => {
    const buttonDevices = await buttons(cache, db);

    // eslint-disable-next-line
    for (const b in buttonDevices) {
      const currentCoreId = buttonDevices[b].coreId;
      const postUrl = `${slug}${currentCoreId}/update?access_token=${process.env.PARTICLE_TOKEN}`;

      request
        .post({ url: postUrl, body: '' })
        .catch(e => logger.error(`Core ID ${currentCoreId} ERRORED: ${e}`));
    }
  }, monitorDelay);
};

export default {
  run,
};
