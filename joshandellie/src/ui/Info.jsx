import React from "react";
import Copiable from "./Copiable";

function Info() {
	return (
		<div className="h-full bg-gray-100 flex flex-col ">
			<div className="bg-gray-100 flex flex-row h-1/6 justify-between items-center">
				{/* <h1 className="text-xl h-fit ">Josh.T.Garvey@gmail.com</h1> */}

				<Copiable />
			</div>
			<div className="bg-white flex flex-col h-4/6 justify-between items-center">
				<p className="text-sm">
					<span className="underline">The challenge:</span>
					<br />
					<span className="text-xs"> to deliver a good amount of information while keeping the height of the application equal to one mobile device. No vertical scrolling.</span>
				</p>
				<p className="text-sm">
					<span className="underline">Inspiration</span>
					<br />
					<span className="text-xs">
						-simplistic profile layout similiar to github's approach.
						<br /> -utilizes tabs and sliding cards similiar to facebook on mobile devices.
						<br /> -The bottom resembles the bottom of an iphone screen.
					</span>
				</p>
			</div>
		</div>
	);
}

export default Info;
