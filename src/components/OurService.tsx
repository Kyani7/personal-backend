import React from 'react'

import div1 from "../assets/div1.webp";
import div2 from "../assets/div2.webp";
import div3 from "../assets/div3.webp";
import div4 from "../assets/div4.webp";
import div5 from "../assets/div5.webp";
import div6 from "../assets/div6.webp";
import { CiClock2 } from "react-icons/ci";
import { CiHospital1 } from "react-icons/ci";
import { RiBookLine } from "react-icons/ri";
import { GoGlobe } from "react-icons/go";
import { FaDollarSign } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa";



const OurService = () => {
  return (
    <>
        <section className="h-125 bg-cover bg-center bg-no-repeat relative" 
        style={{backgroundImage:"url('https://himaaus.com/images/WEBSITE-2.png')"}}>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-40">
        <h1 className="text-white text-4xl font-bold">
          Your Success, Our Priority
        </h1>

        <p className="text-white text-l mt-4 max-w-3xl">
          End-to-end support services designed to make your Australian education journey smooth, 
          successful and memorable.
        </p>
      </div>
      </section>

      <div className="gap-7 pt-20 px-25">
        <p className="text-yellow-500 uppercase tracking-[3px]">
            OUR COMPREHENISVE SERVICES
        </p>
        <h1 className="text-[#396cb8] text-4xl pt-5 font-medium">
            End-to-End Study Abroad Solutions
        </h1>
        <p className="pt-5">
            From initial counseling to post-arrival support, we provide complete guidance for 
          your international education journey.
        </p>
    </div>

    <section className="grid grid-cols-4 p-20 gap-20 max-w-6xl mx-auto text-center">
      <div className=" bg-white rounded-3xl shadow-md py-12 hover:bg-sky-200">
        <p className="font-bold text-[#396cb8] text-2xl">10,000+</p>
        <p>students</p>
      </div>

      <div className=" bg-white rounded-3xl shadow-md py-12 text-center hover:bg-sky-200">
        <p className="font-bold text-[#396cb8]">98%</p>
        <p>Visa Success Rate</p>
      </div>

      <div className=" bg-white rounded-3xl shadow-md py-12 text-center hover:bg-sky-200">
        <p className="font-bold text-[#396cb8]">50+</p>
        <p>Partner Universities</p>
      </div>

      <div className=" bg-white rounded-3xl shadow-md py-12 text-center hover:bg-sky-200">
        <p className="font-bold text-[#396cb8]">24/7</p>
        <p>Student Support</p>
      </div>
    </section>


    <section className="grid grid-cols-3 gap-10 px-20 max-w-7xl mx-auto">
    {/* first card */}
    <div className="bg-white rounded-3xl border border-gray-200 shadow-md overflow-hidden">
        <img src={div1} alt="Service Photo" className="w-full h-72 object-cover"/>
    
    <div className="p-8">
    <div className="flex justify-between items-start">
    <h2 className="font-bold text-[#396cb8] text-xl">
        Genuine
        <br />
        Counselling
      </h2>

      <span className="bg-gray-100 px-5 py-3 rounded-full text-sm">
        98% Satisfaction
      </span>
    </div>

    <p className="pt-6 text-l leading-relaxed">
      Personalized guidance and expert advice for your study abroad journey.
    </p>

    <div className="mt-6 space-y-3">
      <p>✅ Personalized Career Assessment</p>
      <p>✅ University Shortlisting</p>
      <p>✅ Course Selection Guidance</p>
    </div>

    <button className="w-full mt-8 bg-[#396cb8] text-white py-4 rounded-2xl text-xl hover:bg-blue-700 transition">
      Learn More →
    </button>

    </div>
    </div>
      
      {/* second card */}
    <div className="bg-white rounded-3xl border border-gray-200 shadow-md overflow-hidden">
        <img src={div2} alt="Service Photo" className="w-full h-72 object-cover"/>
    
    <div className="p-8">
    <div className="flex justify-between items-start">
    <h2 className="font-bold text-[#396cb8] text-xl">Job Placements</h2>

      <span className="bg-gray-100 px-5 py-3 rounded-full text-sm">
        85% Placement
      </span>
    </div>

    <p className="pt-6 text-l leading-relaxed">
        Post-study work opportunities and internship placements abroad.
    </p>

    <div className="mt-6 space-y-3">
      <p>✅ Industry Partnerships</p>
      <p>✅ Resume Building</p>
      <p>✅ Interview Preparation</p>
    </div>

    <button className="w-full mt-5 bg-[#396cb8] text-white py-4 rounded-2xl text-xl hover:bg-blue-700 transition">
      Learn More →
    </button>
    </div>
    </div>

    {/* Third card */}

    <div className="bg-white rounded-3xl border border-gray-200 shadow-md overflow-hidden">
        <img src={div3} alt="Service Photo" className="w-full h-72 object-cover"/>
    
    <div className="p-8">
    <div className="flex justify-between items-start">
    <h2 className="font-bold text-[#396cb8] text-xl">Pre-departure Training</h2>

      <span className="bg-gray-100 px-5 py-3 rounded-full text-sm">
        100% Prepared
      </span>
    </div>

    <p className="pt-6 text-l leading-relaxed">
        Comprehensive training to prepare you for life abroad.
    </p>

    <div className="mt-6 space-y-3">
      <p>✅ Cultural Orientation</p>
      <p>✅ Acadamic Preparation</p>
      <p>✅ Survival Language Skills</p>
    </div>
    <button className="w-full mt-5 bg-[#396cb8] text-white py-4 rounded-2xl text-xl hover:bg-blue-700 transition">
      Learn More →
    </button>
    </div>
    </div>

    {/* Fourth card */}

    <div className="bg-white rounded-3xl border border-gray-200 shadow-md overflow-hidden">
    <img src={div4} alt="Service Photo" className="w-full h-72 object-cover"/>
    
    <div className="p-8">
    <div className="flex justify-between items-start">
    <h2 className="font-bold text-[#396cb8] text-xl">Student Visa Application</h2>

      <span className="bg-gray-100 px-5 py-3 rounded-full text-sm">
        95% Success
      </span>
    </div>

    <p className="pt-6 text-l leading-relaxed">
        End-to-end visa assistance with high success rates.
    </p>

    <div className="mt-6 space-y-3">
      <p>✅ Document Verification</p>
      <p>✅ Application Filing</p>
      <p>✅ Interview Coaching</p>
    </div>
    <button className="w-full mt-5 bg-[#396cb8] text-white py-4 rounded-2xl text-xl hover:bg-blue-700 transition">
      Learn More →
    </button>
    </div>
    </div>

        {/* Fifth card */}

    <div className="bg-white rounded-3xl border border-gray-200 shadow-md overflow-hidden">
    <img src={div5} alt="Service Photo" className="w-full h-72 object-cover"/>
    
    <div className="p-8">
    <div className="flex justify-between items-start">
    <h2 className="font-bold text-[#396cb8] text-xl">Interview Preparation</h2>

      <span className="bg-gray-100 px-5 py-3 rounded-full text-sm">
        92% Success
      </span>
    </div>

    <p className="pt-6 text-l leading-relaxed">
        Master university and visa interviews with expert coaching.
    </p>

    <div className="mt-6 space-y-3">
      <p>✅ Mock Interview Sessions</p>
      <p>✅ Body Language Training</p>
      <p>✅ Question Bank Access</p>
    </div>
    <button className="w-full mt-5 bg-[#396cb8] text-white py-4 rounded-2xl text-xl hover:bg-blue-700 transition">
      Learn More →
    </button>
    </div>
    </div>

        {/* Sixth card */}

    <div className="bg-white rounded-3xl border border-gray-200 shadow-md overflow-hidden">
    <img src={div6} alt="Service Photo" className="w-full h-72 object-cover"/>
    
    <div className="p-8">
    <div className="flex justify-between items-start">
    <h2 className="font-bold text-[#396cb8] text-xl">Airport Pickup & Settlement</h2>

      <span className="bg-gray-100 px-5 py-3 rounded-full text-sm">
        100% Support
      </span>
    </div>

    <p className="pt-6 text-l leading-relaxed">
        Seamless transition from airport to accommodation abroad.
    </p>

    <div className="mt-6 space-y-3">
      <p>✅ 24/7 Airport Pickup</p>
      <p>✅ Temporary Accommodation</p>
      <p>✅ Local SIM & Banking</p>
    </div>
    <button className="w-full mt-5 bg-[#396cb8] text-white py-4 rounded-2xl text-xl hover:bg-blue-700 transition">
      Learn More →
    </button>
    </div>
    </div>
    </section>

        <div className="gap-7 pt-15 pl-25">
        <p className="text-yellow-500 uppercase tracking-[3px]">
        ADDITIONAL SUPPORT
        </p>
        <h1 className="text-[#396cb8] font-medium text-4xl pt-3">
            Complete Student Care Package
        </h1>
        <p className="pt-3">
            Extra services to ensure your comfort, safety, and academic success 
            throughout your stay in Australia.
        </p>
        </div>

        <section className="grid grid-cols-3 px-25 gap-10 py-10 max-h-xl mx-auto">
            {/* Energency */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden">
                <CiClock2  className='bg-[#DBEAFF] text-[#165DFC] ml-5 mt-5 text-4xl border border-gray-200 rounded-md p-1'/>
                <h1 className="text-[#396cb8] font-medium text-xl pt-5 px-5">
                    24/7 Emergency Support
                </h1>
                <p className="py-3 px-5 text-sm">
                    Round-the-clock assistance for any emergencies or urgent situations with dedicated helpline.
                </p>
            </div>

            {/* Health */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden">
                <CiHospital1 className='ml-5 mt-5 text-4xl border border-gray-200 rounded-md bg-[#DCFCE6] text-[#00A63D] p-1'/>
                <h1 className="text-[#396cb8] font-medium text-xl pt-5 px-5">
                    Health & Insurance
                </h1>
                <p className="py-3 px-5 text-sm">
                    Complete guidance on OSHC and accessing healthcare services throughout your stay.
                </p>
            </div>

            {/* Acadamic */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden">
                <RiBookLine className='ml-5 mt-5 text-4xl border border-gray-200 rounded-md bg-purple-200 text-purple-500 p-1'/>
                <h1 className="text-[#396cb8] font-medium text-xl pt-5 px-5">
                    Academic Support
                </h1>
                <p className="py-3 px-5 text-sm">
                    Tutoring, study groups, and academic writing assistance for ongoing success.
                </p>
            </div>

            {/* Cultural */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden">
                <GoGlobe className='ml-5 mt-5 text-4xl border border-gray-200 rounded-md bg-[#FFEDD4] text-[#F54900] p-1'/>
                <h1 className="text-[#396cb8] font-medium text-xl pt-5 px-5">
                    Cultural Integration
                </h1>
                <p className="py-3 px-5 text-sm">
                    Events and activities to help you adapt and thrive in Australian multicultural society.
                </p>
            </div>

            {/* Financial */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden">
                <FaDollarSign className='ml-5 mt-5 text-4xl border border-gray-200 rounded-md bg-[#FFE2E2] text-[#E7000B] p-1'/>
                <h1 className="text-[#396cb8] font-medium text-xl pt-5 px-5">
                    Financial Guidance
                </h1>
                <p className="py-3 px-5 text-sm">
                    Personalized budgeting advice and financial management support.
                </p>
            </div>

            {/* Alumni*/}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden">
                <FaNetworkWired className='ml-5 mt-5 text-4xl border border-gray-200 rounded-md bg-[#DFE7FF] text-[#4F39F6] p-1'/>
                <h1 className="text-[#396cb8] font-medium text-xl pt-15 px-5">
                    Alumni Network
                </h1>
                <p className="py-3 px-5 text-sm">
                    Connect with successful graduates for mentorship and professional networking.
                </p>
            </div>
        </section>

        <section className='pt-5 bg-[#F6FAFC] pb-30'>
            <div>
                <h1 className='text-4xl font-md flex justify-center text-[#396cb8] pt-10'>
                    Ready to Start Your Journey?
                </h1>
                <p className='text-[#6DA7D5] flex justify-center'>
                    Join thousands of successful students who have transformed their lives through our guidance and support.
                </p>
            </div>

            <div className='flex justify-center gap-5'>
                <button className='p-10 bg-[#396cb8] text-white py-4 rounded-3xl text-sm hover:border border-blue-500 transition'>
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

export default OurService