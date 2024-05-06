import Image from "next/image"
import Img404 from "../../public/img/errors/404-error.jpg"

export default function Notfound() {
  return (
   <Image src={Img404} alt="Page 404" className='z-5 absolute top-0' />
  )
}
