import Angular from "../../public/icons/angular.svg";
import Bootstrap from "../../public/icons/bootstrap.svg";
import Css from "../../public/icons/css.svg";
import Figma from "../../public/icons/figma.svg";
import Html from "../../public/icons/html.svg";
import Java from "../../public/icons/java.svg";
import Jest from "../../public/icons/jest.svg";
import Joomla from "../../public/icons/joomla.svg";
import JavaScript from "../../public/icons/js.svg";
import MySql from "../../public/icons/mysql.svg";
import Next from "../../public/icons/next.svg";
import ReactIcon from "../../public/icons/react.svg";
import RestApi from "../../public/icons/rest-api.svg";
import Seo from "../../public/icons/seo.svg";
import Spring from "../../public/icons/spring.svg";
import Tailwind from "../../public/icons/tailwindcss.svg";
import TypeScript from "../../public/icons/typescript.svg";
import WordPress from "../../public/icons/wordpress.svg";
import GitHub from "../../public/icons/github.svg";
import Image from "next/image";

export default function TechnologyIUse() {
	return (
		<section className="flex flex-col bg-slate-200  py-5 px2 ">
			<h2 className="text-black mb-4">Les technologies utilisées</h2>
			<div className=' mx-auto flex flex-row flex-wrap justify-center gap-3'>
		
							<Image src={Html} alt="Icon Html" width={50} height={50} title="HTML" placeholder="blur" blurDataURL="data:..." />
	
							<Image src={Css} alt="CSS" width={50} height={50} title="Css3" placeholder="blur" blurDataURL="data:..." />
							<Image src={Tailwind} alt="Tailwind 2 vagues bleues clair" width={50} height={50} title="Css Tailwind" placeholder="blur" blurDataURL="data:..." />
							<Image src={Bootstrap} alt="Bootstrap icon violet" width={50} height={50} title="BS" placeholder="blur" blurDataURL="data:..." />

					
								<Image src={JavaScript} alt="JavaScript" width={50} height={50} title="JS" placeholder="blur" blurDataURL="data:..." />
								<Image src={ReactIcon} alt="React icon " width={50} height={50} title="React" placeholder="blur" blurDataURL="data:..." />
								<Image src={Next} alt="Next" width={50} height={50} title="Next.js" placeholder="blur" blurDataURL="data:..." />
								<Image src={Angular} alt="Angular" width={50} height={50} title="Ang" placeholder="blur" blurDataURL="data:..." />
								<Image src={TypeScript} alt="TypeScript ou TS en Bleu" width={50} height={50} title="TypeScript" placeholder="blur" blurDataURL="data:..." />
						
						<Image src={WordPress} alt="Le grand W de WordPress en Bleu clair" width={50} height={50} title="WordPress" placeholder="blur" blurDataURL="data:..." />
						<Image src={Joomla} alt="Joomla icon multicolor" width={50} height={50} title="Joomla" placeholder="blur" blurDataURL="data:..." />


						<Image src={Java} alt="Langage de Programmation Java" width={50} height={50} title="Java" placeholder="blur" blurDataURL="data:..." />
						<Image src={Spring} alt="Logiciel Spring" width={50} height={50} title="Spring" placeholder="blur" blurDataURL="data:..." />
			
                
					
						<Image src={MySql} alt="MySQL" width={50} height={50} title="Base de données MySQL" placeholder="blur" blurDataURL="data:..." />
						<Image src={Seo} alt="Seo ou référencement naturel" width={50} height={50} title="SEO" placeholder="blur" blurDataURL="data:..." />
						<Image src={Figma} alt="Figma ou le webdesign" width={50} height={50} title="Figma" placeholder="blur" blurDataURL="data:..." />
						<Image src={GitHub} alt="GitHub " width={50} height={50} title="Git Hub" placeholder="blur" blurDataURL="data:..." />
				
			</div>
		</section>
	);
}
