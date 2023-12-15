import React from "react";
import Profile from "./Profile";
import Tabbox from "./Tabbox";
import Bottom from "./Bottom";

function Menu() {
	return (
		<div className="flex flex-col items-end h-full justify-evenly">
			<div className="h-1/6 w-full flex ">
				<Profile />
			</div>

			<div className=" h-3/5 w-full flex items-start justify-start ">
				<Tabbox />
			</div>
			<div className=" h-1/6 flex w-full">
				<Bottom />
			</div>
		</div>
	);
}

export default Menu;
