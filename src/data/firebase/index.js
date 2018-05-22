import admin from 'firebase-admin';

import serviceAccount from './firebaseServiceAccount.key'; // ('./firebaseServiceAccount.privateKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://that-conference-api.firebaseio.com',
});

export default admin.firestore();
