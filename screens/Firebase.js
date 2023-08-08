// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA9F_YEdWo3e2tF67ob9HM8rmsX9scdLQA" ,
  authDomain:"drible-app.firebaseapp.com",
  projectId: "drible-app",
  storageBucket: "drible-app.appspot.com",
  messagingSenderId:"719900218598" ,
  appId: "1:719900218598:web:b87527371e29a0fd241727",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage();