import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import pdf from "../utils/resume3.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew({ currentPage }) {
	const [width, setWidth] = useState(1200);

	useEffect(() => {
		setWidth(window.innerWidth);
	}, []);

	return (
		<div className="flex items-start">
			<Document file={pdf} className="w-full h-full overflow-hidden">
				<Page pageNumber={currentPage} scale={width > 786 ? 0.7 : 0.7} />
			</Document>
		</div>
	);
}

export default ResumeNew;
