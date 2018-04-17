import * as brbStatus from './brb/status';
import * as brbTemp from './brb/temp';

const registerRoutes = (app) => {
  app.route('/api/brb/temp').post(brbTemp.post);
  app.route('/api/brb/status').post(brbStatus.post);
};

export default registerRoutes;
