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
			<h2 className="text-black mb-4">Les technologies web utilisées</h2>
			<div className=' mx-auto flex flex-row flex-wrap justify-center gap-3'>
		
							<Image src={Html} alt="Html est le langage de base pour la conception de site web" width={50} height={50} title="HTML" placeholder="blur" blurDataURL="data:..." className="w-[50px] h-[50px]" />
	
							<Image src={Css} alt="CSS est le langage qui va permettre a votre site de prendre forme" width={50} height={50} title="Css3" placeholder="blur" blurDataURL="data:..." className="w-[50px] h-[50px]" />
							<Image src={Tailwind} alt="Tailwind est un Css qui facilite la vie des développeur web" width={50} height={50} title="Css Tailwind" placeholder="blur" blurDataURL="data:..." className="w-[50px] h-[50px]" />
							<Image src={Bootstrap} alt="Bootstrap est un autre Css qui aide les intégrateurs web" width={50} height={50} title="BS" placeholder="blur" blurDataURL="data:..." className="w-[50px] h-[50px]" />

					
								<Image src={JavaScript} alt="JavaScript est le 1er langage de programation web" width={50} height={50} title="JS" placeholder="blur" blurDataURL="data:..." className="w-[50px] h-[50px]" />
								<Image src={ReactIcon} alt="React est un framework basé sur Js créé par Facebook " width={50} height={50} title="React" placeholder="blur" blurDataURL="data:..." className="w-[50px] h-[50px]" />
								<Image src={Next} alt="Next, c'est le terminator des frameworks issu du JavaScript" width={50} height={50} title="Next.js" placeholder="blur" blurDataURL="data:..." className="w-[50px] h-[50px]" />
								<Image src={Angular} alt="Angular est le Framework javascript inventé par Google" width={50} height={50} title="Ang" placeholder="blur" blurDataURL="data:..." className="w-[50px] h-[50px]"  />
								<Image src={TypeScript} alt="TypeScript lui aussi issu de Js, il a été créé par Microsoft" width={50} height={50} title="TypeScript" placeholder="blur" blurDataURL="data:..." className="w-[50px] h-[50px]" />
						
						<Image src={WordPress} alt="L'incontournable CMS WordPress" width={50} height={50} title="WordPress" placeholder="blur" blurDataURL="data:..." className="w-[50px] h-[50px]" />
						<Image src={Joomla} alt="Le second CMS le plus populaire : Joomla" width={50} height={50} title="Joomla" placeholder="blur" blurDataURL="data:..." className="w-[50px] h-[50px]" />


						<Image src={Java} alt="Langage de Programmation Java, qui est un de splus fiable aujourd'hui" width={50} height={50} title="Java" placeholder="blur" blurDataURL="data:..." className="w-[50px] h-[50px]" />
						<Image src={Spring} alt="Logiciel Spring, les amoureux de Java comprendront" width={50} height={50} title="Spring" placeholder="blur" blurDataURL="data:..." className="w-[50px] h-[50px]" />
			
						<Image src={Jest} alt="Il permet de tester le code du Front-end" width={50} height={50} title="Jest" placeholder="blur" blurDataURL="data:..." className="w-[50px] h-[50px]" />
						<Image src={RestApi} alt="Une API REST permet aux applications de communiquer entre elles via internet." width={50} height={50} title="Api Rest" placeholder="blur" blurDataURL="data:..." className="w-[50px] h-[50px]" />
					
						<Image src={MySql} alt="MySQL est une base de donnée" width={50} height={50} title="Base de données MySQL" placeholder="blur" blurDataURL="data:..." className="w-[50px] h-[50px]" />
						<Image src={Seo} alt="Seo ou référencement naturel pour Google et Bing" width={50} height={50} title="SEO" placeholder="blur" blurDataURL="data:..." className="w-[50px] h-[50px]" />
						<Image src={Figma} alt="Figma ou le webdesign" width={50} height={50} title="Figma" placeholder="blur" blurDataURL="data:..." className="w-[50px] h-[50px]" />
						<Image src={GitHub} alt="GitHub" width={50} height={50} title="Git Hub" placeholder="blur" blurDataURL="data:..." className="w-[50px] h-[50px]" />
				
			</div>
		</section>
	);
}
