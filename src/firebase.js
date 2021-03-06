import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import * as firebase from './firebase';

import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyCihBiMA9KsUrRYsvCoVQPKOG6Dx6KZu1k",
  authDomain: "practice-5c656.firebaseapp.com",
  databaseURL: "https://practice-5c656-default-rtdb.firebaseio.com",
  projectId: "practice-5c656",
  storageBucket: "practice-5c656.appspot.com",
  messagingSenderId: "205724620555",
  appId: "1:205724620555:web:f1c2e037cdbdec17fb740e",
  measurementId: "G-LJBQM755DV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);
export default firebase;