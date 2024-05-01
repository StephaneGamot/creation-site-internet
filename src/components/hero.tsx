import React from 'react'
import Image from "next/image";
import WebDevAtWork from "../../public/webDevAtWork.jpg"

export default function Hero() {
  return (
    <section className="flex mt-7 max-w-[1280px] mx-auto">
    <div className="w-1/2 m-2 p-4">
    <p className=" text-center">Bonjour, je suis	<strong> Stéphane Gamot</strong></p>
        <p><strong>Web développeur Full-Stack orienté Front-end =&gt; React – Next.js.</strong></p>
<p>En tant que développeur web diplômé & expérimenté, je mets à votre service mes compétence pour concrétiser vos projets internet.</p>
<p>Les sites internet que je crée sont entièrement personnalisés et unique. 
Je me déplace sur Bruxelles, Halle, Mons, Gand, Liège et Namur.
</p>
    </div>
    <div className="flex w-1/2 justify-center" >
        <Image src={WebDevAtWork} alt="Web-develppeur au travail derriere son écran" width={500} />
    </div>
</section>
  )
}
