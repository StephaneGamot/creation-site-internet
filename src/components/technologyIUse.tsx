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
		<section className="flex flex-col bg-slate-200  pt-5  ">
			<h2 className="text-black">Les technologies utilisées</h2>
			<div className="flex-col  mx-auto md:flex md:flex-row justify-center">
				<div className=" rounded p-4 w-96">
					<h3 className='absolute text-black font-semibold'>Front-End</h3>
					<div className='flex flex-col items-center justify-center mx-auto '>
						<div className="flex justify-center p-2">
							<Image src={Html} alt="Html" width={50} height={50} title="" placeholder="blur" blurDataURL="data:..." />
						</div>
						<div className="flex justify-center gap-4 p-2 ">
							<Image src={Css} alt="CSS" width={50} height={50} title="Css3" placeholder="blur" blurDataURL="data:..." />
							<Image src={Tailwind} alt="Tailwind" width={50} height={50} title="Css Tail" placeholder="blur" blurDataURL="data:..." />
							<Image src={Bootstrap} alt="Bootstrap" width={50} height={50} title="BS" placeholder="blur" blurDataURL="data:..." />
						</div>
						<div>
							<div className="flex gap-2 p-2 ">
								<Image src={JavaScript} alt="JavaScript" width={50} height={50} title="JS" placeholder="blur" blurDataURL="data:..." />
								<Image src={ReactIcon} alt="React" width={50} height={50} title="" placeholder="blur" blurDataURL="data:..." />
								<Image src={Next} alt="Next" width={50} height={50} title="Next.js" placeholder="blur" blurDataURL="data:..." />
								<Image src={Angular} alt="Angular" width={50} height={50} title="Ang" placeholder="blur" blurDataURL="data:..." />
								<Image src={TypeScript} alt="TypeScript" width={50} height={50} title="" placeholder="blur" blurDataURL="data:..." />
								<Image src={Jest} alt="Jest" width={50} height={50} title="" placeholder="blur" blurDataURL="data:..." />
							</div>
						</div>
					</div>
				</div>
                <div className='p-4 mx-auto w-96'>
                <h3 className='absolute text-black font-semibold'>CMS</h3>
                <div className=" flex justify-center p-2">
					
					<div className="flex gap-4 justify-center">
						<Image src={WordPress} alt="WordPress" width={50} height={50} title="WP" placeholder="blur" blurDataURL="data:..." />
						<Image src={Joomla} alt="Joomla" width={50} height={50} title="" placeholder="blur" blurDataURL="data:..." />
					</div>
				</div>
                <h3 className='absolute text-black font-semibold'>Back-End</h3>
				<div className=" flex justify-center p-2">

					<div className="flex justify-center gap-3">
						<Image src={Java} alt="Java" width={50} height={50} title="" placeholder="blur" blurDataURL="data:..." />
						<Image src={Spring} alt="Spring" width={50} height={50} title="" placeholder="blur" blurDataURL="data:..." />
						<Image src={RestApi} alt="Api Rest" width={50} height={50} title="" placeholder="blur" blurDataURL="data:..." />
					</div>
				</div>
				<h3 className='absolute text-black font-semibold'>Autres</h3>
				<div className="flex justify-center p-2">
                
					<div className="flex justify-center gap-2">
						<Image src={MySql} alt="MySQL" width={50} height={50} title="Base de données" placeholder="blur" blurDataURL="data:..." />
						<Image src={Seo} alt="Seo" width={50} height={50} title="référencement naturel" placeholder="blur" blurDataURL="data:..." />
						<Image src={Figma} alt="Figma" width={50} height={50} title="design" placeholder="blur" blurDataURL="data:..." />
						<Image src={GitHub} alt="GitHub" width={50} height={50} title="" placeholder="blur" blurDataURL="data:..." />
					</div>
				</div></div>
			</div>
		</section>
	);
}
