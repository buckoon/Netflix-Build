import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCcwPVPCKsCTW68xQwFw1HDu652EvQBZFE",
    authDomain: "netflix-d98b5.firebaseapp.com",
    projectId: "netflix-d98b5",
    storageBucket: "netflix-d98b5.appspot.com",
    messagingSenderId: "1018025928207",
    appId: "1:1018025928207:web:3957fa3f9e009b8f19657a",
    measurementId: "G-GRYEYGYTBR"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};