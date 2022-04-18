/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-destructuring */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {
	getAuth,
	getRedirectResult,
	GoogleAuthProvider,
	signInWithRedirect,
} from 'firebase/auth'

const firebaseConfig = {
	apiKey: 'AIzaSyCUsmu5LBcpb478daJ1Oym8WE9kQingy2I',
	authDomain: 'todo-3cbda.firebaseapp.com',
	projectId: 'todo-3cbda',
	storageBucket: 'todo-3cbda.appspot.com',
	messagingSenderId: '423996015572',
	appId: '1:423996015572:web:8bbd93efa370abd5224c41',
	measurementId: 'G-8QZ0SZZGY9',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth()
const provider = new GoogleAuthProvider()

export const authUser = () => {
	signInWithRedirect(auth, provider)
}
export const getUser = () => {
	getRedirectResult(auth)
		.then(result => {
			// This gives you a Google Access Token. You can use it to access Google APIs.
			const credential = GoogleAuthProvider.credentialFromResult(result)
			const token = credential.accessToken
			// The signed-in user info.
			const user = result.user
			// eslint-disable-next-line no-console
			console.log(user)
		})
		.catch(error => {
			// Handle Errors here.
			const errorCode = error.code
			const errorMessage = error.message
			// The email of the user's account used.
			const email = error.email
			// The AuthCredential type that was used.
			const credential = GoogleAuthProvider.credentialFromError(error)
			// ...
		})
}
