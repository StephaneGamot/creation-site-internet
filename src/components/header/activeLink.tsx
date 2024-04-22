import Link from "next/link"
import Router, { useRouter } from "next/router"
import { NavInterface } from "../interfaces/navInterfaces"



export default function ActiveLink({href, children}:NavInterface ) {
    const router = useRouter();
  return (
   <Link href={href} className="" >{children}</Link>
  )
}
