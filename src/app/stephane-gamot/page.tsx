import React from "react";
import ProgressBar from "@/components/progressBar";
import Image from "next/image";

import Angular from "@/components/icons/angular";
import BootStrap from "@/components/icons/bootStrap";
import CssIcon from "@/components/icons/css3";
import Figma from "../../../public/icons/figma.svg";
import Html from "@/components/icons/html";
import Java from "@/components/icons/java";
import Jest from "@/components/icons/jest";
import Joomla from "../../../public/icons/joomla.svg";
import JavaScript from "@/components/icons/javaScript";
import MySql from "@/components/icons/mySql";
import NextIcon from "@/components/icons/next";
import ReactIc from "@/components/icons/react";
import RestApi from "@/components/icons/restApi";
import Seo from "../../../public/icons/seo.svg";
import Spring from "@/components/icons/spring";
import Tailwind from "@/components/icons/tailwind";
import TypeScript from "@/components/icons/typeScript";
import Wordpress from "@/components/icons/wordpress";
import GitHub from "@/components/icons/gitHub";

export default function Page() {
	return (
		<div>
			<h1>Qui suis je ?</h1>

			<div className="p-10">
				<h2>Mes compétences</h2>
      
				<div className="flex max-w-[350px] mx-auto my-4">
        <Html />
					<ProgressBar color="bg-red-500" percentage={100} />
				</div>

				<div className="flex max-w-[350px] mx-auto">
<CssIcon />
					<ProgressBar color="bg-red-500" percentage={100} />
				</div>

				<div className="flex max-w-[350px] mx-auto">
<ReactIc />
					<ProgressBar color="bg-red-500" percentage={100} />
				</div>

				<div className="flex max-w-[350px] mx-auto">
<NextIcon />
					<ProgressBar color="bg-red-500" percentage={100} />
				</div>


    




			</div>
		</div>
	);
}


/*




*/ 