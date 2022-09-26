// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0AhEueYTtRdLlHIa39lnS39y0TT2oGZY",
  authDomain: "miniblog-2c170.firebaseapp.com",
  projectId: "miniblog-2c170",
  storageBucket: "miniblog-2c170.appspot.com",
  messagingSenderId: "955371320569",
  appId: "1:955371320569:web:d37aa279f25bd5fb451e28",
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

//iniciando banco de dados da fireStore
const db = getFirestore(app);




export { db };
