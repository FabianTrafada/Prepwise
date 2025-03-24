import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKrcMK4lMb49gSCfVjhbLNxnQNKqypBsQ",
  authDomain: "prepwise-2b206.firebaseapp.com",
  projectId: "prepwise-2b206",
  storageBucket: "prepwise-2b206.firebasestorage.app",
  messagingSenderId: "161578347256",
  appId: "1:161578347256:web:6bba98e4d1a0f591aee90d",
  measurementId: "G-D67QK24PPT"
};

// Initialize Firebase
const app = !getApps.length ?initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);