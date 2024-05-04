import Image from "next/image";
import CvEn from "../../../../public/img/cv/CV-Gamot-Stephane-en.jpg";
import DownloadPdfButton from "@/components/DownloadPdfButton";



export default function Page() {
	return (
		<div className='flex flex-col justify-center max-w-[536px] mx-auto  my-8'>
      <h1>Mon CV</h1>
			<Image src={CvEn} alt="mon cv" />
      <DownloadPdfButton />
		</div>
	);
}
