import "./UserBox.scss";
import React from "react";

const UserBox = () => {
	return (
		<div className="user-box">
			<div className="img-name">
				<img src="https://picsum.photos/200" alt="user img" />
				<div className="name-last-msg">
					<span className="username">Mohamed ali</span>
					<span className="last-msg">
						My last message goes here My last message goes here
					</span>
				</div>
			</div>

			<span className="user-status online"></span>
		</div>
	);
};

export default UserBox;
