import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyBLZZRt8n4RDklv2WENLcOYCCHi3P18i8M",
    authDomain: "clone-c7a82.firebaseapp.com",
    databaseURL: "https://clone-c7a82-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "clone-c7a82",
    storageBucket: "clone-c7a82.appspot.com",
    messagingSenderId: "388714606293",
    appId: "1:388714606293:web:e77ea19d64bc0abe073c5c",
    measurementId: "G-WY2WNMPMVL"
};

const firebaseApp = initializeApp(firebaseConfig);


const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };