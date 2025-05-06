// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "marketplace-4e84f.firebaseapp.com",
  projectId: "marketplace-4e84f",
  storageBucket: "marketplace-4e84f.firebasestorage.app",
  messagingSenderId: "351046510850",
  appId: "1:351046510850:web:ab471e4144495065ad7a1b",
  measurementId: "G-4HLZXVYTH5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
