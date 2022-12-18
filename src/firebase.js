import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDEtLGJOAEbkMTDd-0PexF1GYKLXOU9T-8",
  authDomain: "ecommerce-project-2848e.firebaseapp.com",
  projectId: "ecommerce-project-2848e",
  storageBucket: "ecommerce-project-2848e.appspot.com",
  messagingSenderId: "494326642390",
  appId: "1:494326642390:web:6dedf683aa19c3f1fdfb77",
  measurementId: "G-43J65N16VD"
};


export const app = initializeApp(firebaseConfig);

export const auth = getAuth();