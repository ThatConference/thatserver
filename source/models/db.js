import mongoose from 'mongoose';
import logger from '../utilities/logger';

import * as models from './models';

const user = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;
const database = process.env.MONGO_DB;

const mongodbUri = `mongodb://${user}:${password}@${database}`;

mongoose.Promise = global.Promise;
mongoose.connect(mongodbUri, {
  useMongoClient: true,
});

const db = mongoose.connection;
db.on('error', () => logger.error(`mongo connection couldn't be established`));
db.once('open', () => logger.info(`mongo connection established`));
db.on('close', () => {
  logger.info('mongo connection closed');
  process.exit(0);
});

module.exports = {
  event: models.event,
  session: models.session,
  speaker: models.speaker,
};
