import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAN3GEBdnL8wAAGaSPQKJx3jZxzhUCB9X8",
    authDomain: "prueba-para-app.firebaseapp.com",
    projectId: "prueba-para-app",
    storageBucket: "prueba-para-app.appspot.com",
    messagingSenderId: "1067673277563",
    appId: "1:1067673277563:web:bee12e5470fa6804af7ede"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
    db,
    firebase
}