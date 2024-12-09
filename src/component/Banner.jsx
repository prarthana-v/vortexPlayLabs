import React from 'react'
import '../Styles/banner.css'
import TypingEffect from '../Styles/TypinfEffect/TypingEffect'
import Header from './Header'

const Banner = () => {
  return (
    <>

      <div className='bg-banner h-[35rem]'>
        <Header />
        <div className="col-12 flex justify-center mt-40">
          <div className="col-7 flex justify-center relative z-50 ">
            <TypingEffect />
          </div>
        </div>
      </div>

    </>
  )
}

export default Banner
