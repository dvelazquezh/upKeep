import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAN3GEBdnL8wAAGaSPQKJx3jZxzhUCB9X8",
  authDomain: "prueba-para-app.firebaseapp.com",
  projectId: "prueba-para-app",
  storageBucket: "prueba-para-app.appspot.com",
  messagingSenderId: "1067673277563",
  appId: "1:1067673277563:web:4bb79be94c445ddeaf7ede"
};


let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };