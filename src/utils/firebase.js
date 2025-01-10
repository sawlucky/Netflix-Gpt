// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXcNdVmM6jO6mtrvNo8fCGVskS3f6QDns",
  authDomain: "netflix-gpt-e16f5.firebaseapp.com",
  projectId: "netflix-gpt-e16f5",
  storageBucket: "netflix-gpt-e16f5.firebasestorage.app",
  messagingSenderId: "527358908082",
  appId: "1:527358908082:web:88ca7ddb5324470e409bab",
  measurementId: "G-MKERVB0CTR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
