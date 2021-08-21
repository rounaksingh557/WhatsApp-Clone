import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZElUBnQanW9-F0aXTto_qPKB_KOgVxdM",
  authDomain: "whats-app-clone-d0947.firebaseapp.com",
  projectId: "whats-app-clone-d0947",
  storageBucket: "whats-app-clone-d0947.appspot.com",
  messagingSenderId: "471696246316",
  appId: "1:471696246316:web:d2b8c91d40a91123bb3389",
  measurementId: "G-5XBK2ZR9X5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
