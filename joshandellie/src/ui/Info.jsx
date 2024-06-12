import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { MdContentCopy } from "react-icons/md";

function Info() {
	const email = "josh.t.garvey@gmail.com";
	const linkedInLink = "https://www.linkedin.com/in/josh-garvey/";
	const websiteLinks = [
		"https://blackline.joshuagarvey.com/",
		"https://ui.joshuagarvey.com/",
		"https://popup.joshuagarvey.com/",
		"https://joshuagarvey.com/",
		// Add more websites as needed
	];

	const skills = ["React", "JavaScript", "CSS", "HTML", "Tailwind CSS", "Web Development"];

	const employerInfo = {
		workHistoryLink: "https://github.com/Jgar514/workhistory/blob/main/README.md",
		resumeLinkMarkdown: "https://github.com/Jgar514/RESUME",
		resumeLinkPdf: "https://drive.google.com/file/d/1s9AW2AYQOKWVfdUiXc7QFkzaIjC2L5AC/view?usp=sharing",
		printableResumeLinkPdf: "https://drive.google.com/file/d/1aDU29hAbhEqe__ZWXHgDs_S87p-nqIci/view?usp=sharing",
	};
	const linkedinProfile = "https://www.linkedin.com/in/josh-garvey/";

	const [copiedEmail, setCopiedEmail] = useState(false);
	const [copiedLinkedIn, setCopiedLinkedIn] = useState(false);
	const [copiedWebsite, setCopiedWebsite] = useState(false);
	const [copiedSkill, setCopiedSkill] = useState(false);
	const [copiedEmployer, setCopiedEmployer] = useState(false);
	const [isContactDropdownOpen, setContactDropdownOpen] = useState(false);
	const [isWebsitesDropdownOpen, setWebsitesDropdownOpen] = useState(false);
	const [isSkillsDropdownOpen, setSkillsDropdownOpen] = useState(false);
	const [isEmployerDropdownOpen, setEmployerDropdownOpen] = useState(false);

	const handleCopyEmail = () => {
		setCopiedEmail(true);
		setTimeout(() => setCopiedEmail(false), 2000);
	};

	const handleCopyLinkedIn = () => {
		setCopiedLinkedIn(true);
		setTimeout(() => setCopiedLinkedIn(false), 2000);
	};

	const handleCopyWebsite = () => {
		setCopiedWebsite(true);
		setTimeout(() => setCopiedWebsite(false), 2000);
	};

	const handleCopySkill = () => {
		setCopiedSkill(true);
		setTimeout(() => setCopiedSkill(false), 2000);
	};

	const handleCopyEmployer = () => {
		setCopiedEmployer(true);
		setTimeout(() => setCopiedEmployer(false), 2000);
	};

	const toggleContactDropdown = () => {
		setContactDropdownOpen(!isContactDropdownOpen);
		setWebsitesDropdownOpen(false);
		setSkillsDropdownOpen(false);
		setEmployerDropdownOpen(false);
	};

	const toggleWebsitesDropdown = () => {
		setWebsitesDropdownOpen(!isWebsitesDropdownOpen);
		setContactDropdownOpen(false);
		setSkillsDropdownOpen(false);
		setEmployerDropdownOpen(false);
	};

	const toggleSkillsDropdown = () => {
		setSkillsDropdownOpen(!isSkillsDropdownOpen);
		setContactDropdownOpen(false);
		setWebsitesDropdownOpen(false);
		setEmployerDropdownOpen(false);
	};

	const toggleEmployerDropdown = () => {
		setEmployerDropdownOpen(!isEmployerDropdownOpen);
		setContactDropdownOpen(false);
		setWebsitesDropdownOpen(false);
		setSkillsDropdownOpen(false);
	};

	return (
		<div className="h-full bg-gray-100 flex flex-col gap-2 overflow-y-auto w-full">

			<div className="bg-gray-50 h-fit">
				<h1 className="bg-white m-0 p-4 cursor-pointer text-2xl border-b-2 " onClick={toggleContactDropdown}>
					Contact
				</h1>
				{isContactDropdownOpen && (
					<div className="h-fit flex flex-col pl-6 py-4 gap-2 text-lg ">
						{/* Email section */}
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

						{/* LinkedIn section */}
						<CopyToClipboard text={linkedinProfile} onCopy={handleCopyLinkedIn}>
							<div className="flex items-center ">
								<a href={linkedinProfile} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
									linkedin.com/in/josh-garvey/
								</a>
								<button className="ml-2 p-1" title="Copy to Clipboard">
									<MdContentCopy />
								</button>
							</div>
						</CopyToClipboard>
						{copiedLinkedIn && <p className="text-green-500">LinkedIn link copied to clipboard!</p>}
					</div>
				)}
			</div>
			<div className="bg-gray-50 h-fit">
				<h1 className="bg-white m-0 p-4 cursor-pointer text-2xl border-b-2 " onClick={toggleWebsitesDropdown}>
					Websites
				</h1>
				{isWebsitesDropdownOpen && (
					<div className="h-fit flex flex-col  pl-6 py-4 gap-2 text-lg">
						<ul>
							{websiteLinks.map((website, index) => (
								<li key={index}>
									<CopyToClipboard text={website} onCopy={handleCopyWebsite}>
										<div className="flex items-center py-2">
											<a href={website} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
												{website}
											</a>
											<button className="ml-2 p-1" title="Copy to Clipboard">
												<MdContentCopy />
											</button>
										</div>
									</CopyToClipboard>
								</li>
							))}
						</ul>
						{copiedWebsite && <p className="text-green-500">Copied to clipboard!</p>}
					</div>
				)}
			</div>
			<div className="bg-gray-50 h-fit">
				<h1 className="bg-white m-0 p-4 cursor-pointer text-2xl border-b-2" onClick={toggleSkillsDropdown}>
					Skills
				</h1>
				{isSkillsDropdownOpen && (
					<div className="h-fit">
						<ul>
							{skills.map((skill, index) => (
								<li key={index}>
									<div className="flex items-center pl-8">
										<span className="text-black">{skill}</span>
										<button className="ml-2 p-1" title="Copy to Clipboard"></button>
									</div>
								</li>
							))}
						</ul>
						{copiedSkill && <p className="text-green-500">Copied to clipboard!</p>}
					</div>
				)}
			</div>
			<div className="bg-gray-50 h-fit">
				<h1 className="bg-white m-0 p-4 cursor-pointer text-2xl border-b-2" onClick={toggleEmployerDropdown}>
					Employer Info
				</h1>
				{isEmployerDropdownOpen && (
					<div className="h-full pl-8 flex flex-col gap-y-2 pt-2 text-base overflow-y-auto pb-6">
						<div className="items-center ">
							<a href={employerInfo.resumeLinkPdf} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
								Resume June 2024
							</a>
						</div>
						<div className="items-center ">
							<a href={employerInfo.workHistoryLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
								Work History
							</a>
						</div>


						<div className="flex items-center">
							<a href={employerInfo.resumeLinkMarkdown} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
								Resume(Markdown)
							</a>
						</div>
						{/* <div className="flex items-center">
							<a href={employerInfo.resumeLinkPdf} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
								Resume(PDF)
							</a>
						</div> */}
					</div>
				)}
			</div>
		</div>
	);
}

export default Info;
