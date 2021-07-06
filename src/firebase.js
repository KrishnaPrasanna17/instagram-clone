import firebase from "firebase";

const firebaseApp =  firebase.initializeApp({
    apiKey: "AIzaSyBl2SyZDuX4OIq_h5YtLLsXeJgdtXWScbo",
    authDomain: "instagram-clone-296b3.firebaseapp.com",
    databaseURL:"https://instagram-clone.firebase.com",
    projectId: "instagram-clone-296b3",
    storageBucket: "instagram-clone-296b3.appspot.com",
    messagingSenderId: "113061816549",
    appId: "1:113061816549:web:c38dcedb0180d2559dcc0c",
    measurementId: "G-3KBJV9TFRG"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export{db, auth, storage};




  //export default db