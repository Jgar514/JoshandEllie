import React, { Suspense, useState, useRef, useEffect } from "react";
import Profile from "./ui/Profile";

import { Canvas, useFrame } from "@react-three/fiber";
import { Gltf, OrbitControls, ScrollControls, useScroll, Preload, Text } from "@react-three/drei";
import { getProject, val } from "@theatre/core";
import { SheetProvider, PerspectiveCamera, useCurrentSheet } from "@theatre/r3f";
import { editable as e } from "@theatre/r3f";
import { styles } from "./styles";
import { motion } from "framer-motion";
import CanvasLoader from "./Loader";
// import { Content } from "./sidebar";
import { Sidebar } from "./Sidebar";
// import { Yodal } from "./Sidebar";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import projectState from "./desktop.json";
import mobileState from "./mobile1125.json";
import { useNavigate } from "react-router-dom";
import Top from "./ui/Top";
import Middle from "./ui/Middle";
import Bottom from "./ui/Bottom";
import windowImage from "./assets/window.png";
import museImage from "./assets/muse.png";
import ImageCarousel from "./ui/ImageCarousel";
import Menu from "./ui/Menu";

export default function App() {
	// const sheet = getProject("Fly Through").sheet("Scene");

	// const sheet = getProject("Fly Through", { state: projectState }).sheet("Scene");
	const openEmailWindow = () => {
		window.location.href = "mailto:Josh.T.Garvey@gmail.com";
	};
	const images = [museImage, windowImage /* Add more images as needed */];
	const [openModal, setOpenModal] = useState(false);
	const [sideBar, setSideBar] = React.useState(false);
	const [modal, setModal] = React.useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const handleMenuToggle = () => {
		setIsMenuOpen(!isMenuOpen);
	};
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 600); // Adjust the width threshold as needed
	const sheet = getProject("Fly Through", { state: isMobile ? mobileState : projectState }).sheet("Scene");
	const [isCarouselOpen, setIsCarouselOpen] = useState(false);
	const [selectedImage, setSelectedImage] = useState(0);
	const openCarousel = (index) => {
		setSelectedImage(index);
		setIsCarouselOpen(true);
	};

	const closeCarousel = () => {
		setIsCarouselOpen(false);
		setSelectedImage(null);
	};

	return (
		<div className="relative z-0 height-screen overflow-hidden ">
			<section className="relative w-full h-screen mx-auto bg-white">
				<div className="container p-4">
					{/* No image thumbnails in this version */}

					<ImageCarousel isOpen={isCarouselOpen} closeCarousel={closeCarousel} selectedImage={selectedImage} setSelectedImage={setSelectedImage} images={images} />
				</div>
				{/* menu.opened */}

				{isMenuOpen && (
					// <div className="fixed flex flex-col items-top h-full p-4 top-0 right-0 h-68 bg-white w-full md:w-1/2 border-2 border-black transition-transform duration-300 ease-in-out transform z-50 ">
					// 	{/* Your fake menu content goes here */}

					// 	<div className="bg-blue-100 pt-8 h-full">
					// 		<h2 className="text-xl font-bold mb-0 h-fit">Joshua Garvey</h2>
					// 		<div className="flex flex-col pt-8">
					// 			<ul>
					// 				<li className="py-2 text-xl">
					// 					<p>Currently working on..</p>
					// 				</li>
					// 				<li className="py-2">Item 2</li>
					// 				<li className="py-2">Item 3</li>
					// 				{/* Add more items as needed */}
					// 			</ul>
					// 		</div>
					// 	</div>
					// 	<button onClick={() => setIsMenuOpen(false)} className="bg-gray-300 p-2 mt-4 h-16">
					// 		Close Menu
					// 	</button>
					// </div>
					<div className={`fixed ${isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"} flex flex-col items-top h-full top-0 right-0 w-full md:w-1/2 border-2 border-black transition-all duration-300 ease-in-out transform z-40 bg-white lg:w-[600px]`}>
						{/* Your fake menu content goes here */}

						<Menu />
					</div>
				)}

				{/* menu.end */}

				{/* menu.icon */}

				<div className="border-gray-50 border-2 absolute top-2 right-4 z-50 h-auto flex items-center">
					<IconButton onClick={handleMenuToggle} style={{ color: "transparent" }}>
						<div className="flex flex-col">
							<span className="h-2 w-12 mb-2 bg-black border border-white"></span>
							<span className="h-2 w-12 mb-2 bg-black border border-white"></span>
							<span className="h-2 w-12 bg-black border border-white"></span>
						</div>
					</IconButton>
				</div>

				<div className="absolute top-2">
					{/* nametag.line */}
					<div className="absolute top-4 md:top-10 pl-6 ">
						<div className="flex flex-col  items-center absolute top-0  ">
							<div className="w-5 h-5 rounded-full black-gradient" />
							<div className="w-1 sm:h-80 h-28 black-gradient" />
						</div>

						{/* nametag.name */}
						<div className="pl-6 absolute top-2 left-8">
							<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
								Joshua
								<br />
								Garvey
							</h1>
						</div>
					</div>

					{/* .com */}
					<div className={"fixed bottom-0 w-full h-[100px] flex justify-end items-center pr-5 md:mr-10"}>
						<h1 className="text-4xl md:text-6xl  lg:text-7xl text-black-gradient font-bold">.com</h1>
					</div>
				</div>

				{/* SLIDER Animation*/}
				<div className="absolute bottom-40 md:bottom-12 w-full    h-fit flex justify-center items-center">
					<div className="w-[35px] h-[74px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 ">
						<motion.div
							animate={{
								y: [0, 24, 0],
							}}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								repeatType: "loop",
							}}
							className="w-6 h-4 rounded-full bg-secondary mb-1"
						/>
					</div>
				</div>
				{/* END SLIDER Animation  */}

				{/* Canvas and GLTF models */}
				<div className="flex items-justify- h-full ">
					<div className="w-full  absolute top-0 h-full   z-20 border-black">
						{/* Your content goes here */}

						{/* Other components or content can go here */}
						<Canvas
							gl={{ preserveDrawingBuffer: true }}
							style={{ width: "100%", height: "100%" }}
							onCreated={({ gl }) => {
								// Additional setup if needed
							}}
						>
							<Suspense fallback={<CanvasLoader />}>
								<ScrollControls pages={15}>
									<SheetProvider sheet={sheet}>
										<Scene />

										<Gltf src="./models/scene4.glb" />
										{/* scene.ellie */}

										<Gltf src="./models/ellie3.glb" castShadow receiveShadow onClick={() => openCarousel(0)} />

										{/* scene.contactcard */}

										<Gltf src="./models/who3.glb" castShadow receiveShadow onClick={() => setSideBar((sideBar) => !sideBar)} />
										<Gltf src="./models/wood2.glb" castShadow receiveShadow />

										{/* scene.computer */}
										<Gltf src="./models/projects.glb" castShadow receiveShadow />
										<Gltf src="./models/projectscreen.glb" castShadow receiveShadow onClick={redirect} />

										{/* scene.socialicons */}

										<Gltf src="./models/github1.glb" castShadow receiveShadow onClick={(e) => window.open("https://github.com/Jgar514")} />
										<Gltf src="./models/linkedin.glb" castShadow receiveShadow onClick={(e) => window.open("https://www.linkedin.com/in/josh-garvey-05944825a/")} />
										<Gltf src="./models/insta.glb" castShadow receiveShadow onClick={(e) => window.open("https://www.instagram.com/joshgarvey/")} />
										<Gltf src="./models/email.glb" castShadow receiveShadow onClick={openEmailWindow} />
										{/* scene.end */}
									</SheetProvider>
								</ScrollControls>
							</Suspense>
							<Preload all />
						</Canvas>
					</div>
				</div>
			</section>

			<Sidebar className="z-50" {...{ sideBar, setSideBar }} />
			{/* <Yodal {...{ modal, setModal }} /> */}
		</div>
	);
}

