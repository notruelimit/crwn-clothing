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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAd = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAd,
        ...additionalData
      })
    } catch (error) {
      console.log('Error creating user', error.message)
    }
  }

  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
