// src/firebase/config.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, query, orderBy } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBqgFf8DjYtMlNcNdVH55O-o5KCE_gfAt8",
  authDomain: "mimpiku-30086.firebaseapp.com",
  projectId: "mimpiku-30086.firebasestorage.app",
  storageBucket: "PROJECT_ID.appspot.com",
  messagingSenderId:  "18155661998",
  appId:"1:18155661998:web:cd97086466fc9ce6211b3f",
  measurementId: "G-KYT9EZ1DLN"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, getDocs, query, orderBy };