// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {collection, doc, setDoc, orderBy, onSnapshot} from "firebase/firestore"
import "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5ezQuNgBQI0nkS1JHt7PHxXUxOjaQtxE",
  authDomain: "clone-c5d17.firebaseapp.com",
  projectId: "clone-c5d17",
  storageBucket: "clone-c5d17.appspot.com",
  messagingSenderId: "1008482593023",
  appId: "1:1008482593023:web:1115370fedc3a360af04ca",
  measurementId: "G-8WRGNBNK2T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app)
//const db = app.getFirestore()
const auth = getAuth (app)

export {db, auth, collection, doc, setDoc, orderBy, onSnapshot}