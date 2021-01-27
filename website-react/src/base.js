import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAmH-ppyru_a0RQYFMexMQBNItd0IbMHag",
    authDomain: "quagga-1b12e.firebaseapp.com",
    projectId: "quagga-1b12e",
    storageBucket: "quagga-1b12e.appspot.com",
    messagingSenderId: "523533936340",
    appId: "1:523533936340:web:09842e3cf96c1c2fdefd41",
    measurementId: "G-Z030H9LYEK"
};


const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();

export { db, auth }