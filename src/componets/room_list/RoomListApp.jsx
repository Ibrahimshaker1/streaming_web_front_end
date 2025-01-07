import React, {useState} from "react";
import RoomList from "./RoomList.jsx";

function RoomListApp () {
	
	let [roomListState, setRoomListState] = useState("list");

	return (
		<div className="room-list-app-div">
			<h3>Rooms:</h3>
			{roomListState == "list" ? <RoomList /> : null}
		</div>
	);
};

export default RoomListApp


