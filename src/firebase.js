// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/app";
import 'firebase/firestore';
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAqNb-biJP_Flk28SW-mqUynH1xwXxQQcg",
    authDomain: "chat-app-81f0e.firebaseapp.com",
    projectId: "chat-app-81f0e",
    storageBucket: "chat-app-81f0e.appspot.com",
    messagingSenderId: "883204406203",
    appId: "1:883204406203:web:0b05204cba6eee6499229e",
    measurementId: "G-H25FVMH8CJ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const database = firebaseApp.firestore();


  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
export default database;
