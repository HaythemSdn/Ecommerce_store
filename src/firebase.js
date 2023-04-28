// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCWyPg7ojELjw9GtGyxvPqMf9QlGCqFZ84",
  authDomain: "vue-shop-48114.firebaseapp.com",
  projectId: "vue-shop-48114",
  storageBucket: "vue-shop-48114.appspot.com",
  messagingSenderId: "448644138916",
  appId: "1:448644138916:web:dcdb08defd40916db8e331",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth ,db};
