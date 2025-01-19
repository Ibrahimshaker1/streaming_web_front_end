import React from "react";
import ChatLog from "./ChatLog.jsx";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function sendButtonClick(socketObject){
	const message = document.getElementById("chat-input")
	if(message.value){
		const messageData = {
			messageValue: message.value.trim(),
			roomId: sessionStorage.getItem("room_id"),
			userName: localStorage.getItem("userName"),
			userId: localStorage.getItem("id")
		};
		socketObject.emit("message", messageData);
		message.value = "";
	};
};

function ChatComp(props) {
	return (
		<div className="chat-comp">
			<ChatLog socketObject={props.socketObject} name={"hello"}/>
			<div className="chat-input-div">
				<input className="chat-input" id="chat-input" placeholder="Write Message"></input>
				<button className="send-button" onClick={
					() => {
						sendButtonClick(props.socketObject)
					}
				}><ArrowUpwardIcon className="arrow"/></button>
			</div>
		</div>
	);
};

export default ChatComp;

