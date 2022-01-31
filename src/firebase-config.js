import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
    authDomain: "keepclone-6b7f7.firebaseapp.com",
    projectId: "keepclone-6b7f7",
    storageBucket: "keepclone-6b7f7.appspot.com",
    messagingSenderId: "821561101415",
    appId: "1:821561101415:web:d4dd04859a26bae8e658c2"
  };

// const firebaseConfig = {
//   apiKey: "AIzaSyB_S54bk7ANrJyYKuAGq-x_FaMhXez2qx8",
//   authDomain: "keeping-notes-cda49.firebaseapp.com",
//   databaseURL: "https://keeping-notes-cda49-default-rtdb.firebaseio.com",
//   projectId: "keeping-notes-cda49",
//   storageBucket: "keeping-notes-cda49.appspot.com",
//   messagingSenderId: "700232702987",
//   appId: "1:700232702987:web:3a9a0dae8e4f9d292a7b0e"
// };
  
  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);

  export const auth = getAuth(app);