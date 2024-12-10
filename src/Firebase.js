import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDR0NVr_doBgzCNH3G4M9r--7pgbxNHj64",
  authDomain: "netflix-clone-b1f94.firebaseapp.com",
  projectId: "netflix-clone-b1f94",
  storageBucket: "netflix-clone-b1f94.firebasestorage.app",
  messagingSenderId: "728026649754",
  appId: "1:728026649754:web:68d07185444e06cfb4fb23",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

// User signup function

const signUp = async (name, email , password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
   toast.error(error.code.split('/')[1].split('-').join(" "))
  }
};

// User login function

const login = async (email , password) =>{
    try{
await signInWithEmailAndPassword(auth , email, password)
    } catch(error){
        console.log(error);
       toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}

//logout function 

const logout = () =>{
    signOut(auth);
}

export { auth , db , login , signUp , logout }