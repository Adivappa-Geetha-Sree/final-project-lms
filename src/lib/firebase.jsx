import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_AUTH_DOMAIN",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_STORAGE_BUCKET",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID",
apiKey: "AIzaSyBnnnmWV3Gj7BPDySLvDVh9M71LoRtEqgU",
authDomain: "lms-admin-b407d.firebaseapp.com",
projectId: "lms-admin-b407d",
storageBucket: "lms-admin-b407d.firebasestorage.app",
messagingSenderId: "591944814286",
appId: "1:591944814286:web:5fb53c0d31feb35fa84a9f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
