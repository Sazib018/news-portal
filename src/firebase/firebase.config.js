// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0dcJ-o2PbovCbg2owb-AZYeZjWzuMTUA",
  authDomain: "news-portal-2020e.firebaseapp.com",
  projectId: "news-portal-2020e",
  storageBucket: "news-portal-2020e.firebasestorage.app",
  messagingSenderId: "778458224966",
  appId: "1:778458224966:web:c00527a2d9fdf374a1ed47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;