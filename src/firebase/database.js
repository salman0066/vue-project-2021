import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBv9vv6V8HP6SSNae-oMyqmRaXVayEsq1o",
  authDomain: "myo-cardio066.firebaseapp.com",
  projectId: "myo-cardio066",
  storageBucket: "myo-cardio066.appspot.com",
  messagingSenderId: "963418076647",
  appId: "1:963418076647:web:4e609c1d55cc018101b942"
};

  //initialize firebase
  firebase.initializeApp(firebaseConfig);
  const firebaseAuthentication = firebase.auth();
  const firebaseFireStore = firebase.firestore();

  export { firebaseAuthentication, firebaseFireStore, firebase};

