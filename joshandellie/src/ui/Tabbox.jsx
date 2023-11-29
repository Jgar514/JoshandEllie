import React, { useState } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import blackline from "../assets/ogwithicons.png";
import mobileui from "../assets/mobileui.png";
import portfolio from "../assets/3d.png";
import MenuCard from "../MenuCard";
import Modal2 from "./Modal2";
import Copiable from "./Copiable";
function Tabbox() {
	const [currentTabIndex, setCurrentTabIndex] = useState(0);

	const handleTabChange = (e, tabIndex) => {
		console.log(tabIndex);
		setCurrentTabIndex(tabIndex);
	};

	return (
		<React.Fragment>
			<div className=" border-b-2 border-gray-400 pb-4 overflow-hidden text-black drop-shadow bg-white">
				<Tabs className="h-10 border-b-2 border-black" value={currentTabIndex} onChange={handleTabChange}>
					<Tab label="Projects" />
					<Tab label="Info" />
					<Tab label="About" />
				</Tabs>
				<div className="bg-izzy-600">
					{/* TAB 1 Contents */}
					{currentTabIndex === 0 && (
						<Box className=" bg-white " sx={{ p: 0 }}>
							<div className="flex flex-col  w-full px-2 lg:px-6  overflow-y-scroll pb-12">
								{/* card */}
								<MenuCard heading={"Currently working on..."} img={blackline} title="Blackline Contracting" description="A general contracting company website." />

								<MenuCard heading={"Mobile User Interface.."} img={mobileui} title="Mobile UI" description="A user interface for mobile devices" />
								<MenuCard heading={"My favorite..."} img={portfolio} title="JoshuaGarvey.com" description="An immersive 3D web developer portfolio." />
							</div>
						</Box>
					)}

					{/* TAB 2 Contents */}
					{currentTabIndex === 1 && (
						<Box sx={{ p: 0 }}>
							<Copiable />
						</Box>
					)}

					{/* TAB 3 Contents */}
					{currentTabIndex === 2 && (
						<Box sx={{ p: 1 }}>
							<Typography variant="h5">One of the top young rising developers in the world.</Typography>
						</Box>
					)}
				</div>
			</div>
		</React.Fragment>
	);
}

export default Tabbox;
