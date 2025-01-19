import React, {useEffect} from "react";

function addMessage(socketMessage) {
	const colorList = ["4635B1", "B771E5", "AEEA94", "FFFBCA", "155E95", "6A80B9", "EFB6C8"];
	const randomNumber = Math.floor(Math.random() * colorList.length)
	if (socketMessage.roomId == sessionStorage.getItem("room_id")){
		const chatLogDiv = document.getElementById("chat-log");
		let paregraphItem = document.createElement("p");
		paregraphItem.innerHTML = `<span style="background-color: #${colorList[randomNumber]}" class="user-name">${socketMessage.userName}</span>: ${socketMessage.message}`;
		if (socketMessage.userId == localStorage.getItem("id")) {
			paregraphItem.classList.add("my-message");
		}else{
			paregraphItem.classList.add("message")
		}
		chatLogDiv.insertBefore(paregraphItem, chatLogDiv.firstChild)
	}
};

function ChatLog(props) {

	useEffect(() => {
		props.socketObject.on("sendMessage", (data) => {
			addMessage(data)
		});
	}, [])

	return (
		<div className="chat-log-div" id="chat-log">
			<p className="chat-start">Chat is Started</p>
		</div>
	);
};

export default ChatLog;


