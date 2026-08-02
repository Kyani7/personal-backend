import React from 'react'
import { MdLocalPostOffice } from 'react-icons/md'
import BulletPoint from '../../../../Pages/BulletPoint'

const Visa = () => {
  return (
    <>
    <h1 className='text-2xl text-[#396cb8] font-medium pb-5 flex gap-5'>
        <MdLocalPostOffice  className='text-3xl'/>
            Visa Benefits & Features
    </h1>
    <div>
        <BulletPoint text="Access to Australia's world-class education system" />
        <BulletPoint text="Part-time work rights to support living expenses" />
        <BulletPoint text="Post-study work opportunities for eligible graduates" />
        <BulletPoint text="Multicultural study environment with global recognition" />
        <BulletPoint text="Pathway to permanent residency options for eligible students" />
    </div>

    <div className='border border-gray-200 shadow-md rounded-2xl p-5 mt-5 bg-[#F4F8FB]'>
                <h1 className='text-[#0078BD]'>
                    Important Update:
                </h1>
                <p>
                    Temporary work hour concessions are currently in place. Students can work more than the standard 40 hours per fortnight across all sectors. Work permission begins immediately upon arrival in Australia.
                </p>
            </div>
    </>
  )
}

export default Visa