// link top project page
function redirect() {
	window.open("https://projects.joshuagarvey.com/", "_blank");
}

//functionscene
// function to make flythrough effect

function Scene() {
	const sheet = useCurrentSheet();
	const scroll = useScroll();
	const cameraTargetRef = useRef();

	// our callback will run on every animation frame
	useFrame(() => {
		// the length of our sequence
		const sequenceLength = val(sheet.sequence.pointer.length);
		// update the "position" of the playhead in the sequence, as a fraction of its whole length
		sheet.sequence.position = scroll.offset * sequenceLength;
	});

	// const bgColor = "#84a4f4";

	return (
		<>
			{/* <color attach="background" args={[bgColor]} />
			<fog attach="fog" color={bgColor} near={-4} far={10} /> */}
			<ambientLight intensity={1.5} />

			<e.directionalLight theatreKey="light" position={[-5, 5, -5]} />

			<PerspectiveCamera theatreKey="Camera" makeDefault position={[10, 20, 10]} fov={70} near={0.1} far={70} enableZoom={false} lookAt={cameraTargetRef} />
			<e.mesh theatreKey="Camera Target" visible="editor" ref={cameraTargetRef}>
				<octahedronBufferGeometry args={[0.1, 0]} />
				<meshPhongMaterial color="yellow" />
			</e.mesh>

			{/* <OrbitControls /> */}
		</>
	);
}
