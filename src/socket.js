import {io} from "socket.io-client";

const mySocketServer = "http://localhost:3500";

function isCreartor () {
	if (sessionStorage.getItem("video_path")) {
		return true;
	}else{
		return false;
	};
};

let useSocket = {};

if (isCreartor ()) {
	const socket = io(mySocketServer, {
		autoConnect: false,
		query: {
			room_id: sessionStorage.getItem("room_id"),
			room_name: sessionStorage.getItem("room_name"),
			room_category: sessionStorage.getItem("room_category"),
			video_path: sessionStorage.getItem("video_path"),
			creator_id: localStorage.getItem("id"),
			creator_name: localStorage.getItem("userName")
		}
	});
	useSocket = socket;
}else{	
	const socket = io(mySocketServer, {
		autoConnect: false,
		query: {
			room_id: sessionStorage.getItem("room_id"),
			user_name: localStorage.getItem("userName"),
			user_id: localStorage.getItem("id")
		}
	});
	useSocket = socket;
};

export default useSocket;



