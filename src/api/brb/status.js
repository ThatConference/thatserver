import logger from '../../utilities/logger';

const post = (request, response) => {
  logger.debug('particle status hook', request.body);

  response.sendStatus(200);
};

// eslint-disable-next-line
export { post };
