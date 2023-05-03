// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBQfm06mxsELB_wiCZIoh2-19v_jX0BOiU",
    authDomain: "the-news-dragon-ad390.firebaseapp.com",
    projectId: "the-news-dragon-ad390",
    storageBucket: "the-news-dragon-ad390.appspot.com",
    messagingSenderId: "336810724263",
    appId: "1:336810724263:web:fb65d11dcfbd320b8fc482"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;