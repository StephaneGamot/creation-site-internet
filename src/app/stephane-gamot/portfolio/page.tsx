import Image from "next/image";
import Link from "next/link";
import PortFolio1 from "../../../../public/img/portfolio/portfolio1a.webp";
import PortFolio2 from "../../../../public/img/portfolio/portfolio2a.webp";
import PortFolio3 from "../../../../public/img/portfolio/portfolio3a.webp";
import PortFolio4 from "../../../../public/img/portfolio/portfolio4a.webp";
import PortFolio5 from "../../../../public/img/portfolio/portfolio5a.webp";
import PortFolio6 from "../../../../public/img/portfolio/portfolio6a.webp";
import PortFolio7 from "../../../../public/img/portfolio/portfolio7a.webp";
import PortFolio8 from "../../../../public/img/portfolio/portfolio8a.webp";
import PortFolio9 from "../../../../public/img/portfolio/portfolio9a.webp";
import PortFolio10 from "../../../../public/img/portfolio/portfolio10a.webp";
import PortFolio11 from "../../../../public/img/portfolio/portfolio11a.webp";
import PortFolio12 from "../../../../public/img/portfolio/portfolio12a.webp";
import PortFolio13 from "../../../../public/img/portfolio/portfolio13a.webp";
import PortFolio14 from "../../../../public/img/portfolio/portfolio14a.webp";
import PortFolio15 from "../../../../public/img/portfolio/portfolio15a.webp";
import PortFolio16 from "../../../../public/img/portfolio/portfolio16a.webp";

import Angular from "@/components/icons/angular";
import BootStrap from "@/components/icons/bootStrap";
import Css from "@/components/icons/css3";
import GitHub from "@/components/icons/gitHub";
import Html from "@/components/icons/html";
import Java from "@/components/icons/java";
import Jest from "@/components/icons/jest";
import JavaScript from "@/components/icons/javaScript";
import MySql from "@/components/icons/mySql";
import Next from "@/components/icons/next";
import ReactIcon from "@/components/icons/react";
import RestApi from "@/components/icons/restApi";
import Spring from "@/components/icons/spring";
import Tailwind from "@/components/icons/tailwind";
import TypeScript from "@/components/icons/typeScript";
import WordPress from "@/components/icons/wordpress";

