import React, {useState, useEffect} from "react";
import InputArea from "../login_componets/InputArea.jsx";
import CastIcon from '@mui/icons-material/Cast';
import axios from "axios";

async function getVideoData () {
	var videoList = "";
	await axios({
	  method: "get",
	  url: "http://localhost:3000/videos",
	  headers: { "Content-Type": "multipart/form-data" },
	}).then((response)=> {
		videoList = response.data;
	});
	return videoList;
};

function RoomPopup (props) {
	let [videoData, setVideoData] = useState([]);
	let [createStatus, setCreateStatus] = useState("");
	useEffect(() => {
		async function exuFunction () {
			setVideoData(videoData = await getVideoData())
		}
		exuFunction()
	}, []);

	function showVideoData (vidInput) {
		return (
			<option value={vidInput.id} key={vidInput.id}>{vidInput.name}</option>
		);
	};

	async function createRoomFunc () {
		const roomName = document.getElementById("room_name").value
		const videoSelector = document.getElementById("videos")
		const videoId = videoSelector.options[videoSelector.selectedIndex].value
	};
	
	return (
		<div className="popup-div room-popup-div">
			<div className="popup-content room-popup-content">
				<div className="close-btn" onClick={ () => {props.myFunc()} }>&times;</div>
				<CastIcon sx={{ fontSize: 70, color: "white"}} />
				<h1 className="popup-text">Add New Room</h1>
				<InputArea type="text" showText="Room Name" id="room_name" />
				<select name="videos" id="videos" className="room-popup-selector login-input" 
					style={{"paddingLeft":"20px", "borderRadius": "15px"}}>
					{videoData.map(showVideoData)}
				</select>
				<button className="create-room-button" onClick={()=>{createRoomFunc()}}>Create</button>
			</div>
		</div>
	);
};

export default RoomPopup

