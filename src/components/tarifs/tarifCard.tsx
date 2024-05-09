import React from "react";
import { CardPriceInterface } from "@/interfaces/cardPriceInterfaces";

export default function TarifCard({ title, price, developement, avantage }: CardPriceInterface) {
	return (
		<div className='bg-black rounded w-96 mb-7'>
			<div className="text-center text-xl rounded-t text px-3 bg-slate-600">
				<strong>{title}</strong>
			</div>
			<div className="text-lg pt-2 px-3  bg-slate-700">
				<span>Prix : </span>
				{price} <span> €</span>{" "}
			</div>
			<div className="mt-4">
				
				<ul>
					{developement.map((item, index) => (
						<li key={index} className={`text-[17px] my-1 px-3 ${index % 2 === 0 ? 'bg-slate-800' : 'bg-black'}`}>
                        &#x2022; {item}
                    </li>
					))}
				</ul>
			</div>

			<div className="mt-4">
				<strong>Avantages :</strong>
				<ul>
					{avantage.map((item, index) => (
							<li key={index} className={`text-[17px] my-1 px-3 ${index % 2 === 0 ? 'bg-slate-800' : 'bg-black'}`}>
							&#x2022; {item}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
