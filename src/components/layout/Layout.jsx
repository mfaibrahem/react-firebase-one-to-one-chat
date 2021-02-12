import React from "react";
import MainAppBar from "../main-app-bar/MainAppBar";

const Layout = ({ children }) => {
	return (
		<div className="main-layout">
			<MainAppBar />
			{children}
		</div>
	);
};

export default Layout;
