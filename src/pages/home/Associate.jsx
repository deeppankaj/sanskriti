import React from 'react'
import { assoicate } from '../../assets'

const Associate = () => {
  return (
    <div className='md:flex gap-4 items-center p-2 mb-10  justify-center'>
        <div className='flex flex-col gap-2 mx-4'>
            <h1 className='h2 ' style={{fontWeight:"600"}}>Associates With us</h1>
            <p>Associate with us and experience the power of collaboration. Together, we can reach new heights and unlock boundless opportunities. Join our network of innovators, creators, and visionaries, where your ideas are valued and your skills are amplified. Let's forge a partnership that thrives on trust, integrity, and shared success. Together, we can build a brighter future and make a lasting impact on the world. Come, associate with us, and let's embark on an extraordinary journey together.</p>
            <button className='btn btn-primary w-28 mt-4'>Read More</button>
        </div>
      <img src={assoicate} alt="" className='' />
    </div>
  )
}

export default Associate
