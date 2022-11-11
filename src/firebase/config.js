import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyDpz22TtVd5NqVJZT9wdXr035PXp60Ixws",
    authDomain: "mymoney-62869.firebaseapp.com",
    projectId: "mymoney-62869",
    storageBucket: "mymoney-62869.appspot.com",
    messagingSenderId: "186405053885",
    appId: "1:186405053885:web:30e08a805be59c06d15ed4"
  };

  
// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }