import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB74mxE8t5TbZhpEzt6p-G80JBptqXk9E0",
  authDomain: "simpleinventory-1acba.firebaseapp.com",
  databaseURL: "https://simpleinventory-1acba.firebaseio.com",
  projectId: "simpleinventory-1acba",
  storageBucket: "simpleinventory-1acba.appspot.com",
  messagingSenderId: "963515436020",
  appId: "1:963515436020:web:4d922a2312888aa7bf07a1",
  measurementId: "G-GN42PM9MHS"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseDb = firebaseApp.database();

export { firebaseDb };
