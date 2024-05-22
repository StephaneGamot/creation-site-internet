import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CardInterface } from "../interfaces/cardInterfaces";

export default function Card({ image, title, description, tags, href, alt }: CardInterface) {
	if (!href) {
		console.error("Href is undefined for title:", title);
	}
	return (
		<Link href={href || "#"}>
			<div className="max-w-sm rounded overflow-hidden shadow-lg m-8">
				<Image className="w-full" src={image} alt={title} width={400} height={400} sizes="(max-width: 400px) 100vw, 400px" />
				<div className="px-6 py-4">
					<div className="font-bold text-xl mb-2 text-black text-center">{title}</div>
					<p className="text-gray-700 text-base font-medium">{description}</p>
				</div>
				<div className="px-5 pt-4 pb-2">
					{tags.map((tag) => (
						<span key={tag} className="inline-block bg-gray-200 rounded-full px-1 py-1 text-sm font-bold text-gray-700 mr-2 mb-2">
							{tag}
						</span>
					))}
				</div>
			</div>
		</Link>
	);
}
