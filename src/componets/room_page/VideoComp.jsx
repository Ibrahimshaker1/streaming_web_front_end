import React, {useEffect, useRef} from "react";

function VideoComp (props) {
	const videoRef = useRef(null);
	let chunksArray = useRef([]);
	const videoBlob = useRef(null);
	useEffect(()=> {
		props.socketObject.emit("videoStart", {
			"userId": localStorage.getItem("id"),
			"roomId": sessionStorage.getItem("room_id"),
		});
		props.socketObject.on("videoStart", ({chunk, roomId})=> {
			if (roomId == sessionStorage.getItem("room_id") && videoBlob.current == null) {
				chunksArray.current.push(chunk)
			};
		})
		props.socketObject.on("videoEnd", () => {
			if (videoBlob.current == null){
				videoBlob.current = new Blob(chunksArray.current, {type: 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"'})
				const blobURL = URL.createObjectURL(videoBlob.current)
				if(videoBlob.current) {
					videoRef.current.src = blobURL;
				}
			}
		});
		if(videoRef) {
			if (sessionStorage.getItem("room_id") == localStorage.getItem("id")) {
				videoRef.current.setAttribute("controls", "true")
			}else{
				props.socketObject.emit("newUser", sessionStorage.getItem("room_id"));
			}
		};
		props.socketObject.on("updateRoom", (data) => {
			if(data.roomId == sessionStorage.getItem("room_id") && data.roomId !== localStorage.getItem("id")) {
				videoRef.current.currentTime = data.roomCondation.videoInSecond
				if (data.roomCondation.videoOnOff == 0) {
					videoRef.current.play();
				}
			};
		});
		videoRef.current.addEventListener("play", () => {
			if (localStorage.getItem("id") == sessionStorage.getItem("room_id")){
				props.socketObject.emit("videoPlay", {
					roomId: sessionStorage.getItem("room_id"),
					videoSecond: videoRef.current.currentTime
				});
			};
		});
		videoRef.current.addEventListener("pause", ()=> {
			if (localStorage.getItem("id") == sessionStorage.getItem("room_id")){
				props.socketObject.emit("videoPaused", sessionStorage.getItem("room_id"));
			};
		});
		props.socketObject.on("newUser", (roomId) => {
			if (roomId == localStorage.getItem("id")){
				const videoInSecond = videoRef.current.currentTime;
				props.socketObject.emit("updateRoom", {
					roomId: roomId, 
					videoSecond: videoInSecond
				})
			};
		});
		props.socketObject.on("creatorPlay", (data)=>{
			if(data.roomId !== localStorage.getItem("id") && data.roomId == sessionStorage.getItem("room_id")){
				videoRef.current.currentTime = data.videoSecond;
				videoRef.current.play();
			};
		});
		props.socketObject.on("creatorPaused", (roomId)=> {
			if (roomId == sessionStorage.getItem("room_id") && roomId !== localStorage.getItem("id")){
				videoRef.current.pause();
			};
		})
		videoRef.current.addEventListener("error", (e) => {
			console.log(e)
		});
	}, [])
	return (
		<div className="video-comp">
			<video ref={videoRef} id="videoPlayer" muted>
			</video>
		</div>
	);
};

export default VideoComp

