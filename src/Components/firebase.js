import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDN37lyFAaeedbI4lpR7uFZV_wFRCt-mTs",
  authDomain: "spotify-clone-570c5.firebaseapp.com",
  databaseURL: "https://spotify-clone-570c5.firebaseio.com",
  projectId: "spotify-clone-570c5",
  storageBucket: "spotify-clone-570c5.appspot.com",
  messagingSenderId: "716502843468",
  appId: "1:716502843468:web:41f0222f347e27702034e9",
  measurementId: "G-FB0RYG4Q0K",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize storage
const projectstorage = firebase.storage();
// Initialize firestore
const projectfirestore = firebase.firestore();
// create a firebase server timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export { projectfirestore, projectstorage, timestamp };
