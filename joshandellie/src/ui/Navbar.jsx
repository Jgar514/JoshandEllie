import { useState } from "react";

export default function Header() {
	const [isNavOpen, setIsNavOpen] = useState(false);

	return (
		<div className="flex items-center justify-end  border-b-2 border-black bg-green1 lg:bg-green1 py-6 px-6 w-full">
			{/* <a href="/">
				<img src="https://designbygio.it/images/logo.png" alt="logo" />
			</a> */}
		</div>
	);
}
