import React from 'react'
import { GiGraduateCap } from "react-icons/gi";
import { MdOutlineDomainVerification } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { MdLocalPostOffice } from "react-icons/md";
import { PiMedalBold } from "react-icons/pi";
import { PiGlobeSimpleBold } from "react-icons/pi";
import { BiSolidNotepad } from "react-icons/bi";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { VscExtensionsLarge } from "react-icons/vsc";
import { PiSealDuotone } from "react-icons/pi";
import { LuPlane } from "react-icons/lu";


const Student = () => {
  return (
    <>
     <section className="h-125 bg-cover bg-center bg-no-repeat relative" 
        style={{backgroundImage:"url('https://himaaus.com/images/WEBSITE-2.png')"}}>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-40">
        <h1 className="text-white text-4xl font-bold">
          Student Visa (Subclass 500) Australia
        </h1>

        <p className="text-white text-l mt-4 max-w-3xl">
          Complete guidance for your Australian study journey - From application to arrival and beyond
        </p>
      </div>
      </section>

      <div className="gap-7 pt-20 px-25">
        <p className="text-yellow-500 uppercase tracking-[3px]">
            Student Visa
        </p>
        <h1 className="text-[#396cb8] text-4xl pt-5 font-medium">
           Simplifying Your Study Abroad Journey
        </h1>
         <p className="pt-5">
            Visa support designed to help students apply with clarity, confidence, and accuracy.
        </p>
        </div>

        <section className='grid grid-cols-4 py-10 px-20 gap-5'>
            {/* 1div */}
            <div className='flex bg-white rounded-3xl border border-gray-200 shadow-md '>
                <div className='mt-7'>
                    <GiGraduateCap className='ml-5 mt-3 text-4xl border border-gray-200 rounded-md bg-[#E9F1F9] text-[#0078BD] p-1'/>
                </div>
                <div className='pl-10 pt-5 pb-5 pr-4'>
                <h1 className='text-[#396cb8] font-medium text-xl'>
                    Full Visa Guidance
                </h1>
                <p>
                    End-to-end support from application to approval
                </p>
            </div>
            </div>

            {/* 2div */}
            <div className='flex bg-white rounded-3xl border border-gray-200 shadow-md '>
                <div className='mt-7'>
                    <MdOutlineDomainVerification className='ml-5 mt-5 text-4xl border border-gray-200 rounded-md bg-[#E9F1F9] text-[#0078BD] p-1'/>
                </div>
                <div className='pl-10 pt-5 pb-5 pr-4'>
                <h1 className='text-[#396cb8] font-medium text-xl'>
                    Document Verification
                </h1>
                <p>
                    Thorough review of all required documents
                </p>
            </div>
            </div>

            {/* 3div */}
            <div className='flex bg-white rounded-3xl border border-gray-200 shadow-md '>
                <div className='mt-7'>
                    <CiClock2 className='ml-5 mt-5 text-4xl border border-gray-200 rounded-md bg-[#E9F1F9] text-[#0078BD] p-1'/>
                </div>
                <div className='pl-10 pt-5 pb-5 pr-4'>
                <h1 className='text-[#396cb8] font-medium text-xl'>
                    Timely Processing
                </h1>
                <p>
                    Priority handling to meet your deadlines
                </p>
            </div>
            </div>

            {/* 4div */}
            <div className='flex bg-white rounded-3xl border border-gray-200 shadow-md '>
                <div className='mt-7'>
                    <MdLocalPostOffice className='ml-5 mt-5 text-4xl border border-gray-200 rounded-md bg-[#E9F1F9] text-[#0078BD] p-1'/>
                </div>
                <div className='pl-10 pt-5 pb-5 pr-4'>
                <h1 className='text-[#396cb8] font-medium text-xl'>
                    Post-Arrival Support
                </h1>
                <p>
                    Assistance with accommodation and settling
                </p>
            </div>
            </div>
        </section>

        {/* About */}
        <section className='flex justify-between px-20 gap-12'>
            <div className='flex-1'>
                <h1 className='text-2xl text-[#396cb8] font-medium pb-5 flex gap-5'>
                    <PiMedalBold />
                    About the Student Visa (Subclass 500)
                </h1>
                <p className='pr-10 pb-5'>
                    Australia offers international students an exceptional education experience 
                    with globally recognized qualifications, vibrant multicultural communities, 
                    and outstanding quality of life. The Student Visa (Subclass 500) is your 
                    gateway to this transformative journey.
                </p>
                <p className='pr-10'>
                    Our comprehensive service ensures you navigate the visa application process 
                    smoothly, with expert guidance at every step. We work closely with you to 
                    prepare a complete application that meets all Department of Home Affairs 
                    requirements.
                </p>
            </div>
            <div className='w-110 h-fit border border-gray-200 shadow-sm rounded-2xl bg-gray-100'>
                <h1 className='pl-10 pt-5 font-bold'>
                    Key Information
                </h1>
            <div className="mt-6 space-y-3 pl-13 pb-5">
                <p>• Apply from inside or outside Australia</p>
                <p>• Family members can be included in application</p>
                <p>• Health insurance (OSHC) is mandatory</p>
                <p>• Visa application charge applies</p>
             </div>
            </div>
        </section>

        {/* visa */}
        <section className='px-20 pt-10 flex justify-between gap-15 mb-4'>
            <div>
                <div>
                <h1 className='text-2xl text-[#396cb8] font-medium pb-5 flex gap-5'>
                    <MdLocalPostOffice  className='text-3xl'/>
                   Visa Benefits & Features
                </h1>
            <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-[#0078BD] rounded-full"></div>

                <p className=" text-gray-900">
                    Access to Australia's world-class education system
                </p>
            </div>

            <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-[#0078BD] rounded-full"></div>

                <p className=" text-gray-900">
                    Part-time work rights to support living expenses
                </p>
            </div>

            <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-[#0078BD] rounded-full"></div>

                <p className=" text-gray-900">
                    Post-study work opportunities for eligible graduates
                </p>
            </div>

            <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-[#0078BD] rounded-full"></div>

                <p className=" text-gray-900">
                    Multicultural study environment with global recognition
                </p>
            </div>

            <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-[#0078BD] rounded-full"></div>

                <p className=" text-gray-900">
                    Pathway to permanent residency options for eligible students
                </p>
                </div>
            </div>

            {/* Important Update */}
            <div className='border border-gray-200 shadow-md rounded-2xl p-5 mt-5'>
                <h1 className='text-[#0078BD]'>
                    Important Update:
                </h1>
                <p>
                    Temporary work hour concessions are currently in place. Students can work more than the standard 40 hours per fortnight across all sectors. Work permission begins immediately upon arrival in Australia.
                </p>
            </div>

            {/* Document */}
            <div className=' pb-5 gap-5 pt-10'>
                <h1 className='flex text-[#396cb8] font-medium text-2xl gap-3'>
                    <BiSolidNotepad className='text-3xl'/>
                    Eligibility & Document Requirements
                </h1>
                <p className='pt-3'>
                    To ensure a successful application, you must meet specific criteria and provide comprehensive documentation:
                </p>
                <h1 className='font-medium pt-5 pb-3'>
                    Eligibility Criteria:
                </h1>

            <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-[#0078BD] rounded-full"></div>
                <p className=" text-gray-900">
                    Enrolled in a full-time course registered under CRICOS
                </p>
            </div>

            <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-[#0078BD] rounded-full"></div>
                <p className=" text-gray-900">
                    Meet English language requirements for your course level
                </p>
            </div>

            <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-[#0078BD] rounded-full"></div>
                <p className=" text-gray-900">
                    Have adequate financial capacity for tuition and living expenses
                </p>
            </div>

            <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-[#0078BD] rounded-full"></div>
                <p className=" text-gray-900">
                    Meet health and character requirements
                </p>
            </div>

            <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-[#0078BD] rounded-full"></div>
                <p className=" text-gray-900">
                    Have Overseas Student Health Cover (OSHC) for entire stay
                </p>
            </div>

            <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-[#0078BD] rounded-full"></div>
                <p className=" text-gray-900">
                    Genuine intention to study and comply with visa conditions
                </p>
            </div>
            </div>

            {/* Required */}

            <p className='font-medium pb-3'>
                Required Documents:
            </p>
            <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-[#0078BD] rounded-full"></div>
                <p className=" text-gray-900">
                    Academic transcripts and certificates from previous studies
                </p>
            </div>

            <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-[#0078BD] rounded-full"></div>
                <p className=" text-gray-900">
                    Proof of current qualifications and certifications
                </p>
            </div>

            <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-[#0078BD] rounded-full"></div>
                <p className=" text-gray-900">
                    English language proficiency test results (IELTS, TOEFL, PTE, etc.)
                </p>
            </div>

            <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-[#0078BD] rounded-full"></div>
                <p className=" text-gray-900">
                    For course credit: Translated documents proving past studies or professional experience
                </p>
            </div>

            <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-[#0078BD] rounded-full"></div>
                <p className=" text-gray-900">
                    Valid passport and passport-sized photographs
                </p>
            </div>

            <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-[#0078BD] rounded-full"></div>
                <p className=" text-gray-900">
                    Confirmation of Enrolment (CoE) from your Australian institution
                </p>
            </div>

            <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-[#0078BD] rounded-full"></div>
                <p className=" text-gray-900">
                    Genuine Temporary Entrant (GTE) statement
                </p>
            </div>

            <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-[#0078BD] rounded-full"></div>
                <p className=" text-gray-900">
                    Financial capacity proof (bank statements, sponsorship documents)
                </p>
            </div>

            <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-[#0078BD] rounded-full"></div>
                <p className=" text-gray-900">
                    Overseas Student Health Cover (OSHC) documentation
                </p>
            </div>

            <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-[#0078BD] rounded-full"></div>
                <p className=" text-gray-900">
                   Character and health examination certificates
                </p>
            </div>

            {/* Visa Duration */}

            <div className=' pb-5 gap-5 pt-10'>
                <h1 className='flex text-[#396cb8] font-medium text-2xl gap-3'>
                    <VscExtensionsLarge className='text-3xl'/>
                    Visa Duration & Extension Options
                </h1>
                </div>

                <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-[#0078BD] rounded-full"></div>
                <p className=" text-gray-900">
                    Initial visa duration matches your course length (up to 5 years maximum)
                </p>
            </div>

            <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-[#0078BD] rounded-full"></div>
                <p className=" text-gray-900">
                   Primary and secondary school students: Maximum 3-year visa duration
                </p>
            </div>

            <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-[#0078BD] rounded-full"></div>
                <p className=" text-gray-900">
                    Package courses: Visa covers entire study period including foundation courses
                </p>
            </div>

            <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-[#0078BD] rounded-full"></div>
                <p className=" text-gray-900">
                    Research students: Additional time granted for thesis submission
                </p>
            </div>

            <p className='font-medium pb-3 pt-3'>
                Extension Pathways:
            </p>
            <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-[#0078BD] rounded-full"></div>
                <p className=" text-gray-900">
                    Apply for a new Student visa to continue studies
                </p>
            </div>

            <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-[#0078BD] rounded-full"></div>
                <p className=" text-gray-900">
                    Temporary Graduate visa (subclass 485) for work after studies
                </p>
            </div>

            <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-[#0078BD] rounded-full"></div>
                <p className=" text-gray-900">
                    Visitor visa (subclass 600) for graduation attendance
                </p>
            </div>

            <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-[#0078BD] rounded-full"></div>
                <p className=" text-gray-900">
                    Skilled visas for eligible occupations and qualifications
                </p>
            </div>

            <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-[#0078BD] rounded-full"></div>
                <p className=" text-gray-900">
                    Partner or family visas for eligible relationships
                </p>
            </div>

            {/* Visa Conditional */}

            <div className=' pb-5 gap-5 pt-10'>
                <h1 className='flex text-[#396cb8] font-medium text-2xl gap-3'>
                    <PiSealDuotone className='text-3xl'/>
                    Visa Conditions & Obligations
                </h1>
                </div>

            <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-[#0078BD] rounded-full"></div>
                <p className=" text-gray-900">
                    Maintain enrolment in a CRICOS-registered course
                </p>
            </div>

            <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-[#0078BD] rounded-full"></div>
                <p className=" text-gray-900">
                   Achieve satisfactory course attendance and progress
                </p>
            </div>

            <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-[#0078BD] rounded-full"></div>
                <p className=" text-gray-900">
                    Notify institution of address changes within 7 days
                </p>
            </div>

            <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-[#0078BD] rounded-full"></div>
                <p className=" text-gray-900">
                    Maintain adequate health insurance coverage
                </p>
            </div>

            <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-[#0078BD] rounded-full"></div>
                <p className=" text-gray-900">
                   Comply with Australian laws and visa conditions
                </p>
            </div>

            <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-[#0078BD] rounded-full"></div>
                <p className=" text-gray-900">
                    Work within permitted hours during study periods
                </p>
            </div>

            {/* important */}

            <div className='border border-gray-200 shadow-md rounded-2xl p-5 mt-5 bg-[#FEFCE8]'>
                <p className='text-[#894B00] text-sm'>
                    Important: Failure to comply with visa conditions may result in visa cancellation and affect future applications.
                </p>
            </div>

            {/* Travel & Digital */}
            <div className=' pb-5 gap-5 pt-10'>
                <h1 className='flex text-[#396cb8] font-medium text-2xl gap-3'>
                    <LuPlane className='text-3xl'/>
                    Travel & Digital Visa Information
                </h1>
                <p className='pt-3'>
                    Australia uses a digital visa system. Your visa is electronically linked to your passport - no physical label is required.
                </p>

            <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-[#0078BD] rounded-full"></div>
                <p className=" text-gray-900">
                    Live and study in Australia for up to 5 years, depending on your course duration
                </p>
            </div>

            <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-[#0078BD] rounded-full"></div>
                <p className=" text-gray-900">
                    Work up to 48 hours per fortnight during study periods
                </p>
            </div>

            <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-[#0078BD] rounded-full"></div>
                <p className=" text-gray-900">
                    Work unlimited hours during scheduled course breaks
                </p>
            </div>

            <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-[#0078BD] rounded-full"></div>
                <p className=" text-gray-900">
                    Bring eligible family members as dependents
                </p>
            </div>

            <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-[#0078BD] rounded-full"></div>
                <p className=" text-gray-900">
                    Have Overseas Student Health Cover (OSHC) for entire stay
                </p>
            </div>

            <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-[#0078BD] rounded-full"></div>
                <p className=" text-gray-900">
                    Genuine intention to study and comply with visa conditions
                </p>
            </div>
            </div>

            {/* Processing Timeline */}
            <div className=' pb-5 gap-5 pt-10'>
                <h1 className='flex text-[#396cb8] font-medium text-2xl gap-3'>
                    <CiClock2 className='text-3xl'/>
                    Processing Timeline
                </h1>

            <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-[#0078BD] rounded-full"></div>
                <p className=" text-gray-900">
                    Standard processing: 4-6 weeks for complete applications
                </p>
            </div>

            <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-[#0078BD] rounded-full"></div>
                <p className=" text-gray-900">
                    Priority processing available for certain sectors
                </p>
            </div>

            <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-[#0078BD] rounded-full"></div>
                <p className=" text-gray-900">
                   Longer processing during peak periods (December-February)
                </p>
            </div>

            <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-[#0078BD] rounded-full"></div>
                <p className=" text-gray-900">
                   Apply at least 8 weeks before course commencement
                </p>
            </div>
            <p className='pt-3'>
                Processing times vary based on application completeness, applicant country, and seasonal factors
            </p>
            </div>
            </div>

        <div>
                {/* Ready */}
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
                    <button className='bg-[#0078BD] rounded-2xl text-white px-5 py-2 mt-3'>
                    Contact Us
                </button>
                </div>
            </div>
        </div>
        </section>

        {/* last part*/}

        <section className='pt-5 bg-[#F5F9FC] pb-30'>
            <div>
                <h1 className='text-4xl font-md flex justify-center text-[#396cb8] pt-10'>
                    Ready to Start Your Journey?
                </h1>
                <p className='text-[#6DA7D5] flex justify-center'>
                    Join thousands of successful students who have transformed their lives through our guidance and support.
                </p>
            </div>

            <div className='flex justify-center gap-5 pt-3'>
                <button className='p-10 bg-[#FFFFFF] text-black py-4 rounded-3xl text-sm shadow-2xl hover:border border-blue-500 transition'>
                    Get Free Appointment
                </button>
                <button className='p-15 bg-[#FFBA1B] text-white py-4 rounded-3xl text-sm hover:border border-blue-500 transition'>
                    Why Choose Us
                </button>
            </div>
        </section>
    </>
  )
}

export default Student