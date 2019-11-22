import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyAhgxlwp_w6OiTzY2ZdTW28VRewyklNM6E",
  authDomain: "crwn-db-b102f.firebaseapp.com",
  databaseURL: "https://crwn-db-b102f.firebaseio.com",
  projectId: "crwn-db-b102f",
  storageBucket: "crwn-db-b102f.appspot.com",
  messagingSenderId: "653784322692",
  appId: "1:653784322692:web:ffee637a9a0d77a56068d1"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
