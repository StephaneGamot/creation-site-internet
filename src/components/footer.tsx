import React from "react";
import Image from "next/image";
import MailPic from "./../../public/img/seo.webp";
import PhonePic from "./../../public/img/www2.webp";

export default function Footer() {
	return (
		<>
			<p className="text-center ">© Copyright 2024</p>
			<p className=" text-lg max-w-lg mx-auto text-center mb-2 font-medium sm:mb-4 sm:leading-snug sm:max-w-xl  md:leading-snug md:max-w-3xl">
				Intéressé ? Je suis à votre disposition pour une
				<strong className="italic"> collaboration</strong>.
			</p>
			<div className="text-main flex mt-0 justify-center items-center flex-col md:flex-row md:justify-center gap-4">
			<div className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
						/>
					</svg>
					&nbsp;&nbsp;
					<p className="md:text-lg text-zinc-50"> stephanegamot@outlook.com</p>
				</div>
				<div className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
						/>
					</svg> &nbsp;&nbsp;
					<p className="md:text-lg text-zinc-50">04 77 13 19 93</p>
				</div>
			</div>

			<div></div>
		</>
	);
}
