import logger from '../utilities/logger';

const convertSnapshot = (snapshot) => {
  let results = {};
  snapshot.forEach((doc) => {
    const d = doc.data();
    results = {
      ...results,
      [d.coreId]: {
        ...d,
      },
    };
  });

  return results;
};

const buttons = async (cache, db) => {
  let buttonDevices = cache.get('buttons');

  const message = buttonDevices ? 'getting buttons from cache' : 'loading buttons from database';
  logger.info(message);

  if (!buttonDevices) {
    const query = db.collection('buttons').where('isAssigned', '==', true);

    buttonDevices = convertSnapshot(await query.get());

    query.onSnapshot((snapshot) => {
      logger.info('buttons snapshot was just updated');
      const results = convertSnapshot(snapshot);
      cache.set('buttons', results);
    });
  }

  return buttonDevices;
};

export default buttons;
