import React from "react";
import firebase from "../../firebase";

const Signout = () => {
	return (
		<div>
			{firebase.auth().currentUser && (
				<button onClick={() => firebase.auth().signOut()}>Sign Out</button>
			)}
		</div>
	);
};

export default Signout;
