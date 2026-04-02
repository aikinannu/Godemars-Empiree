// src/firebase.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  sendPasswordResetEmail,
} from "firebase/auth";

// ⚙️ Your Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqczU6gPlQoR0ersOK-0H5gafTby6AmqI",
  authDomain: "godemar-s-empire.firebaseapp.com",
  projectId: "godemar-s-empire",
  storageBucket: "godemar-s-empire.firebasestorage.app",
  messagingSenderId: "645237659599",
  appId: "1:645237659599:web:447a3b17dcaf1709aba4ba",
  measurementId: "G-24REZ7863P",
};

// 🔥 Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// 🌐 Google Authentication Provider
export const googleProvider = new GoogleAuthProvider();

// 🟩 Sign Up with Email and Password
export const signUpWithEmail = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Signup Error:", error.message);
    throw error;
  }
};

// 🟩 Login with Email and Password
export const loginWithEmail = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Login Error:", error.message);
    throw error;
  }
};

// 🟦 Sign In with Google
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error("Google Sign-In Error:", error.message);
    throw error;
  }
};

// 🟥 Logout
export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Logout Error:", error.message);
  }
};

// 🟨 Monitor Authentication State
export const monitorAuthState = (callback) => {
  return onAuthStateChanged(auth, (user) => {
    callback(user);
  });
};

// 🟪 Send Password Reset Email
export const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    console.log("Password reset email sent to:", email);
    return true;
  } catch (error) {
    console.error("Password Reset Error:", error.message);
    throw error;
  }
};