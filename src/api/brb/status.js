import logger from '../../utilities/logger';

const post = (request, response) => {
  // logger.debug('particle status hook', request.body);

  const pubsub = request.app.get('pubsub');
  pubsub.publish('speakerStatusChanged', request.body);

  response.sendStatus(200);
};

// eslint-disable-next-line
export { post };

/*

sample payload

{ event: 'ThatConferenceRoomEvent-NeedHelp',
  data: 'GREEN',
  published_at: '2018-04-17T00:44:26.797Z',
  coreid: '2a0026001447353236343033',
  userid: '5962b1fc60716d4cb00abd4e',
  fw_version: 34,
  public: true }

*/
