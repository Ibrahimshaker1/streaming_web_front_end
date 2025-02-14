import React from "react";
import axios from "axios";


function deleteRoomFromDB () {	
	const roomId = localStorage.getItem("id");
	axios({
	  method: "get",
	  url: `http://localhost:3000/deleteRoom/${roomId}`,
	  headers: { "Content-Type": "multipart/form-data" },
	});
};

function deletedRoomDataFromSession () {
	sessionStorage.removeItem("room_id");
	sessionStorage.removeItem("room_name");
	sessionStorage.removeItem("room_category");
	sessionStorage.removeItem("video_path");
};

function leaveButtonClicked (socketObject) {
	if (localStorage.getItem("id") == sessionStorage.getItem("room_id")) {
		if (confirm("IF you leave the room will be deleted") == true) {
			socketObject.emit("creatorLeave", sessionStorage.getItem("room_id"));
			deleteRoomFromDB();
			deletedRoomDataFromSession();
			location.replace("http://localhost:5173");
		};
	}else{
		socketObject.emit("userLeave", {
			userId: localStorage.getItem("id"),
			roomId: sessionStorage.getItem("room_id")
		})
		location.replace("http://localhost:5173");
	};
};

function muteButtonCliked (e) {
	const videoElement = document.getElementById("videoPlayer");
	const btn = e.target
	if (btn.innerText == "Unmute") {
		videoElement.muted = false;
		btn.innerText = "Mute";
	}else if(btn.innerText == "Mute"){
		videoElement.muted = true;
		btn.innerText = "Unmute";
	};
};

function LeaveBtn(props) {
	return (
		<div className="leavBtn-div">
			<button className="leave-button" onClick={() => {
				leaveButtonClicked(props.socketObject); 
			}}>leave</button>	
			{ localStorage.getItem("id") !== sessionStorage.getItem("room_id") ? 
			<button className="mute-button" onClick={ (e) => {muteButtonCliked(e)} }>Unmute</button> : null}
		</div>
	);
};

export default LeaveBtn


