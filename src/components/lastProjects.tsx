import Image from 'next/image'
import Project1 from '../../public/img/xxx1.webp'
import Project2 from '../../public/img/xxx2.webp'
import Project4 from '../../public/img/xxx3.webp'

export default function LastProjects() {
  return (
 <section className='bg-black p-8'>
<h2>Dernières créations</h2>

<div className='flex-col  lg:flex lg:flex-row lg:justify-evenly gap-5 mt-5'>
<Image src={Project2} alt='Site internet de karaté' width={350}  height={291} className='mx-auto my-5 ' />
<Image src={Project1} alt='Site web de massage' width={350}  height={291} className='mx-auto my-5' />
<Image src={Project4} alt='E-commerce de photographe' width={350}  height={291} className='mx-auto my-5' />
</div>
 </section>
  )
}
