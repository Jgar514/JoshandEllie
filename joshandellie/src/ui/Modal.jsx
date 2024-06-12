import React, { useState } from "react";
import ResumeNew from "./Pdf";
import { AiOutlineDownload } from "react-icons/ai";
import pdf from "../utils/resume3.pdf";

export default function Modal({ isOpen, onClose }) {
	const [currentPage, setCurrentPage] = useState(1);

	const nextPage = () => {
		setCurrentPage(currentPage === 1 ? 2 : 1);
	};

	const buttonText = currentPage === 1 ? "Next" : "Back";

	return (
		<>
			{isOpen ? (
				<>
					<div className="bg-black md:w-96 lg:w-1/2 lg:h-680 mx-auto my-auto z-50 h-full overflow-hidden justify-center items-center flex overflow-x-hidden fixed inset-0 outline-none focus:outline-none">
						<div className="relative w-full h-full mx-auto max-w-3xl bg-green1">
							<div className="border-2 rounded-lg shadow-lg relative flex flex-col w-full bg-transparent outline-none focus:outline-none h-full">
								<div className="flex items-start w-full justify-between px-2 pt-2 border-b-2 border-black border-solid rounded-t h-fit pb-0">
									<h3 className="bg-white px-3 text-3xl font-semibold h-full pt-1 border-black border-2 border-b-0">Resume</h3>
									<button className="bg-white pb-1 pt-1 h-fit border-2 px-3 border-red-400 text-black rounded-full opacity-100 text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={onClose}>
										<span className="text-black h-fit w-6 text-3xl outline-none focus:outline-none">X</span>
									</button>
								</div>
								<div className="bg-black h-full py-4 mt-0 flex items-start justify-center">
									<ResumeNew currentPage={currentPage} />
								</div>
							</div>
							<div className="absolute h-fit w-full bottom-0 flex items-center bg-white  p-2 border-t border-b-2 border-black border-solid rounded-b">
								<div className="w-5/6 flex  justify-center ">
									<div className="w-1/2 flex justify-center md:justify-end">
										<button className="text-red-500 h-fit background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 border-black border-2" type="button" onClick={onClose}>
											Close
										</button>
									</div>
									<div className="w-1/2 flex justify-start md:justify-center">
										<button className="text-black font-bold h-fit uppercase px-6 py-2 bg-white  border-black border-2 text-sm" onClick={nextPage}>
											{buttonText}
										</button>
									</div>
								</div>
								<div className="text-black font-bold h-fit uppercase px-6 py-2 bg-white  border-black border-2 text-xs flex gap-2 items-center">
									<a href={pdf} download="resume.pdf" className="flex items-center" style={{ textDecoration: "none", color: "inherit" }}>
										<p>Download</p>
										<AiOutlineDownload />
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
				</>
			) : null}
		</>
	);
}
