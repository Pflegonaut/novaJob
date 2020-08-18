import firebase from 'firebase/app';
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyCI3ayGUj_SqmP1kXou0VBWtnLcoggn9PY",
    authDomain: "novahealnovajob.firebaseapp.com",
    databaseURL: "https://novahealnovajob.firebaseio.com",
    projectId: "novahealnovajob",
    storageBucket: "novahealnovajob.appspot.com",
    messagingSenderId: "881927535319",
    appId: "1:881927535319:web:486d87ad03ba3a072dce92",
    measurementId: "G-QTNXBXSV60"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;