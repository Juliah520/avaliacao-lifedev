import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCdYnknF0iIGqFj8iBAZLZkzOMky7eDfGs",
  authDomain: "avalicaojulia.firebaseapp.com",
  projectId: "avalicaojulia",
  storageBucket: "avalicaojulia.firebasestorage.app",
  messagingSenderId: "382394506759",
  appId: "1:382394506759:web:efc1e95427b37073f014a2",
  measurementId: "G-90E9H8GM8F"
};

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app)
const auth = getAuth(app)

export { db, auth }