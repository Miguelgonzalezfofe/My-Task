// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
/* Autenticacion con FireBase */
import { getAuth } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
/* Base de datos con FireBase */
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js"
import { firebaseConfig } from "./appConfing.js";
/* import Service */


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)





