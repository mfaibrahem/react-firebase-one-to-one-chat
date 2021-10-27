import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from "./contexts/user-context/UserProvider";
import { ChatProvider } from "./contexts/chat-context/ChatProvider";
ReactDOM.render(
	<React.StrictMode>
		<UserProvider>
			<ChatProvider>
				<Router>
					<App />
				</Router>
			</ChatProvider>
		</UserProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
