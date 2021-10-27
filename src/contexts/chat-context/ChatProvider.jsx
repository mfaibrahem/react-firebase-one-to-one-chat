import React, { createContext, useState } from "react";

const INITIAL_STATE = {
	chatUsers: [],
	setChatUsers: () => {},
	chatUsersUnsubscribe: null,
	setChatUsersUnsubscribe: () => {}
};

const ChatContext = createContext(INITIAL_STATE);

export const ChatProvider = ({ children }) => {
	const [chatUsers, setChatUsers] = useState(INITIAL_STATE.chatUsers);
	const [chatUsersUnsubscribe, setChatUsersUnsubscribe] = useState(
		INITIAL_STATE.chatUsersUnsubscribe
	);
	return (
		<ChatContext.Provider
			value={{
				chatUsers,
				setChatUsers,
				chatUsersUnsubscribe,
				setChatUsersUnsubscribe
			}}
		>
			{children}
		</ChatContext.Provider>
	);
};

export default ChatContext;
