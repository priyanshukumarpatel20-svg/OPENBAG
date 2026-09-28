// Shared Firebase setup, imported by any page that needs Auth or Firestore.
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDlp3TSswuKIEBVcaVLCD28kBFYJx3LGRo",
  authDomain: "openbag-store.firebaseapp.com",
  projectId: "openbag-store",
  storageBucket: "openbag-store.firebasestorage.app",
  messagingSenderId: "648777963223",
  appId: "1:648777963223:web:f0e28cc70989e3a6aa0292",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Converts Firebase Auth error codes into short, user-facing messages.
export function friendlyAuthError(error) {
  const messages = {
    "auth/invalid-email": "That email address doesn't look right.",
    "auth/user-not-found": "Email or password is incorrect.",
    "auth/wrong-password": "Email or password is incorrect.",
    "auth/invalid-credential": "Email or password is incorrect.",
    "auth/email-already-in-use": "This email is already registered.",
    "auth/weak-password": "Password should be at least 6 characters.",
    "auth/too-many-requests": "Too many attempts. Please wait a moment and try again.",
    "auth/network-request-failed": "Network error. Check your connection and try again.",
  };
  return messages[error.code] || "Something went wrong. Please try again.";
}
