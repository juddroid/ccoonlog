import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: 'ccoonlog.firebaseapp.com',
  databaseURL:
    'https://ccoonlog-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'ccoonlog',
  storageBucket: 'ccoonlog.appspot.com',
  messagingSenderId: '958764117763',
  appId: '1:958764117763:web:b7a663b2df8e23f4170336',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
