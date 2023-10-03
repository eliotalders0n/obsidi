import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMaS6vPxAfEeQDEmaVJ3qxOgatO8nnwYA",
  authDomain: "obsidi-d665d.firebaseapp.com",
  projectId: "obsidi-d665d",
  storageBucket: "obsidi-d665d.appspot.com",
  messagingSenderId: "1066878083838",
  appId: "1:1066878083838:web:0b064bf72c45bb59c13baf"
};

firebase.initializeApp(firebaseConfig);
export default firebase;