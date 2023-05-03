// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCN9Qsw22wfOJNZLFiAu6LE75yNNhyo8P0",
    authDomain: "ema-john-auth-df1c9.firebaseapp.com",
    projectId: "ema-john-auth-df1c9",
    storageBucket: "ema-john-auth-df1c9.appspot.com",
    messagingSenderId: "48558357711",
    appId: "1:48558357711:web:5b32d4b7b1cec108654bba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;