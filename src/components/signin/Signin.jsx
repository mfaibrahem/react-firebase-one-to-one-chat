import React from "react";
import firebase from "../../firebase";
const Signin = () => {
	const hanldeSigninWithGoogle = () => {
		const provider = new firebase.auth.GoogleAuthProvider();
		firebase.auth().signInWithPopup(provider);
	};

	return (
		<div>
			<button onClick={hanldeSigninWithGoogle}>Signin with google</button>
		</div>
	);
};

export default Signin;
