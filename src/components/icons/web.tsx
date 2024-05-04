import Image from "next/image";
import Link from "next/link";
import WebIcon from "../../../public/icons/webIcon.webp";

interface WebProps {
	href: string;
}

export default function GitHub({ href }: WebProps) {
	return (
        <div className="h-10 my-auto">
		<Link href={href} passHref>
			<Image src={WebIcon} alt="Lien vers le site" width={40} height={48} title="Site web" className="" />
		</Link>
        </div>
	);
}

