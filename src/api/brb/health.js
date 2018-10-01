import logger from '../../utilities/logger';

/*

sample payload

*/

const post = (request, response) => {
  logger.trace('particle device health updated');
  logger.data('device device health data:', request.body.data);

  const newPayload = request.body;
  newPayload.data = JSON.parse(request.body.data);

  const pubsub = request.app.get('pubsub');
  pubsub.publish('deviceHealth', newPayload);

  response.sendStatus(200);
};

// eslint-disable-next-line
export { post };
