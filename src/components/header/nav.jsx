"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import HomeIcon from "../../../public/icons/home.svg";
import Style from "./header.module.css";
import Languages from "./languages";

export default function Nav() {
	const [activeMenu, setActiveMenu] = useState(null);
	const hoverTimer = useRef(null);
	const [isLinkDisabled, setIsLinkDisabled] = useState(true);

	useEffect(() => {
		return () => {
			if (hoverTimer.current) {
				clearTimeout(hoverTimer.current);
			}
		};
	}, []);

	const handleClick = (e) => {
		if (isLinkDisabled) {
			e.preventDefault();
		}
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
		}, 700);
	};

	return (
		<nav className={Style.navbar}>
			<div className={Style.navContainer}>
				<div className={Style.responsiveContainer}>
					<div className={Style.flexItemCenter}>
						<Link href="/" className={Style.navItem}>
							<Image src={HomeIcon} alt="Home Icon" className={Style.iconHome} />
						</Link>
						<ul>
							<li className={Style.relative} onMouseEnter={() => handleMouseEnter("services")} onMouseLeave={handleMouseLeave}>
								<Link href="/web" className={Style.navItem} onClick={(e) => e.preventDefault()}>
									Services
								</Link>
								<div className={`${Style.dropdownMenu} ${activeMenu === "services" ? Style.show : ""}`}>
									<ul>
										<li>
											<Link href="/web" className={Style.dropdownItem}>
												Création de site internet
											</Link>
										</li>
										<li>
											<Link href="/seo-referencement-naturel" className={Style.dropdownItem}>
												SEO & Référencement naturel
											</Link>
										</li>
										<li>
											<Link href="/web#refonte" className={Style.dropdownItem}>
												Refonte de site web
											</Link>
										</li>
									</ul>
								</div>
							</li>
						</ul>

						<ul>
							<li className={Style.relative} onMouseEnter={() => handleMouseEnter("about")} onMouseLeave={handleMouseLeave}>
								<Link href="/stephane-gamot" className={Style.navItem} onClick={(e) => e.preventDefault()} >
									A propos
								</Link>
								<div className={`${Style.dropdownMenu} ${activeMenu === "about" ? Style.show : ""}`}>
									<ul>
										<li>
											<Link href="/stephane-gamot" className={Style.dropdownItem}>
												Qui suis-je ?
											</Link>
										</li>
										<li>
											<Link href="/stephane-gamot/cv" className={Style.dropdownItem}>
												CV
											</Link>
										</li>
										<li>
											<Link href="/#tarifs" className={Style.dropdownItem}>
												Tarifs
											</Link>
										</li>
									</ul>
								</div>
							</li>
						</ul>
						<Link href="/stephane-gamot/portfolio" className={`${Style.navItem} ${Style.portfolio}`}>
							Portfolio
						</Link>
						<Link href="/#contact" className={Style.navItem}>
							Contact
						</Link>
						<Languages />
					</div>
				</div>
			</div>
		</nav>
	);
}
