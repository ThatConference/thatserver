import logger from '../../utilities/logger';

/*
  todo.. this needs to be reworked based on what we get back from the TC Server.

  the change will come in here.
  DB needs to be updated and the new list needs to get published to everyone.
  payloads need to match a session found in firebase.
*/

const post = (request, response) => {
  logger.trace(`session update for ${request.body.id} : ${request.body.name}`);

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
