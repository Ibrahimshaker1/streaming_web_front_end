import React, {useState, useEffect}from "react";
import VideoComp from "./VideoComp.jsx";
import NavBarApp from "../nav_bar/NavBarApp.jsx"
import ChatComp from "./chatComp.jsx";
import RoomText from "./RoomText.jsx";
import useSocket from "../../socket.js";
import LogInPopUp from "../popup/PopupDiv.jsx";


function changeMemberCount (memberNumber) {
	const memberElemenet = document.getElementById("count");
	memberElemenet.textContent = `Members: ${memberNumber}`;
}

function RoomApp() {
	
	let [userSocket, setUserSocket] = useState(null);
	let [roomCondation, setRoomCondation] = useState(true)

	useEffect( ()=> {
		setUserSocket(userSocket = useSocket.connect());
		userSocket.on("memberCount", (data) => {
			if (data.roomId == sessionStorage.getItem("room_id")) {
				changeMemberCount(data.memberNumber)
			};
		});
		userSocket.on("creatorLeave", (data) => {
			if(data == sessionStorage.getItem("room_id") && data !== localStorage.getItem("id")) {
				setRoomCondation(roomCondation = false);
			}
		});
		return ()=> userSocket.close();
	}, [])

	return (
		<div>
			{roomCondation ? 
				<div>
					<NavBarApp myClass="nav_bar_contanor_active"/>
					<p className="members-count" id="count">Members: </p>
					<div className="room-app">
						{userSocket && <VideoComp socketObject={userSocket}/>}
						{userSocket && <ChatComp socketObject={userSocket}/>}
					</div>
					<RoomText socketObject={userSocket}/>
				</div> : <LogInPopUp data={{
					lineOne: "Creator Leave the Room",
					lineTwo: "Go back to home page",
					lineThree: "",
					loginButton: "unactive",
				}}/>
			}
		</div>
	)
};
export default RoomApp;

