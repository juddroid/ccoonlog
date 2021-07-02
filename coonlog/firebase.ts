import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAeLjqm9RqWAayFE1DZv_LUUGLxINvT1e8',
  authDomain: 'ccoonlog.firebaseapp.com',
  databaseURL:
    'https://ccoonlog-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'ccoonlog',
  storageBucket: 'ccoonlog.appspot.com',
  messagingSenderId: '958764117763',
  appId: '1:958764117763:web:ae0f041ba6133501170336',
  measurementId: 'G-W5L88H1NE9',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
