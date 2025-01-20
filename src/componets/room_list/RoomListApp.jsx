import React, {useState} from "react";
import RoomList from "./RoomList.jsx";
import RoomPopup from "./roomPopUp.jsx";

function RoomListApp () {
	
	let [roomListState, setRoomListState] = useState("list");
	
	function addButtonClicked () {
		setRoomListState(roomListState = "roomPopUp");
	};

	function closeButtonClicked () {
		setRoomListState(roomListState = "list");
	};

	return (
		<div className="room-list-app-div">
			{roomListState == "list" ? <RoomList buttonFunc={addButtonClicked}/> : 
				<RoomPopup myFunc={closeButtonClicked}/>
			}
		</div>
	);
};

export default RoomListApp


