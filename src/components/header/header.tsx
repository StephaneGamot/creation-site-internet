import React from "react";
import Nav from "./nav";
import Style from "./header.module.css";

export default function Header() {
	return (
		<div className={Style.customBackground}>
			<Nav />

			<div className={Style.mainTitle}>
			</div>
		</div>
	);
}
