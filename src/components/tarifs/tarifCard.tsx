import React from "react";
import { CardPriceInterface } from "@/interfaces/cardPriceInterfaces";

export default function TarifCard({ title, price, developement, avantage }: CardPriceInterface) {
	return (
		<div className='bg-sky-200 rounded w-96 mb-7'>
			<div className="text-center  text-black text-xl rounded-t text px-3 bg-blue-400">
				<strong>{title}</strong>
			</div>
			<div className="text-lg pt-2 px-3  text-slate-900 bg-blue-300">
			<strong>	<span>Prix : </span>
				{price} <span> €</span>{" "}</strong>
			</div>
			<div className="mt-4">
				
				<ul>
					{developement.map((item, index) => (
						<li key={index} className={`text-[17px] text-black my-1 px-3 ${index % 2 === 0 ? 'bg-cyan-100' : 'bg-cyan-200'}`}>
                        &#x2022; {item}
                    </li>
					))}
				</ul>
			</div>

			<div className="mt-4 text-black">
				<strong>&ensp; Avantages :</strong>
				<ul>
					{avantage.map((item, index) => (
							<li key={index} className={`text-[17px] my-1 px-3 text-black ${index % 2 === 0 ? 'bg-cyan-100' : 'bg-cyan-200'}`}>
							&#x2022; {item}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
