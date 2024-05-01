import Image from "next/image";
import WordPressIcon from "../../../public/icons/wordpress.svg";

export default function Wordpress() {
	return <Image src={WordPressIcon} alt="Site créé avec Wordpress" width={40} height={48} title="WordPress" />;
}
