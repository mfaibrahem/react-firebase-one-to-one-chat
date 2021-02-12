import React from "react";
import firebase from "../../firebase";

const ChatMessage = ({ message }) => {
	const { text } = message;

	console.log(message);
	return (
		<div className="chat-msg">
			<img src={firebase.auth().currentUser.photoURL} alt="img" />
			<h1>{text}</h1>
		</div>
	);
};

export default ChatMessage;
