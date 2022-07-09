// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvBFt-u7CWmYrQKr3XMAgUUBtTNnSB_eA",
  authDomain: "drible-a2f28.firebaseapp.com",
  projectId: "drible-a2f28",
  storageBucket: "drible-a2f28.appspot.com",
  messagingSenderId: "12945448555",
  appId: "1:12945448555:web:1f493f08170912fd1f9b2e",
  measurementId: "G-5XZKQ2VYZ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);