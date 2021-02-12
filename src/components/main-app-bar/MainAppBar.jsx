import "./MainAppBar.scss";
import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import routerLinks from "../../app-routes/routerLinks";

const MainAppBar = () => {
	return (
		<div className="main-app-bar">
			Welcome Mostafa
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
			<div>Signout</div>
		</div>
	);
};

export default MainAppBar;
