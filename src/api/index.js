import * as brbStatus from './brb/status';
import * as brbTemp from './brb/temp';

import * as brbAck from './brb/ack';
import * as roomScreen from './room/screen';
import * as deviceHealth from './brb/health';

import * as deployment from './admin/deployment';

const registerRoutes = (app) => {
  // Room Display Updates
  app.route('/api/room/screen').post(roomScreen.post);

  // Big Red Button
  app.route('/api/brb/ack').post(brbAck.post);

  // TODO: just there for demo purposes
  app.route('/api/brb/temp').post(brbTemp.post);
  app.route('/api/brb/status').post(brbStatus.post);
  app.route('/api/brb/health').post(deviceHealth.post);

  // Admin URIs
  app.route('/api/admin/deployment').post(deployment.post);
};

export default registerRoutes;
