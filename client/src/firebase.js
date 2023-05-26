import { initializeApp } from "firebase/app";
import { GoogleAuthProvider,getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBgtTvQRa5q6Hh0wnqCKDpNHMr91Q-6-QA",
  authDomain: "codeusers-187b8.firebaseapp.com",
  projectId: "codeusers-187b8",
  storageBucket: "codeusers-187b8.appspot.com",
  messagingSenderId: "355673486350",
  appId: "1:355673486350:web:0a3c61fcde0f41b601785f"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app);
  const provider =  new GoogleAuthProvider()


  export {auth,provider};