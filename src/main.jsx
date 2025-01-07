import React  from "react";
import {createRoot}  from "react-dom/client";
import NavBarApp from "./componets/nav_bar/NavBarApp";
import UploadButton from "./componets/upload_button/UploadButton";
import LogInPopUp from "./componets/popup/PopupDiv.jsx";
import RoomListApp from "./componets/room_list/RoomListApp.jsx";

function isAuthenticated() {
	if (document.cookie) {
		return true
	}else{
		return false
	};
}


const root = createRoot(document.getElementById("root"));
root.render(
	<div>
		{ isAuthenticated() ? <NavBarApp myClass="nav_bar_contanor_active"/> :
			<NavBarApp myClass="nav_bar_contanor"/>
		}
		{ isAuthenticated() ? <RoomListApp /> : null }
		{ isAuthenticated() ?  <UploadButton /> : <LogInPopUp/>}
	</div>
)



