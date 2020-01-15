import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC97A_hUHSETTuQ53H9LNH3eM14UBJPlB0",
  authDomain: "sport-buddy-fd005.firebaseapp.com",
  databaseURL: "https://sport-buddy-fd005.firebaseio.com",
  projectId: "sport-buddy-fd005",
  storageBucket: "sport-buddy-fd005.appspot.com",
  messagingSenderId: "560753943326",
  appId: "1:560753943326:web:a0803a17bf4d409b659f0f",
  measurementId: "G-E431C7GKFZ"
};

firebase.initializeApp(firebaseConfig);

firebase
  .database()
  .ref()
  .set({
    name: "Michal Moninec",
    job: "react best fucking developer"
  });
