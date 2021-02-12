import firebase from "firebase/app";
import "firebase/database";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyAVvWkVtAd1urX19b6Q4fJft3POqZG4Q-w",
	authDomain: "one-to-one-chat-6cb21.firebaseapp.com",
	projectId: "one-to-one-chat-6cb21",
	storageBucket: "one-to-one-chat-6cb21.appspot.com",
	messagingSenderId: "916055457010",
	appId: "1:916055457010:web:1d181110e8e1c80cefe46b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
