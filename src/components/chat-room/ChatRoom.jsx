import React, { useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";

import firebase from "../../firebase";
import ChatMessage from "./ChatMessage";
const db = firebase.firestore();
const ChatRoom = () => {
	const messagesRef = db.collection("messages");
	const query = messagesRef.orderBy("createdAt").limit(25);
	const [messages] = useCollectionData(query, { idField: "id" });

	const [value, setValue] = useState("");
	const sendMessage = async e => {
		e.preventDefault();
		console.log(value);
		await messagesRef.add({
			text: value,
			createdAt: firebase.firestore.FieldValue.serverTimestamp(),
			uid: firebase.auth().currentUser.uid,
			photoURL: firebase.auth().currentUser.photoURL
		});

		setValue("");
	};

	return (
		<div>
			{messages &&
				messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

			<form onSubmit={sendMessage}>
				<input
					value={value}
					onChange={e => setValue(e.target.value)}
					type="text"
					name="chat_input"
				/>
			</form>
		</div>
	);
};

export default ChatRoom;

// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /messages/{document=**} {
//       allow read, update, delete: if request.auth.uid == resource.data.uid;
//       allow create: if request.auth.uid != null;
//     }
//   }
// }

// service cloud.firestore {
//   match /databases/{database}/documents {
//     // Make sure the uid of the requesting user matches name of the user
//     // document. The wildcard expression {userId} makes the userId variable
//     // available in rules.
//     match /users/{userId} {
//       allow read, update, delete: if request.auth != null && request.auth.uid == userId;
//       allow create: if request.auth != null;
//     }
//   }
