import { signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

export async function loginWithGoogle(auth) {
  const provider = new GoogleAuthProvider();
  return await signInWithPopup(auth, provider);
}