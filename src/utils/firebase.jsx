// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,createUserWithEmailAndPassword} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCe5FYGNjWf78XCokCuc15e75wN-gOmOHk",
  authDomain: "cric-web-dd348.firebaseapp.com",
  projectId: "cric-web-dd348",
  storageBucket: "cric-web-dd348.firebasestorage.app",
  messagingSenderId: "968538755743",
  appId: "1:968538755743:web:5a8f24f66031d5727488aa",
  measurementId: "G-J9QX4QELR8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth()