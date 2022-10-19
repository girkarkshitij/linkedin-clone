import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBFTbCGcneAWo1aQdcoA9IATMmUTG_jjQ0',
  authDomain: 'linkedin-clone-6e627.firebaseapp.com',
  projectId: 'linkedin-clone-6e627',
  storageBucket: 'linkedin-clone-6e627.appspot.com',
  messagingSenderId: '71650317360',
  appId: '1:71650317360:web:2e8b6095e5f3ff653bc9f5',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
