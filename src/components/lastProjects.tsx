import Image from 'next/image'
import Project1 from '../../public/img/xxx1.webp'
import Project2 from '../../public/img/xxx2.webp'
import Project4 from '../../public/img/xxx3.webp'

export default function LastProjects() {
  return (
 <section className='bg-black p-8'>
<h2>Dernières créations</h2>

<div className='flex justify-evenly gap-5'>
<Image src={Project2} alt='' width={350}  height={291}/>
<Image src={Project1} alt='' width={350}  height={291}/>
<Image src={Project4} alt='' width={350}  height={291}/>
</div>
 </section>
  )
}
