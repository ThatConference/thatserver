import * as brbStatus from './brb/status';
import * as brbTemp from './brb/temp';
import * as roomScreen from './room/screen';

const registerRoutes = (app) => {
  app.route('/api/brb/temp').post(brbTemp.post);
  app.route('/api/brb/status').post(brbStatus.post);
  app.route('/api/room/screen').post(roomScreen.post);
};

export default registerRoutes;
