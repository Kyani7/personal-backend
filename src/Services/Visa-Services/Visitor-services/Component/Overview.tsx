import React from 'react'
import { FaGlobe } from 'react-icons/fa'
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2'
import { PiNotepadDuotone } from 'react-icons/pi'
import Features from '../../../../pages/Features'

const Overview = () => {
  return (
    <div className='pr-20'>
        <div className='flex text-[#0078BD] gap-3'>
            <FaGlobe className='text-2xl mt-1'/>
            <h1 className='font-bold text-2xl'>
                Visitor Visa Overview
            </h1>
        </div>
        <p className='pt-5'>
            All citizens can apply for a visiting visa for Australia online through the 
            Australia Immigration Department, except those from Somalia, who must apply in person.
        </p>
        <p className='pt-5'>
            There are several types of visiting visas in subclass 600, depending on the purpose of 
            the visit and the applicant's nationality. Australia visiting visas are awarded for stays 
            of three, six, or twelve months, with single or multiple entries, as assessed by Australian 
            Immigration officials on a case-by-case basis.
        </p>
        <p className='pt-5'>
            Before applying for a visiting visa, those who are eligible must fulfill the Australia 
            visa criteria. This mostly entails entering Australia with a passport that is valid for 
            at least three months, with extra supporting papers depending on the visa's purpose.
        </p>
    
        {/* Types of Visitor*/}
        <div className='flex text-[#0078BD] text-2xl gap-3 pt-10'>
            <PiNotepadDuotone className='mt-1'/>
            <h1 className='font-bold'>
                Types of Visitor Visas
            </h1>
        </div>
    
        <div className='grid grid-cols-2 gap-10 pt-5'>
            {/* box1 */}
            <div className='border border-gray-200 rounded-2xl shadow-md'>
                <span className='flex justify-between p-5 text-[8px] font-bold'>
                    <p className='bg-[#FFBA1B] border border-gray-200 rounded-md px-3 py-1'>
                        3-12 months
                    </p>
                    <p className='bg-[#FFFFFF] border border-gray-200 rounded-md px-3 py-1'>
                        Single/Multiple Entry
                    </p>
                </span>
                <h1 className='text-l px-5 font-medium'>
                    Tourist Visa (Subclass 600)
                </h1>
                <p className='text-[#737373] text-[13px] px-5'>
                    For tourism, visiting family, or short-term non-work purposes
                </p>
                <div className='mt-5'>
                    <Features text={"Business meetings"} colorClass={"text-[#00C951]"}/>
                    <Features text={"Conferences"} colorClass={"text-[#00C951]"}/>
                    <Features text={"Short courses (up to 3 months)"} colorClass={"text-[#00C951]"}/>
                </div>
            </div>
    
                    {/* box2 */}
                    <div className='border border-gray-200 rounded-2xl shadow-md'>
                        <span className='flex justify-between p-5 text-[8px] font-bold'>
                        <p className='bg-[#FFBA1B] border border-gray-200 rounded-md px-3 py-1'>
                            3-12 months
                        </p>
                        <p className='bg-[#FFFFFF] border border-gray-200 rounded-md px-3 py-1'>
                            Multiple Entry
                        </p>
                    </span>
                    <h1 className='text-l px-5 font-medium'>
                        Business Visitor Visa
                    </h1>
                    <p className='text-[#737373] text-[13px] px-5'>
                        For business meetings, conferences, or exploratory business visits
                    </p>
                    <div className='mt-5'>
                        <Features text={"Business meetings"} colorClass={"text-[#00C951]"}/>
                        <Features text={"Conferences"} colorClass={"text-[#00C951]"}/>
                        <Features text={"Contract negotiations"} colorClass={"text-[#00C951]"}/>
                    </div>
                    </div>
                </div>
    
                {/* Document required */}
                <div className='flex gap-5 pl-5 pt-10 text-[#0078BD]'>
                    <HiOutlineClipboardDocumentList className='mt-1 text-2xl'/>
                    <h1 className='font-bold text-2xl'>
                        Document Requirements
                    </h1>
                </div>
    
                {/* list */}
                <div className='flex mt-3'>
                    <div>
                        <Features text={"Valid passport with minimum 6 months validity"} colorClass={"text-[#0078BD] bg-[#E9F1F9] rounded-sm"}/>
                        <Features text={"Passport-size photographs"} colorClass={"text-[#0078BD] bg-[#E9F1F9] rounded-sm"}/>
                        <Features text={"Travel itinerary and accommodation details"} colorClass={"text-[#0078BD] bg-[#E9F1F9] rounded-sm"}/>
                        <Features text={"Character certificate (if required)"} colorClass={"text-[#0078BD] bg-[#E9F1F9] rounded-sm"}/>
                    </div>
                    <div>
                        <Features text={"Completed visa application form"} colorClass={"text-[#0078BD] bg-[#E9F1F9] rounded-sm"}/>
                        <Features text={"Proof of financial means"} colorClass={"text-[#0078BD] bg-[#E9F1F9] rounded-sm"}/>
                        <Features text={"Health insurance coverage"} colorClass={"text-[#0078BD] bg-[#E9F1F9] rounded-sm"}/>
                        <Features text={"Invitation letter (for visiting family/friends)"} colorClass={"text-[#0078BD] bg-[#E9F1F9] rounded-sm"}/>
                    </div>
                </div>
            </div>
  )
}

export default Overview