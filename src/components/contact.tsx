import React from "react";
import Image from "next/image";
import MailPic from "../../public/icons/Mail.png";
import PhonePic from "../../public/icons/Phone.png";

export default function Contact() {
	return (
		<section id="contact" className="py-20 px-4 mx-auto max-w-4xl border-solid border-t-2 border-gray-light sm:py-24 md:py-28 lg:py-32">
			<p className=" text-3xl max-w-lg mx-auto text-center mb-2 font-medium sm:mb-4 sm:text-4xl sm:leading-snug sm:max-w-xl md:text-5xl md:leading-snug md:max-w-3xl">
				Faites-moi savoir si vous êtes intéressés par une
				<strong className="italic"> potentielle collaboration</strong>.
			</p>{" "}
			<p className=" text-3xl max-w-lg mx-auto text-center font-medium mb-14 sm:mb-20 sm:text-4xl sm:leading-snug sm:max-w-xl md:text-5xl md:leading-snug md:max-w-3xl">
				{" "}
				Je suis disponible pour du travail en Freelance.
			</p>
			<div className="text-main flex justify-center items-center flex-col md:flex-row md:justify-around">
				<div className="border rounded-sm w-full max-w-xs text-center bg-zinc-50 py-16 px-4 mb-5 md:mb-0 lg:px-8">
					<Image width="66" height="48" className="block mx-auto h-9 mb-10 md:h-12" src={MailPic} alt="icône de mail" />
					<p className="font-bold text-black  mb-1 md:text-lg lg:text-xl">Adresse mail</p>
					<p className="md:text-lg text-black">stephanegamot@outlook.com</p>
				</div>

				<div className="border rounded-sm w-full max-w-xs text-center bg-zinc-50 py-16 px-4 mn-5 md:mb-0 lg:px-8">
					<Image width="48" height="48" className="block mx-auto h-9 mb-10 md:h-12" src={PhonePic} alt="icône de téléphone" />
					<p className="font-bold mb-1 md:text-lg lg:text-xl text-black">Numéro de téléphone</p>
					<p className="md:text-lg text-black">04 77 13 19 93</p>
				</div>
			</div>
		</section>
	);
}
