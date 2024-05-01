import React from "react";
import Image from "next/image";
import { CardInterface } from "../interfaces/cardInterfaces";

export default function Card({ image, title, description, tags }: CardInterface) {
	return (
		<div className="max-w-sm rounded overflow-hidden shadow-lg m-8">
			<Image className="w-full" src={image} alt={title} width={400} height={400} layout="responsive" />
			<div className="px-6 py-4">
				<div className="font-bold text-xl mb-2">{title}</div>
				<p className="text-gray-700 text-base">{description}</p>
			</div>
			<div className="px-6 pt-4 pb-2">
				{tags.map((tag) => (
					<span key={tag} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
						#{tag}
					</span>
				))}
			</div>
		</div>
	);
}
