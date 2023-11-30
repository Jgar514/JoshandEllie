import React, { useState, useEffect } from "react";
import windowImage from "../assets/window.png";
import museImage from "../assets/muse.png";
import sitting from "../assets/sitting.png";

const ImageCarousel = ({ isOpen, closeCarousel, selectedImage, setSelectedImage }) => {
	const [shouldRender, setShouldRender] = useState(false);

	useEffect(() => {
		if (isOpen && selectedImage !== null) {
			setShouldRender(true);
		} else {
			setShouldRender(false);
		}
	}, [isOpen, selectedImage]);

	if (!shouldRender) {
		return null; // If shouldRender is false, return null to render nothing
	}

	// Define your image array
	const images = [windowImage, museImage, sitting /* Add more images as needed */];

	const hasPreviousPhoto = selectedImage > 0;
	const hasNextPhoto = selectedImage < images.length - 1;

	return (
		<div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-75 z-50">
			<div className="relative max-w-screen-md h-4/6 pt-2 pb-8 px-2 rounded-lg shadow-lg bg-white w-screen">
				<div className="h-12 flex justify-end w-full">
					<div className="border-2 border-red-500 bg-white flex items-center pb-2 rounded-full px-2">
						<button className="text-red-500 text-6xl hover:text-black h-fit" onClick={closeCarousel}>
							x
						</button>
					</div>
				</div>
				<div className="flex flex-col gap-6 items-center justify-center h-fit  pb-10">
					<div className="flex-grow flex items-center justify-center">
						<img src={images[selectedImage]} alt={`Image ${selectedImage + 1}`} style={{ maxWidth: "320px", maxHeight: "320px", width: "auto", height: "auto" }} />
					</div>
					<div className="flex gap-8 w-full justify-center ">
						{hasPreviousPhoto && (
							<button className="text-white h-fit w-fit text-lg py-2 px-4 rounded-md bg-black hover:bg-black" onClick={() => setSelectedImage(selectedImage - 1)}>
								&lt; Prev
							</button>
						)}

						{hasNextPhoto && (
							<button className="text-white h-fit w-fit text-lg py-2 px-4 rounded-md bg-black hover:bg-black" onClick={() => setSelectedImage(selectedImage + 1)}>
								Next &gt;
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ImageCarousel;
