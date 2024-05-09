import React from "react";
import TarifsData from "@/data/tarifData.json";
import TarifCard from "./tarifCard";

export default function TarifContainer() {
	return (
<section id="tarifs" className="bg-slate-200">

<h2 className="text-center text-black text-3xl py-5">Tarifs</h2>

<div className="container mx-auto px-4">
				<h3 className="text-center text-black text-3xl mb-4">Réalisé avec WordPress</h3>
				<div className="flex flex-wrap gap-5 justify-around mb-5">
					<TarifCard key={TarifsData[0].id} title={TarifsData[0].title} price={TarifsData[0].price} developement={TarifsData[0].developement} avantage={TarifsData[0].avantage} />
					<TarifCard key={TarifsData[1].id} title={TarifsData[1].title} price={TarifsData[1].price} developement={TarifsData[1].developement} avantage={TarifsData[1].avantage} />
					<TarifCard key={TarifsData[2].id} title={TarifsData[2].title} price={TarifsData[2].price} developement={TarifsData[2].developement} avantage={TarifsData[2].avantage} />
				</div>
				<div>
                <h3 className="text-center text-black text-3xl mb-4">Réalisé avec React - Next</h3>
                <div className="flex flex-wrap justify-around gap-5 mb-5">
						<TarifCard key={TarifsData[3].id} title={TarifsData[3].title} price={TarifsData[3].price} developement={TarifsData[3].developement} avantage={TarifsData[3].avantage} />
						<TarifCard key={TarifsData[4].id} title={TarifsData[4].title} price={TarifsData[4].price} developement={TarifsData[4].developement} avantage={TarifsData[4].avantage} />
						<TarifCard key={TarifsData[5].id} title={TarifsData[5].title} price={TarifsData[5].price} developement={TarifsData[5].developement} avantage={TarifsData[5].avantage} />
					</div>
				</div>
				<div className="pb-8" >
				<h3 className="text-center text-black text-3xl mb-4">DÉVELOPPEMENTS SPÉCIFIQUES</h3>
				<p className="text-center text-black text-3xl mb-4">Taux journalier moyen</p>
				<div className="text-center text-black text-3xl"><span>400 € </span> / Jour</div>
				</div>
			</div>
		</section>
	);
}
