import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC1CbkfvN4tt9mEdEbQ-bf9_MqBGS3KI-U",
  authDomain: "hats-9d3bc.firebaseapp.com",
  projectId: "hats-9d3bc",
  storageBucket: "hats-9d3bc.appspot.com",
  messagingSenderId: "68057591451",
  appId: "1:68057591451:web:b799f93a47d5a296ce203e",
  measurementId: "G-9WRMDNLQBF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
