// Firebase configuration
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Tu configuración de Firebase
// Nota: Normalmente estas claves deberían estar en variables de entorno
const firebaseConfig = {
  apiKey: "AIzaSyA_YOUR_API_KEY_HERE",
  authDomain: "umarket-app.firebaseapp.com",
  projectId: "umarket-app",
  storageBucket: "umarket-app.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abc123def456"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage }; 