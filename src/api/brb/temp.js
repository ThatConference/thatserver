import logger from '../../utilities/logger';

const post = (request, response) => {
  // logger.debug('particle temp hook', request.body);

  const pubsub = request.app.get('pubsub');
  pubsub.publish('roomTempChanged', request.body);

  response.sendStatus(200);
};

// eslint-disable-next-line
export { post };

/*

sample payload

{ event: 'ThatConferenceRoomEvent-Temp',
  data: '{"dhtTemperature":69.980003,"dhtHumidity":42.099998,"tmp36Temperature":70.373626}',
  published_at: '2018-04-17T00:44:13.243Z',
  coreid: '2a0026001447353236343033',
  userid: '5962b1fc60716d4cb00abd4e',
  fw_version: 34,
  public: true }

*/
