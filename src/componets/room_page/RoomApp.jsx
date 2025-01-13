import React from "react";
import VideoComp from "./VideoComp.jsx";
import NavBarApp from "../nav_bar/NavBarApp.jsx"
import ChatComp from "./chatComp.jsx";
function RoomApp() {
	return (
		<div>
			<NavBarApp myClass="nav_bar_contanor_active"/>
			<div className="room-app">
				<VideoComp />
				<ChatComp />
			</div>
		</div>
	)
};
export default RoomApp;

