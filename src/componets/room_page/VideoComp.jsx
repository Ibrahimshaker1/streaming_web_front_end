import React, {useEffect, useRef} from "react";

function VideoComp (props) {
	const videoRef = useRef(null);
	const mediaSource = useRef(null);
	const sourceBuffer = useRef(null);
	useEffect(()=> {
		props.socketObject.emit("videoStart", {
			"userId": localStorage.getItem("id"),
			"roomId": sessionStorage.getItem("room_id"),
		});
		mediaSource.current = new MediaSource();
		videoRef.current.src = URL.createObjectURL(mediaSource.current);
		mediaSource.current.addEventListener('sourceopen', ()=> {
			try{
				sourceBuffer.current = mediaSource.current.addSourceBuffer('video/mp4; codecs="avc1.42E01E, mp4a.40.2"');
			}catch{
				console.log("Buffer error")
			}
		});
		props.socketObject.on("videoStart", ({chunk, roomId}) => {
			if (roomId == sessionStorage.getItem("room_id")){
				if (sourceBuffer.current && !sourceBuffer.current.updating){
					console.log(sourceBuffer.current)
					sourceBuffer.current.appendBuffer(new Uint8Array(chunk));
				};
			};
		});
		props.socketObject.on("videoEnd", () => {
			mediaSource.current.endOfStream();
		});
	}, [])
	return (
		<div className="video-comp">
			<video ref={videoRef} id="videoPlayer" autoPlay controls>
			</video>
		</div>
	);
};

export default VideoComp

