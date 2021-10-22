
  // Import the functions you need from the SDKs you need
  //import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
  // import firebase from 'firebase/app';
  // import 'firebase/storage'; //to store the images
  // import 'firebase/firestore'; //for database

import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBS_NrAtxKTQzSi-gb_QpBUKOc55DUgce8",
    authDomain: "heizal-firegram.firebaseapp.com",
    projectId: "heizal-firegram",
    storageBucket: "heizal-firegram.appspot.com",
    messagingSenderId: "251234160796",
    appId: "1:251234160796:web:497b802b72eea6458ddd59"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);  //before it was const app = without firebase

  const projectStorage = firebase.storage(); //call this function when we want to interact with storage
  const projectFirestore = firebase.firestore(); //call this function when we want to interact with firestore
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp }; //with this we can now import them into different react components