import React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail, AiOutlineSend, AiOutlineMenu, AiOutlineInstagram } from "react-icons/ai";
import Modal2 from "./Modal2";

function Bottom() {
	const openInNewTab = (url) => {
		window.open(url, "_blank", "noreferrer");
	};
	return (
		<div className=" bg-transparent h-1/6 flex flex-row border-black border-t-2 border-b-2 flex-wrap items-center justify-center p-2  w-full ">
			<div className="bg-yellow2  lg:bg-yellow2 border-2 border-black w-full rounded-3xl items-center  overflow-hidden    flex justify-center h-full px-0 z-40">
				<div className="text-6xl w-full flex items-center justify-center gap-8 py-0 px-4 ">
					<button role="link" onClick={() => openInNewTab("https://github.com/Jgar514")}>
						<AiFillGithub />
					</button>
					{/* <a href="https://github.com/Jgar514">
						<AiFillGithub />
					</a> */}
					<button role="link" onClick={() => openInNewTab("https://www.linkedin.com/in/josh-garvey-05944825a/")}>
						<AiFillLinkedin />
					</button>
					<button role="link" onClick={() => openInNewTab("https://www.instagram.com/joshgarvey/")}>
						<AiOutlineInstagram />
					</button>
					<Modal2 />
					{/* <a href="">
						<AiOutlineSend />
					</a> */}
				</div>
			</div>
		</div>
	);
}

export default Bottom;
