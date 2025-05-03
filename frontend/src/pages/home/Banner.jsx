import React from 'react'

import bannerImg from "../../assets/banner.png"

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12'>
         <div className='md:w-1/2 w-full flex items-center md:justify-end'>
            <img src={bannerImg} alt="" />
        </div>
        
        <div className='md:w-1/2 w-full'>
            <h1 className='md:text-5xl text-2xl font-medium mb-7'>Books are everything</h1>
            <p className='mb-10'>ilent companions that enlighten, entertain, and educate. They preserve knowledge, culture, and human experience across time. Whether fiction or fact, books spark imagination, shape perspectives, and nurture curiosity. They offer escape from reality and also help us face it with wisdom. In every chapter, they build empathy, inspire thought, and guide us toward personal and collective growth.for everyone

            </p>
<p className='mb-10'>For new updates 👇</p>
            <button className='btn-primary'>Subscribe</button>
        </div>

       
    </div>
  )
}

export default Banner