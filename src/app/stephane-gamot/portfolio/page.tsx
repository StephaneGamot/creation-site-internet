import Image from "next/image";
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
import PortFolio17 from "../../../../public/img/portfolio/portfolio17a.webp";
import PortFolio18 from "../../../../public/img/portfolio/portfolio18a.webp";
import PortFolio19 from "../../../../public/img/portfolio/portfolio19a.webp";
import PortFolio20 from "../../../../public/img/portfolio/portfolio20a.webp";

import Angular from "@/components/icons/angular";
import BootStrap from "@/components/icons/bootStrap";
import Css from "@/components/icons/css3";
import GitHub from "@/components/icons/gitHub";
import Html from "@/components/icons/html";
import Java from "@/components/icons/java";
import Jest from "@/components/icons/jest";
import JavaScript from "@/components/icons/javaScript";
import MySql from "@/components/icons/mySql";
import Next from "@/components/icons/nextIcon";
import ReactIcon from "@/components/icons/react";
import RestApi from "@/components/icons/restApi";
import Spring from "@/components/icons/spring";
import Tailwind from "@/components/icons/tailwind";
import TypeScript from "@/components/icons/typeScript";
import WordPress from "@/components/icons/wordpress";
import Junit5 from "@/components/icons/junit5";
import Web from "@/components/icons/web";

