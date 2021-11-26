import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-haFEYptkeDuEmwaJTu4sLNhLqRorsuA",
  authDomain: "ecommerce-smart-electric.firebaseapp.com",
  projectId: "ecommerce-smart-electric",
  storageBucket: "ecommerce-smart-electric.appspot.com",
  messagingSenderId: "790187875972",
  appId: "1:790187875972:web:8f140263c3912622e8acd1",
  measurementId: "G-T4Q3L8V5NT",
};

const app = firebase.initializeApp(firebaseConfig);

// Agregando nuestras funciones

export const PeticionDeProductos = () => {
  return firebase.firestore(app);
};
