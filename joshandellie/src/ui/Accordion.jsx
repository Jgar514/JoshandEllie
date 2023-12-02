// Accordion.js
import React, { useState } from "react";
import Copiable from "./Copiable";

const Accordion = ({ title, content, items }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleAccordion = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="mb-4">
			<button onClick={toggleAccordion} className={`bg-blue-500 text-white p-2 rounded-md focus:outline-none w-full h-12 ${isOpen ? "mb-4" : ""}`}>
				{title}
			</button>

			{isOpen && (
				<div className="bg-white border rounded-md shadow-md p-4">
					{/* Accordion Content */}
					{content && <p>{content}</p>}
					{items && <Copiable items={items} />}
				</div>
			)}
		</div>
	);
};

export default Accordion;
