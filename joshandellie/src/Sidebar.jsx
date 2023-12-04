import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { MdContentCopy } from "react-icons/md";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import muse from "./assets/muse.png";

export function Sidebar({ sideBar = false, setSideBar = () => {} }) {
	const email = "Josh.T.Garvey@gmail.com";
	const githubLink = "https://github.com/Jgar514"; // Replace with your GitHub link
	const linkedinLink = "https://www.linkedin.com/in/josh-garvey/"; // Replace with your LinkedIn link

	const [isEmailCopied, setIsEmailCopied] = React.useState(false);
	const [isGitHubCopied, setIsGitHubCopied] = React.useState(false);
	const [isLinkedInCopied, setIsLinkedInCopied] = React.useState(false);

	const onCopyEmail = () => {
		setIsEmailCopied(true);
		setTimeout(() => {
			setIsEmailCopied(false);
		}, 1000);
	};

	const onCopyGitHub = () => {
		setIsGitHubCopied(true);
		setTimeout(() => {
			setIsGitHubCopied(false);
		}, 1000);
	};

	const onCopyLinkedIn = () => {
		setIsLinkedInCopied(true);
		setTimeout(() => {
			setIsLinkedInCopied(false);
		}, 1000);
	};

	return (
		<AnimatePresence>
			{sideBar && (
				<>
					<motion.div
						initial={{ x: "100%" }}
						animate={{
							x: 0,
						}}
						exit={{
							x: "100%",
						}}
						transition={{ type: "spring", bounce: 0, duration: 0.4 }}
						className="fixed bg-[#FBF3D9]  text-white shadow-lg top-0 right-0 w-full max-w-sm h-screen p-5 z-50"
					>
						<button onClick={() => setSideBar((sideBar) => !sideBar)} className="bg-white text-black h-8 w-8 block mb-2 rounded-full">
							&times;
						</button>
						<h1 className="text-4xl h-fit capitalize leading-loose underline text-black">About</h1>
						<p className="h-fit leading-relaxed text-black text-[18px]">My name is Josh and I am one of the top young rising web developers in the world. I'm 29 and I live in Annapolis, Maryland. I'm a brother to 4 and an uncle to 6.</p>

						<h2 className="text-2xl text-black pt-4 h-fit underline">
							Email:{" "}
							<CopyToClipboard text={email} onCopy={onCopyEmail} className="inline-block cursor-pointer">
								<span>
									<a className="text-xl" href={`mailto:${email}`}>
										{email}
									</a>{" "}
									<MdContentCopy className="text-xl inline mx-2" />
								</span>
							</CopyToClipboard>
							{isEmailCopied && <span className="text-[#D42920] ml-2">Copied!</span>}
						</h2>

						<h2 className="text-2xl text-green-700 pt-4 h-fit underline">
							GitHub: <br />
							<CopyToClipboard text={githubLink} onCopy={onCopyGitHub} className="inline-block cursor-pointer">
								<span>
									<a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-green-700 text-xl">
										github.com/Jgar514
									</a>{" "}
									<MdContentCopy className="text-xl inline text-green-700 mx-4" />
								</span>
							</CopyToClipboard>
							{isGitHubCopied && <span className="text-green-700 ml-2">Copied!</span>}
						</h2>

						<h2 className="text-2xl text-blue-700 pt-4 h-fit underline">
							LinkedIn:{" "}
							<CopyToClipboard text={linkedinLink} onCopy={onCopyLinkedIn} className="inline-block cursor-pointer">
								<span>
									<a href={linkedinLink} target="_blank" rel="noopener noreferrer" className="text-blue-700 text-xl">
										linkedin.com/in/josh-garvey/
									</a>{" "}
									<MdContentCopy className="text-xl inline text-blue-700 mx-2" />
								</span>
							</CopyToClipboard>
							{isLinkedInCopied && <span className="text-blue-700 ml-2">Copied!</span>}
						</h2>

						<h2 className="text-[#F9c22c] text-lg pt-3 h-fit underline">Certificates, Awards, Accomplishments</h2>
						<p className="text-black h-fit text-sm">
							-Mendix Rapid Developer Certificate
							<br />
							-Responsive Web Design Certificate
							<br />
							-Most likely to be famous 5th grade superlative
							<br />
							-2004 County Basketball Champion
							<br />
							<br />
							<span className="text-red-600 pl-4 text-sm">// Coming December 12: Associate Of Arts Degree</span>
						</p>
					</motion.div>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{
							opacity: 1,
						}}
						exit={{
							opacity: 0,
						}}
						transition={{ type: "spring", bounce: 0, duration: 0.2 }}
						onClick={() => setSideBar((sideBar) => !sideBar)}
						className="bg-transparent px-5 fixed h-full w-full flex items-center justify-center top-0 left-0"
					/>
				</>
			)}
		</AnimatePresence>
	);
}
