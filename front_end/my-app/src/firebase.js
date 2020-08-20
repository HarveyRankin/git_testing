import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyDmr84Vt6-zOkCXwEAqU7c0XFGw1C35adE",
    authDomain: "fake-tinder-53802.firebaseapp.com",
    databaseURL: "https://fake-tinder-53802.firebaseio.com",
    projectId: "fake-tinder-53802",
    storageBucket: "fake-tinder-53802.appspot.com",
    messagingSenderId: "245585981759",
    appId: "1:245585981759:web:d7de520041f50784aa238a",
    measurementId: "G-6S89YFEV2G"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  export default db;
  
