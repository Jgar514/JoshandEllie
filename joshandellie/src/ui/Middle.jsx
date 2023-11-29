import React from "react";
import Tabbox from "./Tabbox";

function Middle() {
	return (
		<div className=" flex flex-row h-2/3 bg-blue-50">
			{/* Project Window */}
			<div className="   h-full  w-full ">
				<Tabbox />
			</div>
		</div>
	);
}

export default Middle;
