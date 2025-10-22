// Import Firebase core functions
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoB1YERuvJMLK_dC_Hi3-rznVcBisKqss",
  authDomain: "mwt-food-delivery.firebaseapp.com",
  projectId: "mwt-food-delivery",
  storageBucket: "mwt-food-delivery.appspot.com",
  messagingSenderId: "660108556579",
  appId: "1:660108556579:web:ff4004975bc9681d763496",
  measurementId: "G-46KMWYEDR3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, analytics, auth, db, storage };
