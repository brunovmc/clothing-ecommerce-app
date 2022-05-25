import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider
} from 'firebase/auth'
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCSV1MAovSJBqN2iVnG8GNCqbL5YcYssfU",
  authDomain: "clothing-ecommerce-app-dummydb.firebaseapp.com",
  projectId: "clothing-ecommerce-app-dummydb",
  storageBucket: "clothing-ecommerce-app-dummydb.appspot.com",
  messagingSenderId: "1002804874926",
  appId: "1:1002804874926:web:71b67b67b092cb049c673f"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
    
}