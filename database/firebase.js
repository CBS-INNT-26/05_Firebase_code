// database/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Indsæt din egen config her fra Firebase Console
const firebaseConfig = {
  apiKey: "DIN_API_KEY",
  authDomain: "DIT_PROJECT.firebaseapp.com",
  projectId: "DIT_PROJECT",
  storageBucket: "DIT_PROJECT.firebasestorage.app",
  messagingSenderId: "…",
  appId: "…",
};

// Init kun én gang
export const firebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Brug RTDB-URL’en fra Realtime Database (Belgium = europe-west1)
export const rtdb = getDatabase(
  firebaseApp,
  "https://DIT_PROJECT-default-rtdb.europe-west1.firebasedatabase.app"
);
