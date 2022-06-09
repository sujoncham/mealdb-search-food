// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJeVw7sn65z8ok0ex7-0BaDeTyvIDgMos",
  authDomain: "meadb-search-food.firebaseapp.com",
  projectId: "meadb-search-food",
  storageBucket: "meadb-search-food.appspot.com",
  messagingSenderId: "698602068775",
  appId: "1:698602068775:web:fd73768cab6b6f9d6d2702"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export default auth;