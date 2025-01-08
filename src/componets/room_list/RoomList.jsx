import React from "react";
import AddRoom from "./AddRoom.jsx";

function RoomList (props) {
	return (
		<div className="room-list">
			<AddRoom myFunc={props.buttonFunc}/>
		</div>
	)
}

export default RoomList

