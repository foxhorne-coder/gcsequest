import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithRedirect, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";
import { getFirestore, doc, setDoc, collection, getDocs, query, orderBy, limit } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";
import { firebaseConfig } from "./firebase-config.js";
const app=initializeApp(firebaseConfig); export const auth=getAuth(app); export const db=getFirestore(app);
export const loginWithGoogle=()=>signInWithRedirect(auth,new GoogleAuthProvider());
export const logout=()=>signOut(auth); export const watchAuth=cb=>onAuthStateChanged(auth,cb);
export async function saveScore(user,xp){if(user)await setDoc(doc(db,"users",user.uid),{displayName:user.displayName||"Student",xp:Number(xp)||0,updatedAt:Date.now()},{merge:true});}
export async function getLeaderboard(){const s=await getDocs(query(collection(db,"users"),orderBy("xp","desc"),limit(50)));return s.docs.map(d=>d.data());}
