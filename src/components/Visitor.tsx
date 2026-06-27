import React from 'react'
import { MdOutlineDomainVerification } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { FiTarget } from "react-icons/fi";
import { MdDoneAll } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { FaGlobe } from "react-icons/fa";
import { LuNotepadText } from "react-icons/lu";
import { TfiBook } from "react-icons/tfi";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdLocalPostOffice } from "react-icons/md";
import { PiNotepadDuotone } from "react-icons/pi";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";


const Visitor = () => {
  return (

<>
    {/* Header */}
    <section className="h-125 bg-cover bg-center bg-no-repeat" 
        style={{backgroundImage:"url('https://himaaus.com/images/WEBSITE-2.png')"}}>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-40">
        <h1 className="text-white text-4xl font-bold">
          Visitor Visa/Tourist Visa
        </h1>

        <p className="text-white text-l mt-4 max-w-3xl">
          Complete guidance for your Australia visiting journey - From application to arrival and beyond
        </p>
      </div>
    </section>


    <div className='p-7 bg-[#FFFFFF]'>
    </div>

    <section className='bg-[#F9FAFB]'>

        {/* Body */}
        <div className="gap-7 pt-5 px-25">
           <div className='flex items-center gap-3'>
             <div className='border-t-4 w-14 border-[#396cb8] rounded-full'>

            </div>
            <p className="text-yellow-500 uppercase tracking-[3px]">
            Visit Visa
            </p>
           </div>
            <h1 className="text-[#396cb8] text-4xl pt-5 font-medium">
            Your Complete Visit Visa Solution Partner
            </h1>
            <p className="pt-5">
            We provide end-to-end support for your Australia visitor visa application.
            </p>
        </div>
    </section>

    <section className='grid grid-cols-3 py-10 px-20 gap-5'>
        {/* div 1*/}
        <div className='flex bg-white rounded-3xl border border-gray-200 shadow-md '>
            <div className='mt-7'>
                <MdOutlineDomainVerification className='ml-5 mt-3 text-4xl border border-gray-200 rounded-md bg-[#E9F1F9] text-[#0078BD] p-1'/>
            </div>
            <div className='pl-10 pt-5 pb-5 pr-4'>
                <h1 className='text-[#396cb8] font-medium text-xl'>
                100% Visa Success Rate
                </h1>
                <p>
                Expert guidance ensures your application meets all requirements
                </p>
            </div>
        </div>

        {/* div 2*/}
        <div className='flex bg-white rounded-3xl border border-gray-200 shadow-md '>
            <div className='mt-7'>
                <CiClock2 className='ml-5 mt-3 text-4xl border border-gray-200 rounded-md bg-[#E9F1F9] text-[#0078BD] p-1'/>
            </div>
            <div className='pl-10 pt-5 pb-5 pr-4'>
                <h1 className='text-[#396cb8] font-medium text-xl'>
                Fast Processing
                </h1>
                <p>
                Express processing options available for urgent travel needs
                </p>
            </div>
        </div>

        {/* div 3 */}
        <div className='flex border border-gray-200 rounded-3xl shadow-md'>
            <div className='mt-7'>
                <FiTarget className='ml-5 mt-3 text-3xl border border-gray-200 rounded-md bg-[#E9F1F9] text-[#0078BD] p-1'/>
            </div>
            <div className='pl-10 pt-5 pb-5 pr-4'>
                <h1 className='text-[#0078BD] font-medim text-xl'>
                    Multiple Entry Options
                </h1>
                <p>
                    Single or multiple entry visas based on your travel needs
                </p>
            </div>
        </div>

        {/* div 4 */}
        <div className='flex border border-gray-200 rounded-3xl shadow-md'>
            <div className='mt-7'>
                <MdDoneAll className='ml-5 mt-3 text-3xl border border-gray-200 rounded-md bg-[#E9F1F9] text-[#0078BD] p-1'/>
            </div>
            <div className='pl-10 pt-5 pb-5 pr-4'>
                <h1 className='text-[#0078BD] font-medim text-xl'>
                    Document Verification
                </h1>
                <p>
                    Complete document checklist and verification service
                </p>
            </div>
        </div>

        {/* div 5 */}
        <div className='flex border border-gray-200 rounded-3xl shadow-md'>
            <div className='mt-7'>
                <IoCallOutline className='ml-5 mt-3 text-3xl border border-gray-200 rounded-md bg-[#E9F1F9] text-[#0078BD] p-1'/>
            </div>
            <div className='pl-10 pt-5 pb-5 pr-4'>
                <h1 className='text-[#0078BD] font-medim text-xl'>
                    24/7 Support
                </h1>
                <p>
                    Round-the-clock assistance for all your queries
                </p>
            </div>
        </div>

        {/* div 6*/}
        <div className='flex border border-gray-200 rounded-3xl shadow-md'>
            <div className='mt-7'>
                <FaGlobe className='ml-5 mt-3 text-3xl border border-gray-200 rounded-md bg-[#E9F1F9] text-[#0078BD] p-1'/>
            </div>
            <div className='pl-10 pt-5 pb-5 pr-4'>
                <h1 className='text-[#0078BD] font-medim text-xl'>
                    Multiple Entry Options
                </h1>
                <p>
                    Single or multiple entry visas based on your travel needs
                </p>
            </div>
        </div>
    </section>

    {/* Visit Visa */}
    <section className='flex justify-between px-20 py-0'>
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
                <div className='border border-gray-200 rounded-md shadow-md'>
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
                <div className="mt-6 space-y-3 px-5 pb-5">
                    <p>✅ Leisure tourism</p>
                    <p>✅ Family visits</p>
                    <p>✅ Short courses (up to 3 months)</p>
                </div>
                </div>

                {/* box2 */}
                <div className='border border-gray-200 rounded-md shadow-md'>
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
                <div className="mt-6 space-y-3 px-5 pb-5">
                    <p>✅ Business meetings</p>
                    <p>✅ Conferences</p>
                    <p>✅ Contract negotiations</p>
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
            <div className='flex '>
                <div className="mt-6 space-y-3 px-5 pb-5">
                    <p>✅ Valid passport with minimum 6 months validity</p>
                    <p>✅ Passport-size photographs</p>
                    <p>✅ Travel itinerary and accommodation details</p>
                    <p>✅ Character certificate (if required)</p>
                </div>
                <div className="mt-6 space-y-3 px-5 pb-5">
                    <p>✅ Completed visa application form</p>
                    <p>✅ Proof of financial means</p>
                    <p>✅ Health insurance coverage</p>
                    <p>✅ Invitation letter (for visiting family/friends)</p>
                </div>
            </div>
        </div>

        {/* Quick */}
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
    </section>

    {/* Last Part */}
        <section className='pt-5 bg-[#F6FAFC] pb-30 mt-10'>
            <div>
                <h1 className='text-4xl font-md flex justify-center text-[#396cb8] pt-10'>
                    Ready to Start Your Journey?
                </h1>
                <p className='text-[#6DA7D5] flex justify-center'>
                    Join thousands of successful students who have transformed their lives through our guidance and support.
                </p>
            </div>

            <div className='flex justify-center gap-10 pt-5'>
                <button className='p-15 bg-[#396cb8] text-white py-4 rounded-3xl shadow-2xl text-sm hover:border-2 border-blue-500 transition'>
                    Book Appointment Now
                </button>
                <button className='p-15 bg-[#FFBA1B] text-white py-4 rounded-3xl shadow-2xl hover:border-2 border-blue-500  transition'>
                    Explore Destination Country
                </button>
            </div>
        </section>
</>
  )
}

export default Visitor