import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';



var fireDb = {
    apiKey: "AIzaSyDNvqfhOqWy47SZnYoDWb7BNy_Y6Az8rek",
    authDomain: "neows-4ebd0.firebaseapp.com",
    databaseURL: "https://neows-4ebd0.firebaseio.com",
    projectId: "neows-4ebd0",
    storageBucket: "neows-4ebd0.appspot.com",
    messagingSenderId: "1052848984664",
    appId: "1:1052848984664:web:2ba9c7c05f52e233da302d",
    measurementId: "G-TGZ0434P05"
  }

firebase.initializeApp(fireDb);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const analytics = firebase.analytics();

export const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () =>  auth.signInWithPopup(provider);

export default firebase;
  

