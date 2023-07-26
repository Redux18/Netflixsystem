// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
 


  apiKey:'AIzaSyBZ85acLS0mjgXIdCmNm6M7UYKgjxdqUzE',
  authDomain:'netflixnew-92d2b.firebaseapp.com',
  projectId:'netflixnew-92d2b',
  storageBucket:'netflixnew-92d2b.appspot.com',
  messagingSenderId:'923371247042',
  appId:'1:923371247042:web:c84aad5a67ae4a645c325b'




};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)




