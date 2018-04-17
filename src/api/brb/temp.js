import logger from '../../utilities/logger';

const post = (request, response) => {
  logger.debug('particle temp hook', request.body);

  response.sendStatus(200);
};

// eslint-disable-next-line
export { post };
