import React  from "react";
import {createRoot}  from "react-dom/client";
import RoomApp from "./componets/room_page/RoomApp.jsx";

function isAuthenticated() {
	if (document.cookie) {
		return true
	}else{
		return false
	};
}


const root = createRoot(document.getElementById("room-root"));
root.render(
	<div>
		{ isAuthenticated() ? <RoomApp /> : null }
	</div>
)



