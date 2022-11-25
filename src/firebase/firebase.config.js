// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCr89ZqXabUQWaqx1mYkwm6mp0kCnVSPxI",
  authDomain: "bike-mania-b16cc.firebaseapp.com",
  projectId: "bike-mania-b16cc",
  storageBucket: "bike-mania-b16cc.appspot.com",
  messagingSenderId: "306533388670",
  appId: "1:306533388670:web:19a7ab96679b38f08d232f"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;