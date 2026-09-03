import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, getDocs, collection, query, where, limit, updateDoc } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";
import { firebaseConfig } from "./firebase-config.js";
const app=initializeApp(firebaseConfig); export const auth=getAuth(app); export const db=getFirestore(app);
export const loginWithGoogle=()=>signInWithPopup(auth,new GoogleAuthProvider());
export const logout=()=>signOut(auth); export const watchAuth=cb=>onAuthStateChanged(auth,cb);
const weekKey=()=>{const d=new Date(),one=new Date(Date.UTC(d.getUTCFullYear(),0,1));return `${d.getUTCFullYear()}-W${Math.ceil((((d-one)/86400000)+one.getUTCDay()+1)/7)}`;};
export async function saveScore(user,xp){if(user)await setDoc(doc(db,"users",user.uid),{displayName:user.displayName||"Student",photoURL:user.photoURL||"",xp:Number(xp)||0,updatedAt:Date.now()},{merge:true});}
export async function getLeaderboard(mode="all"){const snap=await getDocs(collection(db,"publicUsers"));const wk=weekKey();return snap.docs.map(d=>{const x=d.data()||{};let score=Number(x.xp)||0;if(mode==="week")score=x.weekKey===wk?(Number(x.weeklyXP)||0):0;else if(mode!=="all")score=Number((x.subjectXP||{})[mode])||0;return {uid:d.id,displayName:x.displayName||"Student",photoURL:x.photoURL||"",score};}).filter(x=>x.score>0).sort((a,b)=>b.score-a.score);}
export async function searchUsers(term){const snap=await getDocs(collection(db,"publicUsers"));const t=term.toLowerCase();return snap.docs.map(d=>({uid:d.id,...d.data()})).filter(x=>(x.displayName||"").toLowerCase().includes(t)).slice(0,20);}
