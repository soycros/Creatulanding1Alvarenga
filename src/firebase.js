import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Si querés usar analytics:
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCeKj6ABTSW-pRmtJVpdhsWy1c09-o6zuw",
  authDomain: "ladingalvarenga.firebaseapp.com",
  projectId: "ladingalvarenga",
  storageBucket: "ladingalvarenga.firebasestorage.app",
  messagingSenderId: "340270123416",
  appId: "1:340270123416:web:be0b18b1a946887d6083ed",
  measurementId: "G-363NS7L4F5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

export default db;
