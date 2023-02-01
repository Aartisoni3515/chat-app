// import firebase from "firebase/compat/app"

//     const firebaseConfig = {
//     apiKey: "AIzaSyDrz7jA93RijHyl6JH2m-xy3WzkZt4VkTw",
//     authDomain: "chat-app-4d207.firebaseapp.com",
//     projectId: "chat-app-4d207",
//     storageBucket: "chat-app-4d207.appspot.com",
//     messagingSenderId: "1065697118133",
//     appId: "1:1065697118133:web:170ca13b98386a8aa9bbfc",
//     measurementId: "G-2VX212F6P6"

// }
// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore

// const auth = firebase.auth

// export default { db , auth } ;

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDrz7jA93RijHyl6JH2m-xy3WzkZt4VkTw",
  authDomain: "chat-app-4d207.firebaseapp.com",
  projectId: "chat-app-4d207",
  storageBucket: "chat-app-4d207.appspot.com",
  messagingSenderId: "1065697118133",
  appId: "1:1065697118133:web:170ca13b98386a8aa9bbfc",
  measurementId: "G-2VX212F6P6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
