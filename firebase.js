// firebase.js
// Optional online mode for GCSEQuest.
// Add this file to the site and include it from index.html as a module
// after completing Firebase setup.

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, collection, query, orderBy, limit, getDocs } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";
import { firebaseConfig } from "./firebase-config.js";

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export async function loginWithGoogle(){
  const result = await signInWithPopup(auth, new GoogleAuthProvider());
  return result.user;
}
export async function logout(){ await signOut(auth); }

export async function saveScore(user, xp){
  if(!user) return;
  await setDoc(doc(db,"users",user.uid), {
    displayName:user.displayName || "Student",
    xp:xp,
    updatedAt:Date.now()
  }, {merge:true});
}
export async function getLeaderboard(){
  const q=query(collection(db,"users"),orderBy("xp","desc"),limit(100));
  const snap=await getDocs(q);
  return snap.docs.map(d=>d.data());
}
onAuthStateChanged(auth, user=>window.dispatchEvent(new CustomEvent("gq-auth",{detail:user})));
