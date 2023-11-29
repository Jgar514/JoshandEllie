import React from "react";

function MenuCard({ heading, img, title, description }) {
	return (
		<div className="card w-full  flex  flex-col h-fit gap-2 py-2 border-b-2 border-black">
			<div className="h-fit text-xl ">
				<h1>{heading}</h1>
			</div>
			<div className="flex flex-row gap-2 w-full  bg-white h-fit">
				<div className=" bg-yellow-50 w-1/2">
					<img src={img} alt="Black Line" className="w-full h-auto" loading="eager" />
				</div>
				<div className=" w-1/2">
					<h1 className="text-lg  h-fit underline">{title}</h1>
					<p className="text-base">{description}</p>
				</div>
			</div>
		</div>
	);
}

export default MenuCard;
