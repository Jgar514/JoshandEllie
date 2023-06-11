import React, { Suspense, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Gltf, OrbitControls, ScrollControls, useScroll, Preload } from "@react-three/drei";
import { getProject, val } from "@theatre/core";

import { SheetProvider, PerspectiveCamera, useCurrentSheet } from "@theatre/r3f";

import { editable as e } from "@theatre/r3f";

import { styles } from "./styles";
import { motion } from "framer-motion";
import CanvasLoader from "./Loader";
// import Modal from "./Modal";

import { Content } from "./sidebar";
import { Sidebar } from "./Sidebar";
import { Yodal } from "./Sidebar";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { IconButton } from "@mui/material";
import projectState from "./state.json";

export default function App() {
	// const sheet = getProject("Fly Through").sheet("Scene");
	const sheet = getProject("Fly Through", { state: projectState }).sheet("Scene");
	// const project = getProject("My Project", { state: projectState });
	const [openModal, setOpenModal] = useState(false);
	const [sideBar, setSideBar] = React.useState(false);
	const [modal, setModal] = React.useState(false);

	return (
		<div className="relative z-0 ">
			<div className="bg-transparent bg-cover bg-no-repeat bg-center">
				{/* <div className="bg-rose-500 bg-cover bg-no-repeat bg-center"> */}
				<section className="relative w-full h-screen mx-auto bg-[transparent]">
					{/* <Yodal {...{ modal, setModal }} /> */}

					{/* Name and Pole Thing */}
					{/* « */}
					<div className={"fixed xs:bottom-10 bottom-2 w-full h-[100px] flex justify-end items-center pr-10"}>
						<div>
							<h1 className={`text-[40px] sm:text-[80px] text-black-gradient`}>.com</h1>
						</div>
					</div>

					<div className={`absolute inset-0 top-[18px] sm:top-[80px] left-[10px] mx-auto flex flex-row items-start gap-5`}>
						<div className={"absolute "}>
							<div className="flex flex-col justify-center items-center mt-5">
								<div className="w-5 h-5 rounded-full black-gradient" />
								<div className="w-1 sm:h-80 h-40 black-gradient" />
							</div>
						</div>

						<div className={'"absolute ml-10'}>
							<h1 className={`${styles.heroHeadText} text-black-gradient`}>
								Joshua
								<br />
								Garvey
							</h1>
						</div>
					</div>
					{/* SLIDER Animation*/}
					<div className="absolute  bottom-24 w-full flex justify-center items-center">
						<div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 ">
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

					{/*End Name and Pole Thing*/}
					{/* Canvas and GLTF models */}
					<Canvas gl={{ preserveDrawingBuffer: true }}>
						<Suspense fallback={<CanvasLoader />}>
							<ScrollControls pages={5}>
								<SheetProvider sheet={sheet}>
									<Scene />

									<Gltf src="./models/scene4.glb" />
									{/* <Gltf src="./scene529.glb" /> */}
									<Gltf src="./models/ellie3.glb" castShadow receiveShadow onClick={() => setModal((moda) => !modal)} />
									<Gltf src="./models/who3.glb" castShadow receiveShadow onClick={() => setSideBar((sideBar) => !sideBar)} />
									<Gltf src="./models/wood2.glb" castShadow receiveShadow onClick={(e) => window.alert("Wood Art Detail Page Coming Soon")} />
									<Gltf src="./models/projects.glb" castShadow receiveShadow onClick={() => setOpenModal(true)} />
									<Gltf src="./models/screenprojects1.glb" castShadow receiveShadow onClick={(e) => window.alert("Project Detail Page Coming Soon")} />
									<Gltf src="./models/github1.glb" castShadow receiveShadow onClick={(e) => window.open("https://github.com/Jgar514")} />
									<Gltf src="./models/linkedin.glb" castShadow receiveShadow onClick={(e) => window.open("https://www.linkedin.com/in/josh-garvey-05944825a/")} />
									<Gltf src="./models/insta.glb" castShadow receiveShadow onClick={(e) => window.open("https://www.instagram.com/joshgarvey/")} />
									<Gltf src="./models/email.glb" castShadow receiveShadow onClick={(e) => window.alert("Josh.T.Garvey@gmail.com | email forum coming soon")} />
									{/* <Gltf src="./nametag.glb" castShadow receiveShadow onClick={() => setModal((moda) => !modal)} /> */}
								</SheetProvider>
							</ScrollControls>
						</Suspense>
						<Preload all />
					</Canvas>
				</section>
				{/* <Content {...{ sideBar, setSideBar, modal, setModal }} /> */}
				<Sidebar z-10 {...{ sideBar, setSideBar }} />
				{/* <Modal open={openModal} onClose={() => setOpenModal(false)} /> */}
				<Yodal {...{ modal, setModal }} />
			</div>
		</div>
	);
}

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

	const bgColor = "#84a4f4";

	return (
		<>
			{/* <color attach="background" args={[bgColor]} />
			<fog attach="fog" color={bgColor} near={-4} far={10} /> */}
			<ambientLight intensity={1.5} />

			<e.directionalLight theatreKey="light" position={[-5, 5, -5]} />

			<PerspectiveCamera theatreKey="Camera" makeDefault position={[10, 20, 10]} fov={90} near={0.1} far={70} enableZoom={false} lookAt={cameraTargetRef} />
			<e.mesh theatreKey="Camera Target" visible="editor" ref={cameraTargetRef}>
				<octahedronBufferGeometry args={[0.1, 0]} />
				<meshPhongMaterial color="yellow" />
			</e.mesh>

			{/* <OrbitControls /> */}
		</>
	);
}
