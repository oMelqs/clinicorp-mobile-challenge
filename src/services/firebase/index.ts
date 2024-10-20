// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app'
import {getAuth, initializeAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCO6EIHL0AbvBr0xZCuQhRzqNT3Btz_HXo',
  authDomain: 'todolist-challenge-app.firebaseapp.com',
  projectId: 'todolist-challenge-app',
  storageBucket: 'todolist-challenge-app.appspot.com',
  messagingSenderId: '950548045121',
  appId: '1:950548045121:web:258f05bedea3ebfb33d5c0',
  measurementId: 'G-T4GVM21283',
}
// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig)
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP)
// export const FIREBASE_ANALYTICS = getAnalytics(FIREBASE_APP);

export const db = getFirestore(FIREBASE_APP)

export const auth = getAuth(FIREBASE_APP)

export const storage = getStorage(FIREBASE_APP)
