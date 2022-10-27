// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6LIOXX8lhV9Zk3XgH4Tx_ZjxNZjEvO-o",
  authDomain: "fenice-cosmeticos.firebaseapp.com",
  projectId: "fenice-cosmeticos",
  storageBucket: "fenice-cosmeticos.appspot.com",
  messagingSenderId: "434209861340",
  appId: "1:434209861340:web:75ec715084830e883b4e19"
};

// Initialize Firebase
const app= initializeApp(firebaseConfig);

// crear instancia de la base de datos
export const datosFirebase= getFirestore(app);