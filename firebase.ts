// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvLkkXFAtozryGmnWtKZaInbYT3MLyvUg",
  authDomain: "nexflit-8a637.firebaseapp.com",
  projectId: "nexflit-8a637",
  storageBucket: "nexflit-8a637.appspot.com",
  messagingSenderId: "690123739200",
  appId: "1:690123739200:web:193c4e2736b6a5d2e84fa5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

const auth = getAuth();

export default app

export {auth, db}