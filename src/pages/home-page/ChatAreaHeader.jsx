import "./ChatAreaHeader.scss";
import React from "react";

const ChatAreaHeader = () => {
	return (
		<div className="chat-area-header">
			<div className="img-name">
				<img src="https://picsum.photos/200" alt="user img" />
				<span className="username">Mohamed ali</span>
			</div>
			<span className="user-status online"></span>
		</div>
	);
};

export default ChatAreaHeader;
