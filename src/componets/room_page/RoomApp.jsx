import React, {useState, useEffect}from "react";
import VideoComp from "./VideoComp.jsx";
import NavBarApp from "../nav_bar/NavBarApp.jsx"
import ChatComp from "./chatComp.jsx";
import RoomText from "./RoomText.jsx";
import useSocket from "../../socket.js";
function RoomApp() {

	useEffect( ()=> {
		useSocket.connect()
	}, [])

	return (
		<div>
			<NavBarApp myClass="nav_bar_contanor_active"/>
			<div className="room-app">
				<VideoComp />
				<ChatComp />
			</div>
			<RoomText />
		</div>
	)
};
export default RoomApp;

