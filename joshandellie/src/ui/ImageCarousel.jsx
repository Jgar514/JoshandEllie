import React, { useState, useEffect } from "react";
import windowImage from "../assets/window.png";
import museImage from "../assets/muse.png";

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
	const images = [windowImage, museImage /* Add more images as needed */];

	return (
		<div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify bg-black bg-opacity-75 z-50">
			<div className="relative max-w-screen-md h-fit p-4 pt-20 rounded-lg shadow-lg">
				<div className="flex flex-col gap-6 items-center justify-between">
					<div className="h-12 flex justify-end w-full">
						<div className="border-2 border-red-500 flex items-center pb-2 rounded-full px-2">
							<button className="text-gray-600 text-6xl hover:text-black h-fit" onClick={closeCarousel}>
								&times;
							</button>
						</div>
					</div>
					<img src={images[selectedImage]} alt={`Image ${selectedImage + 1}`} className="w-full max-h-80" />
					<div className="flex flex-row w-fit gap-8">
						<button className="text-white h-fit w-fit text-lg py-2 px-4 rounded-md bg-blue-500 hover:bg-blue-600" onClick={() => setSelectedImage(selectedImage - 1)} disabled={selectedImage === 0}>
							&lt; Prev
						</button>

						<button className="text-white h-fit w-fit text-lg py-2 px-4 rounded-md bg-blue-500 hover:bg-blue-600" onClick={() => setSelectedImage(selectedImage + 1)} disabled={selectedImage === images.length - 1}>
							Next &gt;
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ImageCarousel;
