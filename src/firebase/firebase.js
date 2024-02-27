import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDPONsjsrnKr-GnbJ-O3i-rxyRjuuFRZMc",
  authDomain: "insta-clone-c2463.firebaseapp.com",
  projectId: "insta-clone-c2463",
  storageBucket: "insta-clone-c2463.appspot.com",
  messagingSenderId: "661338777828",
  appId: "1:661338777828:web:1d82d4052b5c39f94ca4f1",
  measurementId: "G-7H5C0WJY4C",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
