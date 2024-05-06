"use client"
import Image from "next/image"
import Img500 from "../../public/img/errors/page500.jpg"


export default function Error() {
  return (
    <Image src={Img500} alt="Page Error 500" className='z-5 absolute top-0' />
  )
}
