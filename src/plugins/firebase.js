import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBqEL3YZVsIlBUhG2M0lpPCzcX3c0zzww4",
    authDomain: "projetofinal-3df32.firebaseapp.com",
    projectId: "projetofinal-3df32",
    storageBucket: "projetofinal-3df32.appspot.com",
    messagingSenderId: "805618139477",
    appId: "1:805618139477:web:a9e3dc55ddc3efb20bafdc"
};

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const auth = firebase.auth()
const googleProvider = new firebase.auth.GoogleAuthProvider()

const profileCollection = db.collection('profile')
const tasksCollection = db.collection('tasks')

export {
    db, auth, profileCollection, tasksCollection, googleProvider
}
