import React, { useState } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import blackline from "../assets/ogwithicons.png";
import mobileui from "../assets/mobileui.png";
import portfolio from "../assets/3d.png";
import MenuCard from "../MenuCard";
import Modal2 from "./Modal2";

import Info from "./Info";
function Tabbox() {
	const [currentTabIndex, setCurrentTabIndex] = useState(0);

	const handleTabChange = (e, tabIndex) => {
		console.log(tabIndex);
		setCurrentTabIndex(tabIndex);
	};
	const [isOpen, setIsOpen] = useState(false);

	const contact = [
		{ text: "Mail me", link: "mailto:Josh.T.Garvey@gmail.com" },
		{ text: "GitHub", link: "https://github.com/jgar514" },
		{ text: "LinkedIn", link: "https://www.linkedin.com/in/josh-garvey" },
		// Add more items as needed
	];

	return (
		<React.Fragment>
			<div className=" border-b-0  pb-0  text-black drop-shadow  h-full w-full">
				<Tabs className="h-10 border-b-2 border-black" value={currentTabIndex} onChange={handleTabChange}>
					<Tab label="Projects" />
					<Tab label="Info" />
					<Tab label="About" />
				</Tabs>
				<div className="bg-izzy-600 h-full  overflow-y-auto">
					{/* TAB 1 Contents */}
					{currentTabIndex === 0 && (
						<Box className=" bg-white " sx={{ p: 0 }}>
							<div className="flex flex-col w-full px-2 lg:px-6 overflow-y-scroll pb-12">
								{/* card */}
								<a href="https://blackline.joshuagarvey.com" target="_blank" rel="noopener noreferrer">
									<MenuCard heading={"Currently working on..."} img={blackline} title="Blackline Contracting" description="A general contracting company website." />
								</a>

								<a href="https://ui.joshuagarvey.com" target="_blank" rel="noopener noreferrer">
									<MenuCard heading={"Mobile User Interface.."} img={mobileui} title="Mobile UI" description="A user interface for mobile devices" />
								</a>

								<a href="https://joshuagarvey.com" target="_blank" rel="noopener noreferrer">
									<MenuCard heading={"My favorite..."} img={portfolio} title="JoshuaGarvey.com" description="An immersive 3D web developer portfolio." />
								</a>
							</div>
						</Box>
					)}

					{/* TAB 2 Contents */}
					{currentTabIndex === 1 && (
						<Box sx={{ p: 0 }}>
							<Info />
						</Box>
					)}

					{/* TAB 3 Contents */}
					{currentTabIndex === 2 && (
						<Box sx={{ p: 3 }}>
							<div
								className="
							flex-col flex gap-2"
							>
								<h1 className="h-fit lg:text-3xl text-2xl underline">About Me:</h1>
								<h1 className="text-xl lg:text-2xl h-fit">One of the top young rising web developers in the world.</h1>
							</div>
						</Box>
					)}
				</div>
			</div>
		</React.Fragment>
	);
}

export default Tabbox;
