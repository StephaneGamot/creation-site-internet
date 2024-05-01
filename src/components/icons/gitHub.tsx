import Image from "next/image";
import Link from "next/link";
import GitHubIcon from "../../../public/icons/github-markIV.webp";

interface GitHubProps {
	href: string;
}

export default function GitHub({ href }: GitHubProps) {
	return (
        <div className="h-10 my-auto">
		<Link href={href} passHref>
			<Image src={GitHubIcon} alt="Lien vers mon GitHub" width={40} height={48} title="GitHub" className="mx-7 " />
		</Link>
        </div>
	);
}
