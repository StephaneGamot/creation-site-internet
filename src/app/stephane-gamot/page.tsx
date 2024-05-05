import React from "react";
import ProgressBar from "@/components/progressBar";
import Image from "next/image";

import { FaAngular } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiJest } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiSpring } from "react-icons/si";
import { SiCypress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import JUnit5 from "../../../public/icons/JUnit5.webp";
import Figma from "../../../public/icons/figma.svg";
import Java from "../../../public/icons/java.svg";
import Joomla from "../../../public/icons/joomla.svg";
import MySql from "../../../public/icons/mysql.svg";
import RestApi from "../../../public/icons/rest-api.svg";
import Seo from "../../../public/icons/seo.svg";

export default function Page() {
	return (
		<div>
			<h1>Qui suis je ?</h1>

			<div className="p-10">
				<h2>Mes compétences</h2>
				<div className="flex-col max-w-[750px] mx-auto gap-7 sm:flex sm:flex-row ">
					<div>
						<div className="flex  w-[350px] mx-auto my-4">
							<FaHtml5 className=" text-red-500 text-[40px]" />
							<ProgressBar color="bg-red-500" percentage={100} />
						</div>

						<div className="flex max-w-[350px] mx-auto my-4">
							<FaCss3Alt className=" text-blue-500 text-[40px]" />
							<ProgressBar color="bg-blue-500" percentage={100} />
						</div>

						<div className="flex max-w-[350px] mx-auto my-4">
							<FaReact className=" text-cyan-500 text-[40px]" />
							<ProgressBar color="bg-cyan-500" percentage={100} />
						</div>

						<div className="flex max-w-[350px] mx-auto my-4">
							<SiNextdotjs className=" text-white text-[40px]" />
							<ProgressBar color="bg-white" percentage={100} />
						</div>

						<div className="flex max-w-[350px] mx-auto my-4">
							<SiJavascript className=" text-yellow-300 text-[40px]" />
							<ProgressBar color="bg-yellow-300" percentage={90} />
						</div>

						<div className="flex max-w-[350px] mx-auto my-4">
							<Image src={RestApi} alt="" width={40} height={40} className="bg-white rounded" />
							<ProgressBar color="bg-white" percentage={90} />
						</div>

						<div className="flex max-w-[350px] mx-auto my-4">
							<Image src={Seo} alt="" width={40} height={40} className=" rounded" />
							<ProgressBar color="bg-blue-500" percentage={90} />
						</div>

						<div className="flex max-w-[350px] mx-auto my-4">
							<FaGithub className=" text-white text-[40px]" />
							<ProgressBar color="bg-white" percentage={90} />
						</div>

						<div className="flex max-w-[350px] mx-auto my-4">
							<FaBootstrap className=" text-purple-700 text-[40px]" />
							<ProgressBar color="bg-purple-700" percentage={90} />
						</div>

						<div className="flex max-w-[350px] mx-auto my-4">
							<SiTailwindcss className=" text-cyan-400 text-[40px]" />
							<ProgressBar color="bg-cyan-400" percentage={90} />
						</div>

						<div className="flex max-w-[350px] mx-auto my-4">
							<FaWordpress className=" text-cyan-700 text-[40px]" />
							<ProgressBar color="bg-cyan-700" percentage={90} />
						</div>
					</div>
					<div>
						<div className="flex max-w-[350px] mx-auto my-4">
							<Image src={Joomla} alt="" width={40} height={40} className=" rounded" />
							<ProgressBar color="bg-green-700" percentage={80} />
						</div>

						<div className="flex max-w-[350px] mx-auto my-4">
							<Image src={Java} alt="" width={40} height={40} className=" rounded" />
							<ProgressBar color="bg-red-700" percentage={60} />
						</div>

						<div className="flex max-w-[350px] mx-auto my-4">
							<SiSpring className=" text-green-500 text-[40px]" />
							<ProgressBar color="bg-green-500" percentage={60} />
						</div>

						<div className="flex max-w-[350px] mx-auto my-4">
							<FaAngular className=" text-red-500 rounded text-[40px]" />
							<ProgressBar color="bg-red-500" percentage={60} />
						</div>

						<div className="flex max-w-[350px] mx-auto my-4">
							<SiTypescript className=" text-blue-800 bg-white rounded text-[40px]" />
							<ProgressBar color="bg-blue-800" percentage={60} />
						</div>

						<div className="flex max-w-[350px] mx-auto my-4">
							<Image src={MySql} alt="" width={40} height={40} className="bg-white rounded" />
							<ProgressBar color="bg-cyan-600" percentage={60} />
						</div>

						<div className="flex max-w-[350px] mx-auto my-4">
							<Image src={Figma} alt="" width={40} height={40} className=" rounded" />
							<ProgressBar color="bg-orange-500" percentage={60} />
						</div>

						<div className="flex max-w-[350px] mx-auto my-4">
							<SiCypress className=" text-green-300 rounded text-[40px]" />
							<ProgressBar color="bg-green-300" percentage={60} />
						</div>

						<div className="flex max-w-[350px] mx-auto my-4">
							<SiJest className=" text-red-800 rounded text-[40px]" />
							<ProgressBar color="bg-red-800" percentage={60} />
						</div>

						<div className="flex max-w-[350px] mx-auto my-4">
							<Image src={JUnit5} alt="" width={40} height={40} className="" />
							<ProgressBar color="bg-red-400" percentage={60} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

/*




*/
