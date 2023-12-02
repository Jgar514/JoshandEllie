import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { MdContentCopy } from "react-icons/md";

function Info() {
	const email = "josh.t.garvey@gmail.com";
	const linkedInLink = "https://www.linkedin.com/in/josh-garvey/";
	const [copiedEmail, setCopiedEmail] = useState(false);
	const [copiedLinkedIn, setCopiedLinkedIn] = useState(false);
	const [isContactDropdownOpen, setContactDropdownOpen] = useState(false);
	const [isWebsitesDropdownOpen, setWebsitesDropdownOpen] = useState(false);

	const handleCopyEmail = () => {
		setCopiedEmail(true);
		setTimeout(() => setCopiedEmail(false), 2000);
	};

	const handleCopyLinkedIn = () => {
		setCopiedLinkedIn(true);
		setTimeout(() => setCopiedLinkedIn(false), 2000);
	};

	const toggleContactDropdown = () => {
		setContactDropdownOpen(!isContactDropdownOpen);
		// Close Websites dropdown when Contact dropdown is toggled
		setWebsitesDropdownOpen(false);
	};

	const toggleWebsitesDropdown = () => {
		console.log("Toggling Websites Dropdown");
		setWebsitesDropdownOpen(!isWebsitesDropdownOpen);
		// Close Contact dropdown when Websites dropdown is toggled
		setContactDropdownOpen(false);
	};

	return (
		<div className="h-full bg-gray-100 flex flex-col overflow-y-auto">
			<div className="bg-red-200 h-fit">
				<h1 className="bg-white m-0 p-4 cursor-pointer" onClick={toggleContactDropdown}>
					Contact
				</h1>
				{isContactDropdownOpen && (
					<div className="h-fit flex flex-row">
						<CopyToClipboard text={`mailto:${email}`} onCopy={handleCopyEmail}>
							<div className="flex items-center">
								<a href={`mailto:${email}`} className="text-blue-500 underline">
									josh.t.garvey@gmail.com
								</a>
								<button className="ml-2 p-1" title="Copy to Clipboard">
									<MdContentCopy />
								</button>
							</div>
						</CopyToClipboard>
						{copiedEmail && <p className="text-green-500">Copied to clipboard!</p>}
					</div>
				)}
				{isContactDropdownOpen && (
					<div className="h-fit flex flex-row">
						<CopyToClipboard text={linkedInLink} onCopy={handleCopyLinkedIn}>
							<div className="flex items-center">
								<a href={linkedInLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
									linkedin.com/in/josh-garvey/
								</a>
								<button className="ml-2 p-1" title="Copy to Clipboard">
									<MdContentCopy />
								</button>
							</div>
						</CopyToClipboard>
						{copiedLinkedIn && <p className="text-green-500">Copied to clipboard!</p>}
					</div>
				)}
			</div>
			<div className="bg-red-200">
				<h1 className="bg-white m-0 p-4 cursor-pointer" onClick={toggleWebsitesDropdown}>
					Websites
				</h1>
				{isWebsitesDropdownOpen && (
					<div className="h-fit bg-blue-100">
						<p onClick={() => console.log("Item Clicked")}>Item 1</p>
						<p onClick={() => console.log("Item Clicked")}>Item 2</p>
						{/* Add more items as needed */}
					</div>
				)}
			</div>
		</div>
	);
}

export default Info;
