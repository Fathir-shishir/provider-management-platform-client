// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCM7pZqK1wixqr6UYTsS-KKjR7ofApULXo",
  authDomain: "providermanagementplatform.firebaseapp.com",
  projectId: "providermanagementplatform",
  storageBucket: "providermanagementplatform.appspot.com",
  messagingSenderId: "59925413375",
  appId: "1:59925413375:web:95f24d8bdfae06dfb63bca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth