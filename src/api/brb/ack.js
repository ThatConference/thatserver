import logger from '../../utilities/logger';
import particle from '../../data/particle';

/*
example payload
  {
    "coreId": "2a0026001447353236343033",
  }
*/

const post = async (request, response) => {
  logger.trace('payload data:', request.body);
  const payload = request.body;

  try {
    await particle.acknowledge(payload.coreId);
    response.sendStatus(200);
  } catch (e) {
    logger.error(e);
    response.sendStatus(500);
  }
};

// eslint-disable-next-line
export { post };
