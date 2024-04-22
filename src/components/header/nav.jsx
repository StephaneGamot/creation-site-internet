"use client";

import Link from "next/link";
import { useState, useRef } from "react";

export default function Nav() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeMenu, setActiveMenu] = useState(null);
	const hoverTimer = useRef(null);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const handleMouseEnter = (menu) => {
		if (hoverTimer.current) {
			clearTimeout(hoverTimer.current);
		}
		setActiveMenu(menu);
	};

	const handleMouseLeave = () => {
		if (hoverTimer.current) {
			clearTimeout(hoverTimer.current);
		}
		hoverTimer.current = setTimeout(() => {
			setActiveMenu(null);
		}, 2000);
	};

	return (
		<nav className="bg-gray-100 shadow-lg flex">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center">
                    <Link href="/" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
							Accueil
						</Link>
						<ul className="flex space-x-4">
							<li className="relative" onMouseEnter={() => handleMouseEnter("services")} onMouseLeave={handleMouseLeave}>
								<Link href="/nos-services" className="px-4 py-2 inline-block text-gray-700 hover:text-gray-900">
									Services
								</Link>
								<div
									className={`absolute left-0 w-48 bg-gray-100 border mt-2 rounded transition-opacity duration-500 ${
										activeMenu === "services" ? "opacity-100" : "opacity-0 pointer-events-none"
									}`}>
									<ul>
										<li>
											<Link href="/creation-de-site-internet" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
												Création de site internet
											</Link>
										</li>
										<li>
											<Link href="/creation-dun-site-de-vente-en-ligne" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
												SEO & Référencement naturel
											</Link>
										</li>
										<li>
											<Link href="/creations-graphiques-et-impressions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
												Refonte de site web
											</Link>
										</li>
									</ul>
								</div>
							</li>
						</ul>

						<ul className="flex space-x-4">
							<li className="relative" onMouseEnter={() => handleMouseEnter("a propos")} onMouseLeave={handleMouseLeave}>
								<Link href="/nos-services" className="px-4 py-2 inline-block text-gray-700 hover:text-gray-900">
									A propos
								</Link>
								<div
									className={`absolute left-0 w-48 bg-white border mt-2 rounded transition-opacity duration-500 ${
										activeMenu === "a propos" ? "opacity-100" : "opacity-0 pointer-events-none"
									}`}>
									<ul>
										<li>
											<Link href="/creation-de-site-internet" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
												Qui suis je ?
											</Link>
										</li>
										<li>
											<Link href="/creation-dun-site-de-vente-en-ligne" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
												CV
											</Link>
										</li>
										<li>
											<Link href="/creation-dun-site-de-vente-en-ligne" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
												Portfolio
											</Link>
										</li>
									</ul>
								</div>
							</li>
						</ul>
						<Link href="/" className="px-4 py-2 inline-block text-gray-700 hover:text-gray-900">
							Portfolio
						</Link>
						<Link href="/" className="px-4 py-2 inline-block text-gray-700 hover:text-gray-900">
							Contact
						</Link>
					</div>{" "}
				</div>{" "}
			</div>
		</nav>
	);
}
