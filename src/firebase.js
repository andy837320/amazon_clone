// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDJpl9ZmHXFakKMNCm3ffSdPV2xwAVI-qI",
  authDomain: "challenge-23347.firebaseapp.com",
  projectId: "challenge-23347",
  storageBucket: "challenge-23347.appspot.com",
  messagingSenderId: "829181076536",
  appId: "1:829181076536:web:cc470dbebdc657bb90b2cd",
  measurementId: "G-KP5CJCD1NL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
