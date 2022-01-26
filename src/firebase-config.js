import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
    authDomain: "keepclone-6b7f7.firebaseapp.com",
    projectId: "keepclone-6b7f7",
    storageBucket: "keepclone-6b7f7.appspot.com",
    messagingSenderId: "821561101415",
    appId: "1:821561101415:web:d4dd04859a26bae8e658c2"
  };
  
  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);