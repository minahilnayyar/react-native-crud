import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBmj5bDFWVigNP8M9XbuACezl38UbOFzj8",
  authDomain: "bseb-3ef99.firebaseapp.com",
  projectId: "bseb-3ef99",
  storageBucket: "bseb-3ef99.appspot.com",
  messagingSenderId: "383532555003",
  appId: "1:383532555003:web:e39a94010284e46ee0ae5e"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db
};
