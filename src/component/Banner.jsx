import React from 'react'
import '../Styles/banner.css'
import TypingEffect from '../Styles/TypinfEffect/TypingEffect'
import Header from './Header'

const Banner = () => {
  return (
    <>

      <div className='bg-banner h-[35rem]'>
        <div className='z-50'>
          <Header />
        </div>
        <div className="col-12 flex justify-center mt-24 sm:mt-36 lg:mt-40">
          <div className="col-11 col-lg-7 flex justify-center relative z-40 ">
            <TypingEffect />
          </div>
        </div>
      </div>

    </>
  )
}

export default Banner
