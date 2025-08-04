import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBXROTqYR5pFexnRwQN9KFbuuhZ7t6Rqhk",
  authDomain: "diaries-f8b14.firebaseapp.com",
  projectId: "diaries-f8b14",
  storageBucket: "diaries-f8b14.firebasestorage.app",
  messagingSenderId: "660647425209",
  appId: "1:660647425209:web:d61eda90362263e1341768"
};

export const app = initializeApp(firebaseConfig);