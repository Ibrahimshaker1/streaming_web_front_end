import React from "react";

function RoomCard(props) {
	return (
		<div className="room-card">
			<h2 className="room-info">Name: {props.name}</h2>
			<h2 className="room-info">Category: {props.category}</h2>
			<div className="card-foot">
				<p className="room-id">ID: {props.roomId}</p>
				<p className="rood-creator">creator: {props.roomCreator}</p>
			</div>
		</div>		
	);
};

export default RoomCard


