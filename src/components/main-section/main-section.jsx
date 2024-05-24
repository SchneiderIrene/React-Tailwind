import React from 'react'

import Button from '../button/index'

import {ReactComponent as Databitz} from '../../images/client-databiz.svg';
import {ReactComponent as Audiophile} from '../../images/client-audiophile.svg';
import {ReactComponent as Meet} from '../../images/client-meet.svg';
import {ReactComponent as Maker} from '../../images/client-maker.svg';
import MenImage from '../../images/image-hero-desktop.png';
import MobilImage from '../../images/image-hero-mobile.png';

const MainSection = () => {
  return (
    <section className='flex flex-col justify-between w-full mt-6  xl:flex-row'>
      <div className='relative order-2 mt-12 text-center xl:order-1 xl:text-left xl:w-2/4 xl:mt-60'>
        <h1 className='font-black text-3xl xl:whitespace-pre-line xl:text-8xl mt-6'>{`Make\n remote work`}</h1>
        <p className='my-12 text-lg whitespace-pre-line text-medium-gray'>
          {`Lorem ipsum dolor, sit amet consectetur adipisicing elit.\n Amet ullam dolorum animi atque vitae exercitationem\n quibusdam maiores adipisci qui harum.`}
          </p>
          <Button isFilled={true}>Lern More</Button>
          <div className='flex justify-around mt-20 xl:mt-0 xl:absolute bottom-2 xl:space-x-20'>
            <Databitz/>
            <Audiophile/>
            <Meet/>
            <Maker/>
          </div>
      </div>
     <div className='hidden w-2/4 mt-20 xl:flex xl:order-2'>
      <img src={MenImage} alt='man'/>
     </div>
     <div className='flex w-full mb-8 xl:hidden order-1 justify-center mt-20'>
      <img src={MobilImage} alt='man'/>
     </div>
    </section>
  )
}

export default MainSection
