"use client";
import { useRef } from "react";

export default function DownloadPdfButton() {
	const linkRef = useRef<HTMLAnchorElement>(null);

	const handleDownload = () => {
		if (linkRef.current) {
			linkRef.current.click();
		}
	};

	return (
		<>
			<a ref={linkRef} href="/img/cv/CV-Gamot-Stephane-en.pdf" download="CV-Gamot-Stephane-en.pdf" className="hidden">
				Télécharger
			</a>
			<button onClick={handleDownload} type="button" className="bg-iron-blue mt-4 rounded w-44 mx-auto p-2">
				Télécharger le PDF
			</button>
		</>
	);
}
