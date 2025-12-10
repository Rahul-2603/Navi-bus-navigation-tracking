import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  collection,
  limit,
  orderBy,
  query,
  where,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
import {
  getDatabase,
  ref,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut // <-- ADD THIS LINE
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBlc56ShmKg__wr2Kf-1V-I1-eQBD5TjLw",
  authDomain: "gpstracker-a7277.firebaseapp.com",
  databaseURL: "https://gpstracker-a7277-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "gpstracker-a7277",
  storageBucket: "gpstracker-a7277.firebasestorage.app",
  messagingSenderId: "345140392144",
  appId: "1:345140392144:web:1db3cb10ac4be067aeeed5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const rtdb = getDatabase(app);
const auth = getAuth(app);

export {
  db,
  rtdb,
  auth,
  app,
  doc,
  setDoc,
  getDoc,
  collection,
  query,
  limit,
  orderBy,
  where,
  getDocs,
  ref,
  onValue,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut // <-- ADD THIS LINE TO EXPORTS TOO
};
