import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton } from "@mui/material";
import muse from "./assets/muse.png";

export function Sidebar({ sideBar = false, setSideBar = () => {} }) {
	return (
		<AnimatePresence>
			{sideBar && (
				<>
					<motion.div
						initial={{ x: "100%" }}
						animate={{
							x: 0,
						}}
						exit={{
							x: "100%",
						}}
						transition={{ type: "spring", bounce: 0, duration: 0.4 }}
						className="fixed bg-[#FBF3D9] text-white shadow-lg top-0 right-0 w-full max-w-sm h-screen p-5"
					>
						<button onClick={() => setSideBar((sideBar) => !sideBar)} className="bg-white text-black h-8 w-8 block mb-2 rounded-full">
							&times;
						</button>
						<h1 className="text-4xl capitalize leading-loose text-black">hello!</h1>
						<p className="leading-relaxed text-black text-[18px]">I'm Josh. I'm 29 and I live in Annapolis, Maryland. I'm a brother to 4 and an uncle to 6. I am seeking employment in the web development space. I want to do hard things and achieve big goals.</p>
						<h2 className="text-2xl text-[#D42920] pt-4">
							Email: <a href="mailto: Josh.T.Garvey@gmail.com">Josh.T.Garvey@gmail.com</a>
						</h2>
						<h2 className="text-[#F9c22c] pt-3">Awards and Accolades</h2>
						<p className="text-black">
							-Most likely to be famous 5th grade superlative
							<br />
							-2004 County Basketball Champion
						</p>
					</motion.div>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{
							opacity: 1,
						}}
						exit={{
							opacity: 0,
						}}
						transition={{ type: "spring", bounce: 0, duration: 0.2 }}
						onClick={() => setSideBar((sideBar) => !sideBar)}
						className="bg-transparent px-5 fixed h-full w-full flex items-center justify-center top-0 left-0"
					/>
				</>
			)}
		</AnimatePresence>
	);
}

export function Content({ sideBar, setSideBar, modal, setModal }) {
	return (
		<motion.div
			animate={{
				scale: sideBar || modal ? 0.8 : 1,
				opacity: sideBar || modal ? 0.5 : 1,
			}}
			transition={{ type: "spring", bounce: 0, duration: 0.4 }}
		>
			<h2 className="text-4xl capitalize">hello there</h2>
			<div className="flex items-center space-x-2">
				<button className="bg-indigo-600 my-3 text-white uppercase text-sm px-4 h-10 rounded" onClick={() => setSideBar((sideBar) => !sideBar)}>
					{sideBar ? "Close menu" : "Show menu"}
				</button>

				<button className="bg-indigo-600 my-3 text-white uppercase text-sm px-4 h-10 rounded" onClick={() => setModal((moda) => !modal)}>
					{modal ? "Close modal" : "Show modal"}
				</button>
			</div>

			<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
		</motion.div>
	);
}

export function Yodal({ modal, setModal }) {
	return (
		<AnimatePresence>
			{modal && (
				<div className="px-5 fixed h-full w-full flex items-center justify-center top-0 left-0">
					<motion.div
						initial={{ y: 50, opacity: 0 }}
						animate={{
							y: 0,
							opacity: 1,
						}}
						exit={{
							y: -50,
							opacity: 0,
						}}
						transition={{ type: "spring", bounce: 0, duration: 0.4 }}
						className="absolute z-10 p-5 bg-transparent
                         h-auto w-full max-w-md rounded text-white"
					>
						<button onClick={() => setModal((modal) => !modal)} className="absolute top-0 right-5 -mt-4 -mr-4 bg-white text-red-600 border border-red-600 h-8 w-8 block mb-2 rounded-full">
							&times;
						</button>
						<p className="text-black">Ellie</p>
						<img src={muse} />
					</motion.div>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{
							opacity: 1,
						}}
						exit={{
							opacity: 0,
						}}
						transition={{ type: "spring", bounce: 0, duration: 0.2 }}
						onClick={() => setModal((modal) => !modal)}
						className="bg-transparent px-5 fixed h-full w-full flex items-center justify-center top-0 left-0"
					/>
				</div>
			)}
		</AnimatePresence>
	);
}