export default function Portfolio() {
	return (
		<section>
			<h1>Portfolio Stéphane Gamot</h1>

			<div className=" sm:flex sm:justify-around">
				<div className="flex flex-col justify-center m-7">
					<div className="text-center">
						<p>
							<strong>SKIF Belgique</strong>
						</p>
						<p>Site internet</p>
					</div>

					<Image src={PortFolio1} alt="Site internet de Skif Belgique" width={536} height={300} title="Skif Belgique" placeholder="blur" blurDataURL="data:..." className="m-auto" />

					<div className="flex justify-start gap-1">
						<span className="text-left m-1 leading-10">Créé avec:</span>
						<ReactIcon />

						<Html />
						<Css />
						<BootStrap />
						<GitHub href="" />
					</div>
				</div>

				<div className="flex flex-col justify-center m-7">
					<Image
						src={PortFolio2}
						alt="Site internet d'un salon de massage"
						width={536}
						height={300}
						title="La voie du bien-être"
						placeholder="blur"
						blurDataURL="data:..."
						className="m-auto"
					/>
					<div className="flex justify-start gap-1">
						<span className="text-left m-1 leading-10">Créé avec:</span>
						<ReactIcon />
						<Next />
						<TypeScript />
						<Html />
						<Css />
						<Tailwind />
						<GitHub href="" />
					</div>
				</div>
			</div>

			<div className=" sm:flex sm:justify-around">
				<div className="flex flex-col justify-center m-7">
					<Image src={PortFolio6} alt="" width={579} height={300} title="Skif Belgique" placeholder="blur" blurDataURL="data:..." />
					<div className="flex justify-start gap-1">
						<span className="text-left m-1 leading-10">Créé avec:</span>
						<Html />
						<Css />

						<JavaScript />
						<JavaScript />
						<GitHub href="" />
					</div>
				</div>

				<div className="flex flex-col justify-center m-7">
					<Image src={PortFolio4} alt="" width={579} height={300} title="" placeholder="blur" blurDataURL="data:..." />
					<div className="flex justify-start gap-1">
						<span className="text-left m-1 leading-10">Créé avec:</span>
						<Html />
						<Css />
						<JavaScript />
						<GitHub href="" />
					</div>
				</div>
			</div>

			<div className=" sm:flex sm:justify-around">
				<div className="flex flex-col justify-center m-7">
					<Image src={PortFolio3} alt="" width={536} height={300} title="Skif Belgique" placeholder="blur" blurDataURL="data:..." className="m-auto" />
					<div className="flex justify-start gap-1">
						<span className="text-left m-1 leading-10">Créé avec:</span>
						<ReactIcon />
						<Next />
						<Html />
						<Css />
						<GitHub href="" />
					</div>
				</div>

				<div className="flex flex-col justify-center m-7">
					<Image src={PortFolio5} alt="" width={536} height={300} title="" placeholder="blur" blurDataURL="data:..." className="m-auto" />
					<div className="flex justify-start gap-1">
						<span className="text-left m-1 leading-10">Créé avec:</span>
						<Html />
						<Css />
						<GitHub href="" />
					</div>
				</div>
			</div>

			<div className=" sm:flex sm:justify-around">
				<div className="flex flex-col justify-center m-7">
					<Image src={PortFolio8} alt="" width={579} height={300} title="Skif Belgique" placeholder="blur" blurDataURL="data:..." />
					<div className="flex justify-start gap-1">
						<span className="text-left m-1 leading-10">Créé avec:</span>
						<ReactIcon />
						<Next />
						<TypeScript />
						<Html />
						<Css />
						<Tailwind />
						<GitHub href="" />
					</div>
				</div>

				<div className="flex flex-col justify-center m-7">
					<Image src={PortFolio9} alt="" width={579} height={300} title="" placeholder="blur" blurDataURL="data:..." />
					<div className="flex justify-start gap-1">
						<span className="text-left m-1 leading-10">Créé avec:</span>
						<WordPress />
					</div>
				</div>
			</div>

			<div className=" sm:flex sm:justify-around">
				<div className="flex flex-col justify-center m-7">
					<Image src={PortFolio10} alt="" width={579} height={300} title="Skif Belgique" placeholder="blur" blurDataURL="data:..." />
					<div className="flex justify-start gap-1">
						<span className="text-left m-1 leading-10">Créé avec:</span>
						<ReactIcon />
						<Html />
						<Css />

						<GitHub href="" />
					</div>
				</div>

				<div className="flex flex-col justify-center m-7">
					<Image src={PortFolio11} alt="" width={579} height={300} title="" placeholder="blur" blurDataURL="data:..." />
					<div className="flex justify-start gap-1">
						<span className="text-left m-1 leading-10">Créé avec:</span>
						<ReactIcon />
						<Html />
						<Css />

						<GitHub href="" />
					</div>
				</div>
			</div>

			<div className=" sm:flex sm:justify-around">
				<div className="flex flex-col justify-center m-7">
					<Image src={PortFolio12} alt="" width={579} height={300} title="Skif Belgique" placeholder="blur" blurDataURL="data:..." />
					<div className="flex justify-start gap-1">
						<span className="text-left m-1 leading-10">Créé avec:</span>
						<ReactIcon />
						<Next />
						<Html />
						<Css />
						<GitHub href="" />
					</div>
				</div>

				<div className="flex flex-col justify-center m-7">
					<Image src={PortFolio13} alt="" width={579} height={300} title="" placeholder="blur" blurDataURL="data:..." />
					<div className="flex justify-start gap-1">
						<span className="text-left m-1 leading-10">Créé avec:</span>
						<Angular />
						<TypeScript />
						<Html />
						<Css />

						<GitHub href="" />
					</div>
				</div>
			</div>

			<div className=" sm:flex sm:justify-around">
				<div className="flex flex-col justify-center m-7">
					<Image src={PortFolio14} alt="" width={579} height={300} title="Skif Belgique" placeholder="blur" blurDataURL="data:..." />
					<div className="flex justify-start gap-1">
						<span className="text-left m-1 leading-10">Créé avec:</span>
						<Java />
						<Spring />
						<MySql />
						<Jest />
						<RestApi />
						<GitHub href="" />
					</div>
				</div>

				<div className="flex flex-col justify-center m-7">
					<Image src={PortFolio15} alt="" width={579} height={300} title="" placeholder="blur" blurDataURL="data:..." />
					<div className="flex justify-start gap-1">
						<span className="text-left m-1 leading-10">Créé avec:</span>
						<Java />
						<Spring />
						<MySql />
						<Jest />
						<RestApi />
						<GitHub href="" />
					</div>
				</div>
			</div>

			<div className=" sm:flex sm:justify-around">
				<div className="flex flex-col justify-center m-7">
					<Image src={PortFolio16} alt="" width={579} height={300} title="Skif Belgique" placeholder="blur" blurDataURL="data:..." />
					<div className="flex justify-start gap-1">
						<span className="text-left m-1 leading-10">Créé avec:</span>
						<WordPress />
					</div>
				</div>

				<div className="flex flex-col justify-center m-7">
					<Image src={PortFolio7} alt="" width={579} height={300} title="" placeholder="blur" blurDataURL="data:..." />
					<div className="flex justify-start gap-1">
						<span className="text-left m-1 leading-10">Créé avec:</span>
						<Html />
						<Css />
						<JavaScript />
						<GitHub href="" />
					</div>
				</div>
			</div>
		</section>
	);
}
