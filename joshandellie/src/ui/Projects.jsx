import React from "react";
import { useKeenSlider } from "keen-slider/react";

function Projects() {
	const [sliderRef] = useKeenSlider({
		loop: false,
		mode: "free-snap",
		slides: {
			perView: 1.75,
			spacing: 15,
		},
	});

	return (
		<div ref={sliderRef} className="keen-slider h-5/6  p-4 flex bg-white border-2 border-white ">
			<div className=" keen-slider__slide number-slide3 flex justify-center items-center ">
				<a href="https://joshuagarvey.com/" target="_blank" rel="noopener noreferrer">
					<div className=" bg-[url('./images/square.png')] h-6/6 bg-cover rounded-xl border-2 border-black flex aspect-square  object-scale-down bg-center items-end overflow-hidden ">
						<div className="w-full h-1/6 flex  items-center  rounded justify-center bottom-0 backdrop-brightness-50">
							<span className="text-white text-lg text-bold   ">Immersive 3d Portfolio</span>
						</div>
					</div>
				</a>
			</div>

			<div className="keen-slider__slide number-slide3 flex justify-center items-center">
				<a href="https://popup.joshuagarvey.com/" target="_blank" rel="noopener noreferrer">
					<div className=" bg-[url('./images/popup.gif')] h-6/6 bg-cover rounded-xl border-2 border-black flex aspect-square  object-scale-down bg-center items-end">
						<div className="w-full h-1/6 flex  items-center justify-center bottom-0 backdrop-brightness-50">
							<span className="text-white text-lg text-bold   ">Pop-up Ad</span>
						</div>
					</div>
				</a>
			</div>

			<div className="keen-slider__slide number-slide3 flex justify-center items-center">
				<a href="https://github.com/Jgar514/removeSnow/blob/main/README.md">
					<div className=" bg-[url('./images/squaremendix.png')] h-6/6 bg-cover rounded-xl border-2 border-black flex aspect-square  object-scale-down bg-center items-end">
						<div className="w-full h-1/6 flex  items-center justify-center bottom-0 backdrop-brightness-50">
							<span className="text-white text-lg text-bold   ">Enterprise Dashboard</span>
						</div>
					</div>
				</a>
			</div>

			<div className="keen-slider__slide number-slide3 flex justify-center items-center">
				<div className=" bg-white h-6/6 bg-cover rounded-xl border-2 border-black flex aspect-square  object-scale-down bg-center items-end">
					<div className="w-full h-1/6 flex  items-center justify-center bottom-0 backdrop-brightness-50">
						<span className="text-white text-lg text-bold   ">Placeholder</span>
					</div>
				</div>
			</div>
			<div className="keen-slider__slide number-slide3 flex justify-center items-center">
				<div className=" bg-white h-6/6 bg-cover rounded-xl border-2 border-black flex aspect-square  object-scale-down bg-center items-end">
					<div className="w-full h-1/6 flex  items-center justify-center bottom-0 backdrop-brightness-50">
						<span className="text-white text-lg text-bold   ">Placeholder</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Projects;
