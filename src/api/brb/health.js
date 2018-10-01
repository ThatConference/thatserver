import logger from '../../utilities/logger';

/* Example Playload

{
  device: {
    system: {
      uptime: 334961,
      memory: {
        total: 83200,
        used: 32496,
      },
    },
    network: {
      connection: {
        status: 4,
        error: 1024,
        disconnects: 0,
        attempts: 9,
        disconnect: 0,
      },
      signal: {
        rssi: -50,
        strength: 100,
        quality: 100,
        qualityv: 42,
        at: 1,
        strengthv: -50,
      },
    },
    cloud: {
      connection: {
        status: 2, error: 0, attempts: 1, disconnect: 0,
      },
      disconnects: 0,
      publish: { rate_limited: 0 },
      coap: { unack: 0 },
    },
  },
  service: {
    device: { status: 'ok' },
    coap: { round_trip: 70 },
    cloud: { uptime: 334613, publish: { sent: 61347 } },
  },
};

*/

const post = (request, response) => {
  logger.trace('particle device health updated');
  logger.data('device health data:', request.body);

  const newPayload = request.body;
  newPayload.data = JSON.parse(request.body.data);

  const pubsub = request.app.get('pubsub');
  pubsub.publish('deviceHealth', newPayload);

  response.sendStatus(200);
};

// eslint-disable-next-line
export { post };
