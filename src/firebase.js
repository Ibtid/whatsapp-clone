import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAxLezw7D5B67otF-R1QjclsBTUpzE58Ys",
    authDomain: "whats-app-clone-526f4.firebaseapp.com",
    databaseURL: "https://whats-app-clone-526f4.firebaseio.com",
    projectId: "whats-app-clone-526f4",
    storageBucket: "whats-app-clone-526f4.appspot.com",
    messagingSenderId: "840716225567",
    appId: "1:840716225567:web:ce1d33f226fac182ab592a",
    measurementId: "G-CC3FJ3SLM8"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig); 

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;