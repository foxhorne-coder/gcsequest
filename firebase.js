import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, collection, getDocs } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";
import { firebaseConfig } from "./firebase-config.js";
const app=initializeApp(firebaseConfig); export const auth=getAuth(app); export const db=getFirestore(app);
export const loginWithGoogle=()=>signInWithPopup(auth,new GoogleAuthProvider());
export const logout=()=>signOut(auth); export const watchAuth=cb=>onAuthStateChanged(auth,cb);
export async function saveScore(user,xp){if(user)await setDoc(doc(db,"users",user.uid),{displayName:user.displayName||"Student",photoURL:user.photoURL||"",xp:Number(xp)||0,updatedAt:Date.now()},{merge:true});}
export async function getLeaderboard(mode="all"){
 const snap=await getDocs(collection(db,"users"));
 const now=new Date(); const weekKey=`${now.getUTCFullYear()}-W${Math.ceil((((now-new Date(Date.UTC(now.getUTCFullYear(),0,1)))/86400000)+new Date(Date.UTC(now.getUTCFullYear(),0,1)).getUTCDay()+1)/7)}`;
 return snap.docs.map(d=>{const x=d.data()||{};let score=Number(x.xp)||0;if(mode==="week")score=x.weekKey===weekKey?(Number(x.weeklyXP)||0):0;else if(mode!=="all")score=Number((x.subjectXP||{})[mode])||0;return {uid:d.id,displayName:x.displayName||"Student",photoURL:x.photoURL||"",score};}).filter(x=>x.score>0).sort((a,b)=>b.score-a.score);
}
