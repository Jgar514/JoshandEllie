import React from "react";
import propic from "../assets/propic.jpeg";
import Modal from "./Modal";
import Quote from "./Quotes";

function Profile() {
	return (
		<div className="h-[100px] flex flex-col pt-2">
			{/* propic */}
			<div className="flex h-full">
				<div className=" gap-2 w-full flex p-2 justify-start">
					<img src={propic} className=" rounded-full bg-white h-full w-auto mx-2 border-2  border-black " />

					{/* name and status */}
					<div className="flex flex-col">
						<h1 className="flex  text-xl text-start  font-bold pt-1">Joshua Garvey</h1>
						<div className="px-4">
							<p className="px-2  text-sm text-green-600 w-fit border-green-600 border-r-2 h-fit border-l-2  animate-pulse">Open To Work</p>
						</div>
					</div>

					{/* resume button */}
					{/* <div className="bg-transparent p-2">
							<Modal />
						</div> */}
				</div>
			</div>
			{/* quote generator */}
			{/* <div className="h-1/3 bg-white border-black border-b-2 px-2 relative">
				<h1 className="text-3xl">Menu</h1>
			</div> */}
		</div>
	);
}

export default Profile;
