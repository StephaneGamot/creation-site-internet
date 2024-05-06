"use client";

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

import JUnit5 from "../../public/icons/JUnit5.webp";
import Figma from "../../public/icons/figma.svg";
import Java from "../../public/icons/java.svg";
import Joomla from "../../public/icons/joomla.svg";
import MySql from "../../public/icons/mysql.svg";
import RestApi from "../../public/icons/rest-api.svg";
import Seo from "../../public/icons/seo.svg";

export default function Skills() {
	return (
		<div>
			<div className="p-10 mx-auto">
				<h2>Mes compétences</h2>
				<div className="flex-col mt-8 gap-7 md:flex md:flex-row md:justify-around lg:justify-center lg:gap-9">
					<div>
						<h2>Front-End</h2>
						<div className="flex w-[350px] mx-auto my-4">
							<FaHtml5 className=" text-red-500 text-[40px]" />
							<ProgressBar percentage={100} />
						</div>
						<div className="flex w-[350px] mx-auto my-4">
							<FaCss3Alt className=" text-blue-500 text-[40px]" />
							<ProgressBar percentage={100} />
						</div>
						<div className="flex w-[350px] mx-auto my-4">
							<FaReact className=" text-cyan-500 text-[40px]" />
							<ProgressBar percentage={100} />
						</div>
						<div className="flex w-[350px] mx-auto my-4">
							<SiNextdotjs className=" text-white text-[40px]" />
							<ProgressBar percentage={100} />
						</div>
						<div className="flex w-[350px] mx-auto my-4">
							<SiJavascript className=" text-yellow-300 text-[40px]" />
							<ProgressBar percentage={90} />
						</div>
						<div className="flex w-[350px] mx-auto my-4">
							<FaBootstrap className=" text-purple-700 text-[40px]" />
							<ProgressBar percentage={90} />
						</div>
						<div className="flex w-[350px] mx-auto my-4">
							<SiTailwindcss className=" text-cyan-400 text-[40px]" />
							<ProgressBar percentage={90} />
						</div>
						<div className="flex w-[350px] mx-auto my-4">
							<FaAngular className=" text-red-500 rounded text-[40px]" />
							<ProgressBar percentage={60} />
						</div>
						<div className="flex w-[350px] mx-auto my-4">
							<SiTypescript className=" text-blue-800 bg-white rounded text-[40px]" />
							<ProgressBar percentage={60} />
						</div>
						<h2>Tests</h2>
						<div className="flex w-[350px] mx-auto my-4">
							<SiCypress className=" text-green-300 rounded text-[40px]" />
							<ProgressBar percentage={60} />
						</div>

						<div className="flex w-[350px] mx-auto my-4">
							<SiJest className=" text-red-800 rounded text-[40px]" />
							<ProgressBar percentage={60} />
						</div>

						<div className="flex w-[350px] mx-auto my-4">
							<Image src={JUnit5} alt="JUnit5" width={40} height={40} className="" />
							<ProgressBar percentage={60} />
						</div>
					</div>
					<div>
						<h2>Back-end</h2>
						<div className="flex w-[350px] mx-auto my-4">
							<Image src={Java} alt="Java" width={40} height={40} className=" rounded" />
							<ProgressBar percentage={60} />
						</div>

						<div className="flex w-[350px] mx-auto my-4">
							<SiSpring className=" text-green-500 text-[40px]" />
							<ProgressBar percentage={60} />
						</div>

						<div className="flex w-[350px] mx-auto my-4">
							<Image src={MySql} alt="MySQL" width={40} height={40} className="bg-white rounded" />
							<ProgressBar percentage={60} />
						</div>

						<div className="flex w-[350px] mx-auto my-4">
							<Image src={RestApi} alt="Api Rest" width={40} height={40} className="bg-white rounded" />
							<ProgressBar percentage={90} />
						</div>

						<h2>CMS</h2>
						<div className="flex w-[350px] mx-auto my-4">
							<FaWordpress className=" text-cyan-700 text-[40px]" />
							<ProgressBar percentage={90} />
						</div>

						<div className="flex w-[350px] mx-auto my-4">
							<Image src={Joomla} alt="Joomla" width={40} height={40} className=" rounded" />
							<ProgressBar percentage={80} />
						</div>

						<h2>Autres</h2>
						<div className="flex w-[350px] mx-auto my-4">
							<Image src={Seo} alt="Seo" width={40} height={40} className=" rounded" />
							<ProgressBar percentage={90} />
						</div>

						<div className="flex w-[350px] mx-auto my-4">
							<FaGithub className=" text-white text-[40px]" />
							<ProgressBar percentage={90} />
						</div>

						<div className="flex w-[350px] mx-auto my-4">
							<Image src={Figma} alt="Figma" width={40} height={40} className=" rounded" />
							<ProgressBar percentage={60} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
