import React from "react";
import Profile from "./Profile";
import Tabbox from "./Tabbox";
import Bottom from "./Bottom";

function Menu() {
	return (
		<div className="flex flex-col h-full">
			<Profile />
			<div className="flex-1 overflow-y-auto">
				<Tabbox />
			</div>
			<Bottom />
		</div>
	);
}

export default Menu;
