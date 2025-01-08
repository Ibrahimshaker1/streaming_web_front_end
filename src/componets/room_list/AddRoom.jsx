import React from "react";


function AddRoom(props) {
	return (
		<div>
			<button className="add-room-button" onClick={ () => {
				props.myFunc()
			} }>+</button>	
		</div>
	);
};

export default AddRoom




