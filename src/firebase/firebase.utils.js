import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyC0V_W1T44APL7bCgPWW9IZZCAggg77kSE",
    authDomain: "crwn-db-cedd3.firebaseapp.com",
    projectId: "crwn-db-cedd3",
    storageBucket: "crwn-db-cedd3.appspot.com",
    messagingSenderId: "627321059380",
    appId: "1:627321059380:web:8506a2389785d8b035b261",
    measurementId: "G-400MJVKH0N"
  }

  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  //set up google auth capability

  const provider = new firebase.auth.GoogleAuthProvider() 
  provider.setCustomParameters({ prompt: 'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase;