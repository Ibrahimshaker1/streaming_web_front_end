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
		const roomName = document.getElementById("room_name");
		const roomCategory = document.getElementById("room_category");
		const videoSelector = document.getElementById("videos");
		const videoId = videoSelector.options[videoSelector.selectedIndex];
		if (roomName.value && videoId.value && roomCategory.value) {	
			await axios({
				method: "post",
				url: "http://localhost:3000/createRoom",
				data: {
					id: localStorage.getItem("id"),
					vidId: videoId.value,
					roomName: roomName.value,
					category: roomCategory.value,
				},
				headers: {
			  'Content-Type': 'application/x-www-form-urlencoded'
				}
			}).then(function (response) {
				const resData = response.data.roomData
				if (resData == "Create Room Error") {
					setCreateStatus(createStatus = "response error");
				}else{
					// save the room data in user session storage
					sessionStorage.setItem("room_id", resData.id)
					sessionStorage.setItem("room_name", resData.name)
					sessionStorage.setItem("room_category", resData.category)
					sessionStorage.setItem("video_path", resData.vid_path)
					// redirect the use to the room page
					location.replace("http://localhost:5173/room_page");
				};
			});
		}else{
			setCreateStatus(createStatus = "empty input value");
		};
	};
	
	return (
		<div className="popup-div room-popup-div">
			<div className="popup-content room-popup-content">
				<div className="close-btn" onClick={ () => {props.myFunc()} }>&times;</div>
				<CastIcon sx={{ fontSize: 70, color: "white"}} />
				<h1 className="popup-text">Add New Room</h1>
				<InputArea type="text" showText="Room Name" id="room_name" />
				<InputArea type="text" showText="Room Category" id="room_category" />
				<select name="videos" id="videos" className="room-popup-selector login-input" 
					style={{"paddingLeft":"20px", "borderRadius": "15px"}}>
					{videoData.map(showVideoData)}
				</select>
				{ createStatus == "empty input value" ? <p className="error">*All input must have value</p> : null}
				{ createStatus == "response error" ? <p className="error">*You Already Create a Room</p> : null}
				<button className="create-room-button" onClick={()=>{createRoomFunc()}}>Create</button>
			</div>
		</div>
	);
};

export default RoomPopup

