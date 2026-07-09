import React from 'react'
import { CiClock2 } from 'react-icons/ci'
import { MdLocalPostOffice, MdOutlinePhoneInTalk } from 'react-icons/md'
import { PiGlobeSimpleBold } from 'react-icons/pi'

const Ready = () => {
  return (
    <div>
        <div className='w-110 h-fit border border-gray-200 shadow-sm rounded-2xl bg-gray-100 p-5'>
            <PiGlobeSimpleBold className='text-[#0078BD] text-5xl'/>
            <h1 className='font-medium py-5'> 
                Ready to begin ?
            </h1>
            <p>
                Get personalized guidance for your Student Visa application. Our experts will assess
                your eligibility and create a tailored strategy.
            </p>
            <div className='pl-6'>
                <button className='bg-[#0078BD] rounded-3xl text-white px-5 py-2 mt-3'>
                    Free Consultation
                </button>
            </div>
        </div>
    
    
        <div className='sticky top-80 w-110 h-fit border border-gray-200 shadow-sm rounded-2xl bg-gray-100 p-5 mt-10'>
            <p className='font-medium pb-3'>
                Need Help ?
            </p>
            <MdOutlinePhoneInTalk className='text-xl text-[#0078BD]'/>
            <div className='flex items-center gap-3 pt-3 text-xl text-[#0078BD] pb-3'>
                <CiClock2/>
                <h1>Mon-Fri: 9AM-6PM</h1>
            </div>
            <MdLocalPostOffice className='text-xl text-[#0078BD]'/>
            <div className='pl-6'>
                <button className='bg-[#0078BD] rounded-2xl text-white px-5 py-2 mt-3'>
                    Contact Us
                </button>
            </div>
        </div>
    </div>
  )
}

export default Ready