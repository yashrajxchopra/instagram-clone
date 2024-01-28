import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBjAr7Ow2j5rK4Phr-OjTbVfZKzna3XgiM",
  authDomain: "insta-clone-5ad38.firebaseapp.com",
  projectId: "insta-clone-5ad38",
  storageBucket: "insta-clone-5ad38.appspot.com",
  messagingSenderId: "529069117039",
  appId: "1:529069117039:web:ffccdb81efc94e59d1479a",
  measurementId: "G-KNTH8T0P5L"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
