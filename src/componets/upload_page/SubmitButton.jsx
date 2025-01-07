import React from "react";


function SubmitButton () {
	return (
		<input className="submit_button" type="submit" 
		onClick={()=>{location.replace("http://localhost:5173/")}}></input>
	);
};

export default SubmitButton

