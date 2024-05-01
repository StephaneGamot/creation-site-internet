import React from 'react'
import Image from 'next/image'
import EnglishFlag from '../../../public/icons/royaume-uni.svg'
import FrenchFlag from '../../../public/icons/france.svg'
import Style from './header.module.css'


export default function Languages() {
  return (
    <div className={Style.flags}>
      <Image src={EnglishFlag} alt='In English please' width={20} height={20} title='Uk' className={Style.flag}  />
      <Image src={FrenchFlag} alt=' En Francais svp' width={20} height={20} title='FR' className={Style.flag} />
    </div>
  )
}
