import React, { Suspense, useState, useRef, useEffect } from "react";
import Profile from "./ui/Profile";

import { Canvas, useFrame } from "@react-three/fiber";
import { Gltf, OrbitControls, ScrollControls, useScroll, Preload, Text, MeshWobbleMaterial } from "@react-three/drei";
import { getProject, val } from "@theatre/core";
import { SheetProvider, PerspectiveCamera, useCurrentSheet } from "@theatre/r3f";
import { editable as e } from "@theatre/r3f";
import { styles } from "./styles";
import { motion } from "framer-motion";
import CanvasLoader from "./Loader";
import { Sidebar } from "./Sidebar";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import projectState from "./desktop.json";
import mobileState from "./mobile1125.json";
import { useNavigate } from "react-router-dom";
import windowImage from "./assets/window.png";
import museImage from "./assets/muse.png";
import ImageCarousel from "./ui/ImageCarousel";
import Menu from "./ui/Menu";
import Modal from "./ui/Modal";
import { Cloud, Stars, Float, Stage, SpotLight, Billboard, Circle } from "@react-three/drei";
import Reboto from "./utils/Reboto.json";

export default function App() {
	// const sheet = getProject("Fly Through").sheet("Scene");
	// const sheet = getProject("Fly Through", { state: projectState }).sheet("Scene");
	const openEmailWindow = () => {
		window.location.href = "mailto:Josh.T.Garvey@gmail.com";
	};
	const [showResumeModal, setShowResumeModal] = React.useState(false);
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
	const handleResumeClick = () => {
		setShowResumeModal(true);
	};

	return (
		<div className="relative z-0 h-full bg-yellow-100  ">
			<section className="relative w-full h-full mx-auto bg-white white">
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
						<Menu />
					</div>
				)}

				{/* menu.end */}

				{/* menu.icon */}

				<div className="border-gray-50 lg:mr-14 border-2 absolute top-2 right-4 z-40 h-auto flex items-center">
					<IconButton onClick={handleMenuToggle} style={{ color: "transparent" }}>
						<div className="flex flex-col">
							<span className="h-2 w-12 mb-2 bg-black border border-white"></span>
							<span className="h-2 w-12 mb-2 bg-black border border-white"></span>
							<span className="h-2 w-12 bg-black border border-white"></span>
						</div>
					</IconButton>
				</div>

				{/* icon.end */}

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
				<div className={"absolute bottom-40 w-full h-[100px] flex justify-end items-center pr-5 lg:mr-14   md:mr-10 overflow-hidden"}>
					<h1 className="text-4xl md:text-6xl  lg:text-7xl text-black-gradient font-bold lg:pr-12 ">.com</h1>
				</div>

				{/* SLIDER Animation*/}
				<div className=" absolute bottom-0   md:bottom-0 w-full    h-fit flex  flex-col  md:gap-2 text-lg justify-center items-center ">
					<div className="text-3xl lg:text-4xl font-bold font-custom  ">Scroll</div>
					<div className=" w-[70px] h-[110px]  rounded-3xl border-4 border-black  border-double flex justify-center items-start p-2 ">
						<motion.div
							animate={{
								y: [0, 30, 0],
							}}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								repeatType: "loop",
							}}
							className="w-1/4 h-1/3 bg-black border-yellow-600 border-2 rounded-full  mb-1"
						/>
					</div>
				</div>
				{/* END SLIDER Animation  */}

				{/* Canvas and GLTF models */}

				<div className="w-full  absolute top-0 h-screen   z-20 border-black">
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
									<Gltf src="./models/rtb.glb" castShadow receiveShadow onClick={(e) => window.open("https://www.raisingthebarelectric.com/")} />
									<Gltf src="./models/resume.glb" castShadow receiveShadow onClick={handleResumeClick} />

									{/* scene.ellie */}

									<Gltf src="./models/ellienolabel3.glb" castShadow receiveShadow onClick={() => openCarousel(0)} />

									{/* scene.contactcard */}
									<Gltf src="./models/who3.glb" castShadow receiveShadow onClick={() => setSideBar((sideBar) => !sideBar)} />
									{/* scene.elephant*/}
									<Gltf src="./models/wood2.glb" castShadow receiveShadow />
									{/* scene.computer */}
									<Gltf src="./models/projects.glb" castShadow receiveShadow />
									<Gltf src="./models/projectscreen.glb" castShadow receiveShadow onClick={redirect} />
									{/* scene.socialicons */}
									<Float
										speed={8} // Animation speed, defaults to 1
										rotationIntensity={0} // XYZ rotation intensity, defaults to 1
										floatIntensity={0.5} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
										floatingRange={[0, 0.08]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
									>
										<Gltf src="./models/github1.glb" castShadow receiveShadow onClick={(e) => window.open("https://github.com/Jgar514")} />
										<Gltf src="./models/linkedin.glb" castShadow receiveShadow onClick={(e) => window.open("https://www.linkedin.com/in/josh-garvey-05944825a/")} />
										<Gltf src="./models/insta.glb" castShadow receiveShadow onClick={(e) => window.open("https://www.instagram.com/joshgarvey/")} />
										<Gltf src="./models/email.glb" castShadow receiveShadow onClick={openEmailWindow} />
									</Float>
									<Billboard
										follow={true}
										lockX={false}
										lockY={false}
										lockZ={false}
										position={[-5.5, 4.9, 0.4]} // Lock the rotation on the z axis (default=false)
									>
										<Text color={"Green"} fontSize={0.04}>
											Resume
										</Text>
										<Circle
											args={[0.02, 64]}
											position={[-0.1, 0.01, 0]} // Adjust the position to place the circle below the text
											// Rotate the circle to face upward
										>
											<meshBasicMaterial attach="material" color="green" />
										</Circle>
									</Billboard>

									<Billboard
										follow={true}
										lockX={false}
										lockY={false}
										lockZ={false}
										position={[3.3, 5.1, -2.4]} // Lock the rotation on the z axis (default=false)
									>
										<Text
											font={Reboto}
											color="white"
											fontSize={0.4}
											outlineWidth={0.02} // Adjust the width of the outline
											outlineColor="black"
										>
											Ellie
										</Text>
									</Billboard>
									<Billboard
										follow={true}
										lockX={false}
										lockY={false}
										lockZ={false}
										position={[3.3, 4.8, -2.4]} // Lock the rotation on the z axis (default=false)
									>
										<Text
											font={Reboto}
											color="red"
											fontSize={0.2}
											outlineWidth={0.01} // Adjust the width of the outline
											outlineColor="black"
										>
											//clickable
										</Text>
									</Billboard>
									{/* scene.end */}
								</SheetProvider>
							</ScrollControls>
						</Suspense>
						<Preload all />
					</Canvas>
				</div>
			</section>

			<Sidebar className="z-50" {...{ sideBar, setSideBar }} />

			{/* No image thumbnails in this version */}

			<ImageCarousel isOpen={isCarouselOpen} closeCarousel={closeCarousel} selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
			<Modal isOpen={showResumeModal} onClose={() => setShowResumeModal(false)} />
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

	return (
		<>
			<ambientLight intensity={1.5} />

			<e.directionalLight theatreKey="light" position={[-5, 5, -5]} />

			<PerspectiveCamera theatreKey="Camera" makeDefault position={[10, 20, 10]} fov={70} near={0.1} far={70} enableZoom={false} lookAt={cameraTargetRef} />
			<e.mesh theatreKey="Camera Target" visible="editor" ref={cameraTargetRef}>
				<octahedronBufferGeometry args={[0.1, 0]} />
				<meshPhongMaterial color="yellow" />
			</e.mesh>

			{/* <Sky distance={1000000} sunPosition={[0, 10, 0]} inclination={0} azimuth={0.25} /> */}
			{/* 
			<Cloud segments={40} bounds={[200, 300, 800]} volume={10} color="white" />
			<Cloud seed={1} scale={1} volume={15} color="white" fade={100} /> */}

			{/* <OrbitControls /> */}
		</>
	);
}
