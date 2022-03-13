// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDHJEwUNwWEb-_3jj01EJPXD0ub6RrmfvI",
    authDomain: "lofi-music-4af7b.firebaseapp.com",
    projectId: "lofi-music-4af7b",
    storageBucket: "lofi-music-4af7b.appspot.com",
    messagingSenderId: "1012386527458",
    appId: "1:1012386527458:web:3837c42cc7f0d4bb9386bb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const authentication = getAuth(app)
export default authentication