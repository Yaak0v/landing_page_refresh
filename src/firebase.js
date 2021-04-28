import firebase from 'firebase'
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyANCf-WCqnIAZ0-7Zj_-X6KWspS5QD3umY",
    authDomain: "euclidlandingpagedevnew.firebaseapp.com",
    projectId: "euclidlandingpagedevnew",
    storageBucket: "euclidlandingpagedevnew.appspot.com",
    messagingSenderId: "538480412479",
    appId: "1:538480412479:web:621daf1708569131b7358a"
  };

export default firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
