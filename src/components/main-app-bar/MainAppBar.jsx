import "./MainAppBar.scss";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import routerLinks from "../../app-routes/routerLinks";
import signout from "../../api/auth/signout";
import UesrContext from "../../contexts/user-context/UserProvider";
import ChatContext from "../../contexts/chat-context/ChatProvider";
const MainAppBar = () => {
	const { user, removeCurrentUser } = useContext(UesrContext);
	const { chatUsersUnsubscribe } = useContext(ChatContext);
	console.log(user);
	const handleSignout = async () => {
		signout(user, removeCurrentUser, chatUsersUnsubscribe);
	};

	return (
		<div className="main-app-bar">
			<div className="welcome-message">
				{user && <img className="user-img" src={user.photoUrl} alt="avatar" />}
				{user?.username && user?.username}
			</div>
			{user ? (
				<div style={{ cursor: "pointer" }} onClick={handleSignout}>
					Signout
				</div>
			) : (
				<>
					<NavLink
						to={routerLinks.signinPage}
						className="nav-link"
						activeClassName="active-nav"
					>
						Signin
					</NavLink>
					<NavLink
						to={routerLinks.signupPage}
						className="nav-link"
						activeClassName="active-nav"
					>
						Signup
					</NavLink>
				</>
			)}
		</div>
	);
};

export default MainAppBar;
