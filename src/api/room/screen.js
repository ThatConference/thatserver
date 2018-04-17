import logger from '../../utilities/logger';

const post = (request, response) => {
  // logger.debug('session update', request.body);

  const pubsub = request.app.get('pubsub');
  pubsub.publish('roomScreenChanged', request.body);

  response.sendStatus(200);
};

// eslint-disable-next-line
export { post };

// Room Payload
// {
//   "id": 1,
//   "deviceId": "310021001747353236343033",
//   "name": "Aralia",
//   "floor": "1",
//   "building": "Main Convention Center",
//   "session": {
//     "id": 1,
//     "speakerName": "Clark Sell",
//     "title": "Making Something MOAR awesome."
//   }
// }
