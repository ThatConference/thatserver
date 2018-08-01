import logger from '../../utilities/logger';

/* example payload

  {
    "doWorkSon": "true",
  }

*/

const post = async (request, response) => {
  logger.trace('updateSource has been called.');
  const payload = request.body;

  const pubsub = request.app.get('pubsub');

  pubsub.publish('deploymentChanged', { shouldUpdate: true });

  response.sendStatus(200);
};

// eslint-disable-next-line
export { post };
