import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDSHKuUrRcHYIZDoPMM2pTrnotm3qBJ6hE",
	authDomain: "react-apps-cursos-53fc7.firebaseapp.com",
	projectId: "react-apps-cursos-53fc7",
	storageBucket: "react-apps-cursos-53fc7.appspot.com",
	messagingSenderId: "116090146574",
	appId: "1:116090146574:web:6e01d2984955167ad0115f",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export {
    db,
    googleAuthProvider,
    firebase
}