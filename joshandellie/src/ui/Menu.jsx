import React from "react";
import Profile from "./Profile";
import Tabbox from "./Tabbox";
import Bottom from "./Bottom";

function Menu() {
	return (
		<div className="flex flex-col  h-full">
			<div className="h-1/6 w-full flex ">
				<Profile />
			</div>

			<div className=" h-4/6 w-full flex items-start justify-start mt-[-12] ">
				<Tabbox />
			</div>
			<div className=" h-1/6 flex w-full">
				<Bottom />
			</div>
		</div>
	);
}

export default Menu;
