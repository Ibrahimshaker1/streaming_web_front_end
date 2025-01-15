import React, {useState, useEffect} from "react";
import axios from "axios";
import LeaveBtn from "./leaveBtn.jsx";

//get the creator name and the room name
async function getRoomTextData () {	
	let resResult = "";
	const roomId = sessionStorage.getItem("room_id")
	await axios({
	  method: "get",
	  url: `http://localhost:3000/roomText/${roomId}`,
	  headers: { "Content-Type": "multipart/form-data" },
	}).then((response)=> {
		resResult = response.data.message;
	});
	return resResult;
};

function RoomText () {

	let [textValue, setTextValue] = useState({});	
	
	useEffect( ()=>{
		async function callRoomText () {
			setTextValue(textValue= await getRoomTextData())
		}
		callRoomText()
	}, [])

	return (
		<div className="room-text">
			<h3 className="room-name">Room: {textValue.name}</h3>
			<h3 className="creator-name">Creator: {textValue.creator_name}</h3>
			<LeaveBtn />
		</div>
	)	
}
export default RoomText