export default function Portfolio() {
	return (
		<section>
			<h1>Portfolio Stéphane Gamot</h1>

			<div className=" lg:flex sm:justify-around">
				<div className="flex flex-col justify-center max-w-[536px] m-auto lg:m-7">
					<p className="text-center">
						<strong>SKIF Belgique</strong>
					</p>
					<div>
						<p className="absolute ml-1">Site internet</p>
						<Image src={PortFolio1} alt="Site internet de Skif Belgique" width={536} height={300} title="Skif Belgique" placeholder="blur" blurDataURL="data:..." className="m-auto" />
						<div className="flex justify-between gap-1 mt-2">
							<div className="flex gap-1">
								<span className="hidden lg:flex text-left m-1 leading-10">Créé avec:</span>
								<ReactIcon />
								<Html />
								<Css />
								<BootStrap />
							</div>
							<div>
								<GitHub href="https://github.com/White-Wolf-Web/SKIF-Belgium" />
							</div>
						</div>
					</div>
				</div>

				<div className="flex flex-col justify-center max-w-[536px] m-auto lg:m-7">
					<p className="text-center">
						<strong>La voie du bien-être</strong>
					</p>
					<div>
						<p className="absolute ml-1">Site internet</p>
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
						<div className="flex justify-between gap-1 mt-2">
							<div className="flex gap-1">
								<span className="hidden lg:flex text-left m-1 leading-10">Créé avec:</span>
								<ReactIcon />
								<Next />
								<TypeScript />
								<Html />
								<Css />
								<Tailwind />
							</div>
							<div>
								<Web href="https://lavoiedubienetre.be/" />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className=" lg:flex sm:justify-around">
				<div className="flex flex-col justify-center max-w-[536px] m-auto lg:m-7">
					<p className="text-center">
						<strong>Kanap</strong>
					</p>
					<div>
						<p className="absolute ml-1">E-commerce</p>
						<Image src={PortFolio6} alt="Site E-commerce de canapés" width={579} height={300} title="Site web de Kanap" placeholder="blur" blurDataURL="data:..." />
						<div className="flex justify-between gap-1 mt-2">
							<div className="flex gap-1">
								<span className="hidden lg:flex text-left m-1 leading-10">Créé avec:</span>
								<Html />
								<Css />
								<JavaScript />
							</div>
							<div>
								<GitHub href="https://github.com/White-Wolf-Web/KANAP" />
							</div>
						</div>
					</div>
				</div>

				<div className="flex flex-col justify-center max-w-[536px] m-auto lg:m-7">
					<p className="text-center">
						<strong>Game On</strong>
					</p>
					<div>
						<p className="absolute ml-1">Landing page</p>
						<Image src={PortFolio4} alt="La landing page de Game On" width={579} height={300} title="Game On" placeholder="blur" blurDataURL="data:..." />
						<div className="flex justify-between gap-1 mt-2">
							<div className="flex gap-1">
								<span className="hidden lg:flex text-left m-1 leading-10">Créé avec:</span>
								<Html />
								<Css />
								<JavaScript />
							</div>
							<div>
								<GitHub href="https://github.com/White-Wolf-Web/GAME-ON" />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className=" lg:flex sm:justify-around">
				<div className="flex flex-col justify-center max-w-[536px] m-auto lg:m-7">
					<p className="text-center">
						<strong>White wolf web</strong>
					</p>
					<div>
						<p className="absolute ml-1">Site internet</p>
						<Image
							src={PortFolio3}
							alt="Site d'une agence web situé en Belgique"
							width={536}
							height={300}
							title="White wolf web"
							placeholder="blur"
							blurDataURL="data:..."
							className="m-auto"
						/>
						<div className="flex justify-between gap-1 mt-2">
							<div className="flex gap-1">
								<span className="hidden lg:flex text-left m-1 leading-10">Créé avec:</span>
								<ReactIcon />
								<Next />
								<Html />
								<Css />
							</div>
						</div>
					</div>
				</div>

				<div className="flex flex-col justify-center max-w-[536px] m-auto lg:m-7">
					<p className="text-center">
						<strong>Oh my food</strong>
					</p>
					<div>
						<p className="absolute ml-1">Site internet</p>
						<Image src={PortFolio5} alt="Carte d'un restaurant" width={536} height={300} title="Commandez votre repas" placeholder="blur" blurDataURL="data:..." className="m-auto" />
						<div className="flex justify-between gap-1 mt-2">
							<div className="flex gap-1">
								<span className="hidden lg:flex text-left m-1 leading-10">Créé avec:</span>
								<Html />
								<Css />
							</div>
							<div>
								<GitHub href="https://github.com/White-Wolf-Web/OHMYFOOD" />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className=" lg:flex sm:justify-around">
				<div className="flex flex-col justify-center max-w-[536px] m-auto lg:m-7">
					<p className="text-center">
						<strong>Météo</strong>
					</p>
					<div>
						<p className="absolute ml-1">Application web</p>

						<Image src={PortFolio17} alt="Petite application météo" width={536} height={300} title="Appli météo" placeholder="blur" blurDataURL="data:..." className="m-auto" />

						<div className="flex justify-between gap-1 mt-2">
							<div className="flex gap-1">
								<span className="hidden lg:flex text-left m-1 leading-10">Créé avec:</span>
								<ReactIcon />
								<Next />
								<Html />
								<Css />
							</div>
							<div>
								<GitHub href="https://github.com/White-Wolf-Web/Meteo" />
							</div>
						</div>
					</div>
				</div>

				<div className="flex flex-col justify-center max-w-[536px] m-auto lg:m-7">
					<p className="text-center">
						<strong>Carrousel automatique</strong>
					</p>
					<div>
						<p className="absolute ml-1">Application web</p>
						<Image src={PortFolio18} alt="Application d'un carrousel automatisé" width={536} height={300} title="carrousel" placeholder="blur" blurDataURL="data:..." className="m-auto" />
						<div className="flex justify-between gap-1 mt-2">
							<div className="flex gap-1">
								<span className="hidden lg:flex text-left m-1 leading-10">Créé avec:</span>
								<ReactIcon />
								<Next />
								<Html />
								<Css />
							</div>
							<div>
								<GitHub href="" />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className=" lg:flex sm:justify-around">
				<div className="flex flex-col justify-center max-w-[536px] m-auto lg:m-7">
					<p className="text-center">
						<strong>Massage à domicile</strong>
					</p>
					<div>
						<p className="absolute ml-1">Site internet</p>
						<Image src={PortFolio8} alt="Site web de massage à domicile" width={579} height={300} title="Massage à domicile" placeholder="blur" blurDataURL="data:..." />
						<div className="flex justify-between gap-1 mt-2">
							<div className="flex gap-1">
								<span className="hidden lg:flex text-left m-1 leading-10">Créé avec:</span>
								<ReactIcon />
								<Next />
								<TypeScript />
								<Html />
								<Css />
								<Tailwind />
							</div>
						</div>
					</div>
				</div>

				<div className="flex flex-col justify-center max-w-[536px] m-auto lg:m-7">
					<p className="text-center">
						<strong>Amour essenciel</strong>
					</p>
					<div>
						<p className="absolute ml-1">Site internet</p>
						<Image src={PortFolio9} alt="Representation graphique d'Amour Essenciel" width={579} height={300} title="Amour EssenCiel" placeholder="blur" blurDataURL="data:..." />
						<div className="flex justify-between gap-1 mt-2">
							<div className="flex gap-1">
								<span className="hidden lg:flex text-left m-1 leading-10">Créé avec:</span>
								<WordPress />
							</div>
							<div>
								<Web href="https://amour-essenciel.com/" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className=" lg:flex sm:justify-around">
				<div className="flex flex-col justify-center max-w-[536px] m-auto lg:m-7">
					<p className="text-center">
						<strong>Kasa</strong>
					</p>
					<div>
						<p className="absolute ml-1">E-commerce</p>
						<Image src={PortFolio10} alt="Site de vente immobilière" width={579} height={300} title="Kaza" placeholder="blur" blurDataURL="data:..." />
						<div className="flex justify-between gap-1 mt-2">
							<div className="flex gap-1">
								<span className="hidden lg:flex text-left m-1 leading-10">Créé avec:</span>
								<ReactIcon />
								<Html />
								<Css />
							</div>
							<div>
								<GitHub href="https://github.com/White-Wolf-Web/new-kaza" />
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col justify-center max-w-[536px] m-auto lg:m-7">
					<p className="text-center">
						<strong>Fish eye</strong>
					</p>
					<div>
						<p className="absolute ml-1">Site internet</p>
						<Image src={PortFolio11} alt="page internet pour présenter des photographes" width={579} height={300} title="Fish Eyes" placeholder="blur" blurDataURL="data:..." />
						<div className="flex justify-between gap-1 mt-2">
							<div className="flex gap-1">
								<span className="hidden lg:flex text-left m-1 leading-10">Créé avec:</span>
								<ReactIcon />
								<Html />
								<Css />
							</div>
							<div>
								<GitHub href="https://github.com/White-Wolf-Web/FISH-EYE" />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className=" lg:flex sm:justify-around">
				<div className="flex flex-col justify-center max-w-[536px] m-auto lg:m-7">
					<p className="text-center">
						<strong>Sport see</strong>
					</p>
					<div>
						<p className="absolute ml-1">Application web</p>
						<Image src={PortFolio12} alt="Application sportive" width={579} height={300} title="SportSee" placeholder="blur" blurDataURL="data:..." />
						<div className="flex justify-between gap-1 mt-2">
							<div className="flex gap-1">
								<span className="hidden lg:flex text-left m-1 leading-10">Créé avec:</span>
								<ReactIcon />
								<Next />
								<Html />
								<Css />
							</div>
							<div>
								<GitHub href="https://github.com/White-Wolf-Web/SPORTSEE" />
							</div>
						</div>
					</div>
				</div>

				<div className="flex flex-col justify-center max-w-[536px] m-auto lg:m-7">
					<p className="text-center">
						<strong>Télésport</strong>
					</p>
					<div>
						<p className="absolute ml-1">Application web</p>
						<Image src={PortFolio13} alt="Appli sportive lié aux jeux olympique 2024" width={579} height={300} title="TéléSport" placeholder="blur" blurDataURL="data:..." />
						<div className="flex justify-between gap-1 mt-2">
							<div className="flex gap-1">
								<span className="hidden lg:flex text-left m-1 leading-10">Créé avec:</span>
								<Angular />
								<TypeScript />
								<Html />
								<Css />
							</div>
							<div>
								<GitHub href="https://github.com/White-Wolf-Web/TeleSport" />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className=" lg:flex sm:justify-around">
				<div className="flex flex-col justify-center max-w-[536px] m-auto lg:m-7">
					<p className="text-center">
						<strong>Chat top</strong>
					</p>
					<div>
						<p className="absolute ml-1">Développement back-end</p>
						<Image src={PortFolio14} alt="Back-end d'un site internet de location immobiliere" width={579} height={300} title="Chatop" placeholder="blur" blurDataURL="data:..." />
						<div className="flex justify-between gap-1 mt-2">
							<div className="flex gap-1">
								<span className="hidden lg:flex text-left m-1 leading-10">Créé avec:</span>
								<Java />
								<Spring />
								<MySql />
								<Jest />
								<RestApi />
							</div>
							<div>
								<GitHub href="https://github.com/White-Wolf-Web/chatop-backend" />
							</div>
						</div>
					</div>
				</div>

				<div className="flex flex-col justify-center max-w-[536px] m-auto lg:m-7">
					<p className="text-center">
						<strong>Yoga App</strong>
					</p>
					<div>
						<p className="absolute ml-1">Développement back-end</p>
						<Image
							src={PortFolio15}
							alt="Back-end d'une application de réservation pour des cours de yoga"
							width={579}
							height={300}
							title="Yoga app"
							placeholder="blur"
							blurDataURL="data:..."
						/>
						<div className="flex justify-between gap-1 mt-2">
							<div className="flex gap-1">
								<span className="hidden lg:flex text-left m-1 leading-10">Créé avec:</span>
								<Java />
								<Spring />
								<MySql />
								<Jest />
								<RestApi />
							</div>
							<div>
								<GitHub href="https://github.com/White-Wolf-Web/Yoga-App" />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className=" lg:flex sm:justify-around">
				<div className="flex flex-col justify-center max-w-[536px] m-auto lg:m-7">
					<p className="text-center">
						<strong>Cours de Tarot</strong>
					</p>
					<div>
						<p className="absolute ml-1">Site internet</p>
						<Image src={PortFolio16} alt="Site web donnant des cours de tarot de Marseille" width={579} height={300} title="Tarots" placeholder="blur" blurDataURL="data:..." />
						<div className="flex justify-between gap-1 mt-2">
							<div className="flex gap-1">
								<span className="hidden lg:flex text-left m-1 leading-10">Créé avec:</span>
								<WordPress />
							</div>
						</div>
					</div>
				</div>

				<div className="flex flex-col justify-center max-w-[536px] m-auto lg:m-7">
					<p className="text-center">
						<strong>Petits plats</strong>
					</p>
					<div>
						<p className="absolute ml-1">Site internet</p>
						<Image src={PortFolio7} alt="Site de recettes culinaire" width={579} height={300} title="Petits Plats" placeholder="blur" blurDataURL="data:..." />
						<div className="flex justify-between gap-1 mt-2">
							<div className="flex gap-1">
								<span className="hidden lg:flex text-left m-1 leading-10">Créé avec:</span>
								<Html />
								<Css />
								<JavaScript />
							</div>
							<div>
								<GitHub href="https://github.com/White-Wolf-Web/Les_Petits_Plats" />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className=" lg:flex sm:justify-around">
				<div className="flex flex-col justify-center max-w-[536px] m-auto lg:m-7">
					<p className="text-center">
						<strong>To do list</strong>
					</p>
					<div>
						<p className="absolute ml-1">Application web</p>

						<Image
							src={PortFolio19}
							alt="Une petite application qui permet de creer sa Todo List"
							width={536}
							height={300}
							title="To do list"
							placeholder="blur"
							blurDataURL="data:..."
							className="m-auto"
						/>

						<div className="flex justify-between gap-1 mt-2">
							<div className="flex gap-1">
								<span className="hidden lg:flex text-left m-1 leading-10">Créé avec:</span>
								<ReactIcon />

								<Html />
								<Css />
								<BootStrap />
							</div>
							<div>
								<GitHub href="https://github.com/White-Wolf-Web/toDoList" />
							</div>
						</div>
					</div>
				</div>

				<div className="flex flex-col justify-center max-w-[536px] m-auto lg:m-7">
					<p className="text-center">
						<strong>Orion MDD</strong> (en cours)
					</p>
					<div>
						<p className="absolute ml-1">Full Application web</p>
						<Image
							src={PortFolio20}
							alt="Back-end et Front-end d'un site de chat en ligne"
							width={536}
							height={300}
							title="Orion"
							placeholder="blur"
							blurDataURL="data:..."
							className="m-auto"
						/>
						<div className="flex justify-between gap-1 mt-2">
							<div className="flex gap-1">
								<span className="hidden lg:flex text-left m-1 leading-10"></span>
								<Angular />
								<TypeScript />
								<Html />
								<Css />
								<Java />
								<Spring />
								<Junit5 />
								<Jest />
								<MySql />
								<RestApi />
							</div>
							<div>
								<GitHub href="https://github.com/White-Wolf-Web/Orion-MDD" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
