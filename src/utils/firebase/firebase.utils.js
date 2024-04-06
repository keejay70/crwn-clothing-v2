import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAA8OFHuANf291-kqH2nc53682mWKpKG3A",
  authDomain: "crwn-clothing-89ceb.firebaseapp.com",
  projectId: "crwn-clothing-89ceb",
  storageBucket: "crwn-clothing-89ceb.appspot.com",
  messagingSenderId: "701039204593",
  appId: "1:701039204593:web:6b3e8f2dd01df26778f150",
  measurementId: "G-SZFNKLMJ70"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);