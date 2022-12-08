import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'




const firebaseConfig = {
    apiKey: "AIzaSyCwCGyBm7GJzt5MD652uwHUIZJ-9tLPs5k",
    authDomain: "fir-tutoriel-d811a.firebaseapp.com",
    projectId: "fir-tutoriel-d811a",
    storageBucket: "fir-tutoriel-d811a.appspot.com",
    messagingSenderId: "562242107233",
    appId: "1:562242107233:web:db77b8ac4aaa5b70a1f720"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app)