import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDab9c0TAFXf822wbgL8HREIU2WdB6mXIc",
  authDomain: "lmsauth-a99a5.firebaseapp.com",
  projectId: "lmsauth-a99a5",
  storageBucket: "lmsauth-a99a5.firebasestorage.app",
  messagingSenderId: "912819047376",
  appId: "1:912819047376:web:f51b1bb65542c11cbb07d5",
  measurementId: "G-58SXWFJJ40"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}

