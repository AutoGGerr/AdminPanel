// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAfiiw0580mq5pEWzC4Zl8pRsrlil4kLkg",
  authDomain: "admin-panel-8c255.firebaseapp.com",
  projectId: "admin-panel-8c255",
  storageBucket: "admin-panel-8c255.firebasestorage.app",
  messagingSenderId: "447823972829",
  appId: "1:447823972829:web:b8922c734a9100017e0e34",
  measurementId: "G-2C1C56FHXE"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);