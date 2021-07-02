import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBCWMrnpgQx4bZQxk6erNyHiFk0auykamc',
  authDomain: 'raccoon-project-960db.firebaseapp.com',
  databaseURL: 'https://raccoon-project-960db-default-rtdb.firebaseio.com',
  projectId: 'raccoon-project-960db',
  storageBucket: 'raccoon-project-960db.appspot.com',
  messagingSenderId: '590019104365',
  appId: '1:590019104365:web:20d71e3073902b9f74f964',
  measurementId: 'G-Z9X05QFSGK',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
