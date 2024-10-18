// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app'
import {initializeAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBSoPu9zAtQPvr5fUmDJcg7mVjYLOCHnp0',
  authDomain: 'todolist-challenge-app.firebaseapp.com',
  projectId: 'todolist-challenge-app',
  storageBucket: 'todolist-challenge-app.appspot.com',
  messagingSenderId: '950548045121',
  appId: '1:950548045121:web:934a8c3c90d9f22d33d5c0',
  measurementId: 'G-F5BW9D3LPW',
}

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig)
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP)
// export const FIREBASE_ANALYTICS = getAnalytics(FIREBASE_APP);
