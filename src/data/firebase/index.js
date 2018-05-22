import admin from 'firebase-admin';

const serviceAccount = require('./firebaseServiceAccount.privateKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://that-conference-api.firebaseio.com',
});

export default admin.firestore();
