import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import MainContent from './MainContent';
import Work from "./pages/Work"
import About from './pages/About';
import Blog from './pages/Blog';

export default function App() {
	return (
		<Router>
			<div className="relative z-0 h-full bg-yellow-100">
				<nav className="h-10 flex flex-row w-full bg-black justify-center">
					<div className="h-10 flex flex-row w-full bg-black justify-center items-center text-gray-50 gap-4">
						<NavLink
							to="/"
							className={({ isActive }) =>
								isActive ? "text-yellow-300" : "text-gray-50"
							}
						>
							[home]
						</NavLink>
						<NavLink
							to="/about"
							className={({ isActive }) =>
								isActive ? "text-yellow-300" : "text-gray-50"
							}
						>
							[about]
						</NavLink>
						<NavLink
							to="/work"
							className={({ isActive }) =>
								isActive ? "text-yellow-300" : "text-gray-50"
							}
						>
							[work]
						</NavLink>
						<NavLink
							to="/blog"
							className={({ isActive }) =>
								isActive ? "text-yellow-300" : "text-gray-50"
							}
						>
							[writings]
						</NavLink>

					</div>
				</nav>

				<Routes>
					<Route path="/" element={<MainContent />} />
					{/* Uncomment the following routes when components are ready */}
					<Route path="/work" element={<Work />} />
					// <Route path="/blog" element={<Blog />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</div>
		</Router>
	);
}
