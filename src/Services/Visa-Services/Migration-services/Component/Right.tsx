import React from 'react'
import { CiClock2 } from 'react-icons/ci'
import { LuNotepadText } from 'react-icons/lu'
import { MdLocalPostOffice, MdOutlinePhoneInTalk } from 'react-icons/md'
import { TfiBook } from 'react-icons/tfi'

const Right = () => {
  return (
    <div className='sticky top-24 w-250 h-full'>
        <div className='border border-gray-200 shadow-md rounded-2xl'>
            <h1 className='pt-5 pl-5 font-medium'>
                Quick Links
            </h1>
            <div className='flex p-5 gap-3'>
                <LuNotepadText className='text-[#0078BD] mt-1 '/>
                <p>
                    Document Checkout
                </p>
            </div>
            <div className='flex pl-5 pb-5 gap-3'>
                <TfiBook className='text-[#0078BD] mt-1 '/>
                <p>
                    Visa Types
                </p>
            </div>
        </div>
        
        {/* Help */}
        <div className='w-110 h-fit border border-gray-200 shadow-sm rounded-2xl bg-gray-100 p-5 mt-10'>
            <p className='font-medium pb-3'>
                Need Help ?
            </p>
            <MdOutlinePhoneInTalk className='text-xl text-[#0078BD]'/>
            <div className='flex items-center gap-3 pt-3 text-xl text-[#0078BD] pb-3'>
                <CiClock2 className=''/>
                <h1>Mon-Fri: 9AM-6PM</h1>
            </div>
            <MdLocalPostOffice className='text-xl text-[#0078BD]'/>
            <div className='pl-6'>
                <button className='bg-[#0078BD] rounded-2xl text-white px-5 py-2 mt-3 hover:bg-[#FFBA1B] shadow-2xl'>
                    Contact Us
                </button>
            </div>
        </div>
    </div>
  )
}

export default Right