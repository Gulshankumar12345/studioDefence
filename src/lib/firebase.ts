import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  "projectId": "nilkanth-defence-systems",
  "appId": "1:265480707687:web:6915f2df2374b5fed5bec2",
  "storageBucket": "nilkanth-defence-systems.firebasestorage.app",
  "apiKey": "AIzaSyDhmq-xH6CZd0orqV6vx2dsvjB6ZQqNWBQ",
  "authDomain": "nilkanth-defence-systems.firebaseapp.com",
  "measurementId": "",
  "messagingSenderId": "265480707687"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { app, auth };
