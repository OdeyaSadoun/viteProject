// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKSEJ2PVlEj6FcyDNUkJ-pZxnFa-Wd65M",
  authDomain: "test-project-2291d.firebaseapp.com",
  projectId: "test-project-2291d",
  storageBucket: "test-project-2291d.appspot.com",
  messagingSenderId: "847072550961",
  appId: "1:847072550961:web:d9c1b8659050ad3f607510"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();

export const auth = getAuth();