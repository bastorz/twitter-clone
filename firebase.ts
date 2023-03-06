// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoBNEB1JLRoHIc4cXHyh0U4dSQ8nu7Zbw",
  authDomain: "twitter-clone-3b18e.firebaseapp.com",
  projectId: "twitter-clone-3b18e",
  storageBucket: "twitter-clone-3b18e.appspot.com",
  messagingSenderId: "889192326126",
  appId: "1:889192326126:web:f0cd6da5e7041d17e964ff",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
