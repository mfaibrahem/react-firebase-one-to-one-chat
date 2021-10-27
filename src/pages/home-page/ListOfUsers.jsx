import "./ListOfUsers.scss";
import React, { useContext } from "react";
import UserBox from "./UserBox";
import ChatContext from "../../contexts/chat-context/ChatProvider";

const ListOfUsers = () => {
	const { chatUsers } = useContext(ChatContext);
	// console.log("chat users: ", chatUsers);
	const renderChatUsers = () => {
		return chatUsers?.length ? (
			chatUsers.map((chatItem, index) => <UserBox key={chatItem.uid} />)
		) : (
			<p>No users to chat</p>
		);
	};

	return (
		<div className="list-of-users-wrap">
			<div className="welcome-user">Welcome mostafa</div>
			<div className="list-of-users">{renderChatUsers()}</div>
		</div>
	);
};

export default ListOfUsers;
