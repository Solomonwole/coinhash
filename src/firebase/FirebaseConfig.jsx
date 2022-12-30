import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from '@firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyAYP19qPUC313xIA-xAh_A_BZhckA7vqzo',
  authDomain: 'coinhash-a5e91.firebaseapp.com',
  projectId: 'coinhash-a5e91',
  storageBucket: 'coinhash-a5e91.appspot.com',
  messagingSenderId: '469052688035',
  appId: '1:469052688035:web:4d99bd6671ca0836746116',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
