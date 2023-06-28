// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYR_QQNjrnNSFJWrCZjnVk_ndoN8dH-uQ",
  authDomain: "sanskriti-7020a.firebaseapp.com",
  projectId: "sanskriti-7020a",
  storageBucket: "sanskriti-7020a.appspot.com",
  messagingSenderId: "158243226584",
  appId: "1:158243226584:web:20b15d82f8f9a8529da8ad",
  measurementId: "G-MVV4EJ7HF8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const database = getFirestore(app);
const storage = getStorage();
export {app,auth,provider,database,storage};
