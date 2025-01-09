import React, {useEffect, useState} from "react";
import AddRoom from "./AddRoom.jsx";
import RoomCard from "./RoomCard.jsx";
import axios from "axios";

async function getRoomsData () {
	var roomList = [];
	await axios({
	  method: "get",
	  url: "http://localhost:3000/roomData",
	  headers: { "Content-Type": "multipart/form-data" },
	}).then((response)=> {
		roomList = response.data.roomGetData;
	});
	return roomList;
};

function RoomList (props) {
	
	let [roomData, setRoomData] = useState([])
	useEffect(()=>{
		async function getData () {
			setRoomData(roomData = await getRoomsData())
		}
		getData()
	}, []);

	function renderRoomCards (roomObject) {
		return (
			<RoomCard name={roomObject.name} category={roomObject.category} roomId={roomObject.id}
			roomCreator={roomObject.creator_name} key={roomObject.id}/>
		);
	};

	return (
		<div className="room-list">
			<AddRoom myFunc={props.buttonFunc}/>
			{ roomData !== "no rooms in DB" ? roomData.map(renderRoomCards) : null }
		</div>
	)
}

export default RoomList

