/* eslint-disable react-hooks/exhaustive-deps */
import "./HomePage.scss";
import React, { useContext, useEffect, useState } from "react";
import ChatArea from "./ChatArea";
import ListOfUsers from "./ListOfUsers";
import firebase from "../../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import ChatContext from "../../contexts/chat-context/ChatProvider";
import UesrContext from "../../contexts/user-context/UserProvider";

const HomePage = () => {
	const { user } = useContext(UesrContext);
	const query = firebase
		.firestore()
		.collection("chatUsers")
		.orderBy("createdAt", "desc");
	// const [values] = useCollectionData(query);
	const {
		setChatUsers,
		chatUsersUnsubscribe,
		setChatUsersUnsubscribe
	} = useContext(ChatContext);
	// useEffect(() => {
	// 	if (values?.length) {
	// 		const filteredValues = values.filter(v => v.uid !== user?.uid);
	// 		setChatUsers([...filteredValues]);
	// 	}
	// }, [values]);

	useEffect(() => {
		const allChatUsers = [];
		const unsubscribeUsers = query.onSnapshot(snapShot => {
			// snapShot.docs.map(doc => doc.data());

			snapShot.docs.forEach(doc => allChatUsers.push(doc.data()));
			const filteredChatUsers = allChatUsers.filter(
				item => item.uid !== user?.uid
			);

			console.log("filtered", filteredChatUsers);
			setChatUsers(filteredChatUsers);
		});
		console.log("all chatusers", allChatUsers);
		// setChatUsersUnsubscribe(unsubscribeUsers);
	}, []);
	// const query1 = firebase
	// 	.firestore()
	// 	.collection("users")
	// 	.where("uid", "==", user.uid);
	// const [val1] = useCollectionData(query1);

	return (
		<div
			className="home-page"
			// style={{
			// 	backgroundImage: `url(${process.env.PUBLIC_URL}/imgs/chat-bg.png)`
			// }}
		>
			<ListOfUsers />
			<ChatArea />
		</div>
	);
};

export default HomePage;
