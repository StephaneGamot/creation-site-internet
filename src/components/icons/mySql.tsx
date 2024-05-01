import Image from "next/image";
import MySqlIcon from "../../../public/icons/mysql.svg";

export default function MySql() {
	return <Image src={MySqlIcon} alt="Logo de MySql avec son dauphin" width={40} height={48} title="MySql" />;
}
