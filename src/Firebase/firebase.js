import app from 'firebase/app';
import 'firebase/database';
import firestore from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBxQS0x5gqlmlwUR4u8WEA3G9IHA3uRLkk",
  authDomain: "todo-a4884.firebaseapp.com",
  databaseURL: "https://todo-a4884.firebaseio.com",
  projectId: "todo-a4884",
  storageBucket: "todo-a4884.appspot.com",
  messagingSenderId: "293122282111",
  appId: "1:293122282111:web:5039fff9ee86943e7b254a",
  measurementId: "G-97CZ5MZ9VR"
};
// const settings = {timestampsInSnapshots: true};
// firebase.firestore().settings(settings);
class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.db = app.firestore();
  }
}
export default Firebase;