import logger from '../../utilities/logger';
import messaging from '../../core/messaging';

/*
sample payload
  {
    "event": "ThatConferenceRoomEvent-NeedHelp",
    "data": "GREEN",
    "published_at": "2018-04-17T00:44:26.797Z",
    "coreid": "2a0026001447353236343033",
    "userid": "5962b1fc60716d4cb00abd4e",
    "fw_version": 34,
    "public": true
  }
*/

const post = (request, response) => {
  logger.trace('button', request.body.coreid);

  const cache = request.app.get('cache');
  const db = request.app.get('db');

  if (request.body.data.toUpperCase() === 'RED') {
    messaging(cache, request.body.coreid, db).send();
  }

  const pubsub = request.app.get('pubsub');
  pubsub.publish('speakerStatusChanged', request.body);

  response.sendStatus(200);
};

// eslint-disable-next-line
export { post };
