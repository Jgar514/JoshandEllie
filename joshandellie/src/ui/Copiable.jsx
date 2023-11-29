import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { MdContentCopy } from "react-icons/md";
// import "./styles.css";

export default function Copiable() {
	const [isCopied, setIsCopied] = useState(Array(4).fill(false)); // Adjust the array size based on the number of snippets

	const snippets = [
		"Josh.T.Garvey@gmail.com",
		"github.com/jgar514",
		"linkedin.com/in/josh-garvey",

		"joshuagarvey.com",
		"ui.joshuagarvey.com",
		"blackline.joshuagarvey.com",
		"popup.joshuagarvey.com",
		// Add more snippets as needed
	];

	const onCopyText = (index) => {
		const updatedCopiedState = Array(snippets.length).fill(false);
		updatedCopiedState[index] = true;
		setIsCopied(updatedCopiedState);
		setTimeout(() => {
			setIsCopied(Array(snippets.length).fill(false));
		}, 1000);
	};

	return (
		<div className=" w-full flex flex-col gap-2">
			{snippets.map((snippet, index) => (
				<div key={index} className="code-section bg-gray-200  flex flex-row justify-between w-full h-fit items-center text-lg lg:text-2xl py-2 pl-2">
					<pre className="flex justify-center  h-fit">{snippet}</pre>
					<CopyToClipboard text={snippet} onCopy={() => onCopyText(index)} className="bg-white px-2 relative right-4 border-2">
						<span>{isCopied[index] ? "Copied!" : <MdContentCopy className="text-2xl" />}</span>
					</CopyToClipboard>
				</div>
			))}
		</div>
	);
}