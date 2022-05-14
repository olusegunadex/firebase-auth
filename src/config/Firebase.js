// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDm49Y-D4LU85gJaty9owsT8mqdGRyi0_o",
  authDomain: "segundev-b4c21.firebaseapp.com",
  projectId: "segundev-b4c21",
  storageBucket: "segundev-b4c21.appspot.com",
  messagingSenderId: "609086032122",
  appId: "1:609086032122:web:602804fcce6bdb69b72143"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
