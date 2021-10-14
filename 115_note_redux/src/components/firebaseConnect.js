import  firebase from 'firebase/app';
import 'firebase/database';    // for realtime database
import 'firebase/analytics';
import "firebase/auth";
import "firebase/firestore";
var firebaseConfig = {
    apiKey: "AIzaSyAB73A0qAmejcjDKDCq2x1hRpoUIQwCWQc",
    authDomain: "note1-dece2.firebaseapp.com",
    databaseURL: "https://note1-dece2-default-rtdb.firebaseio.com",
    projectId: "note1-dece2",
    storageBucket: "note1-dece2.appspot.com",
    messagingSenderId: "807203407009",
    appId: "1:807203407009:web:6579e3fae83d9dedf85ce0",
    measurementId: "G-6ZVRMQM9C7"
  };

  firebase.initializeApp(firebaseConfig);

  // export const firebaseConnect = firebase.initializeApp(firebaseConfig);
  export const Data = firebase.database().ref('noteData');
 
