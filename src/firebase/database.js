import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBWx4p0j16mdUIivZLBqz_8l_BH6OhRpR4",
    authDomain: "myocardio-awdg6.firebaseapp.com",
    projectId: "myocardio-awdg6",
    storageBucket: "myocardio-awdg6.appspot.com",
    messagingSenderId: "886784373926",
    appId: "1:886784373926:web:08305df28d2701e4c3b067",
    measurementId: "G-PK42GS9GFN"
  };

  //initialize firebase
  firebase.initializeApp(firebaseConfig);
  const firebaseAuthentication = firebase.auth();
  const firebaseFireStore = firebase.firestore();

  export { firebaseAuthentication, firebaseFireStore, firebase};

