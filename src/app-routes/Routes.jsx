import React from "react";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import HomePage from "../pages/home-page/HomePage";
import SigninPage from "../pages/signin-page/SigninPage";
import SignupPage from "../pages/signup-page/SignupPage";
import routerLinks from "./routerLinks";

const Routes = () => {
	return (
		<Switch>
			<Route exact path={routerLinks.homePage}>
				<HomePage />
			</Route>
			<Route exact path={routerLinks.signinPage}>
				<SigninPage />
			</Route>
			<Route exact path={routerLinks.signupPage}>
				<SignupPage />
			</Route>
		</Switch>
	);
};

export default Routes;
