import { CiHospital1 } from 'react-icons/ci';
import { LuClock } from "react-icons/lu";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoGlobe } from 'react-icons/go';
import { RiBookLine } from 'react-icons/ri';
import { FaNetworkWired } from 'react-icons/fa';
import MiniPannel from '../../Pages/MiniPannel';

const Package = () => {
  return (
    <>
    <div>
        <MiniPannel
        head={"Additional Support"}
        subHead={"Complete Student Care Package"}
        body={"Extra services to ensure your comfort, safety, and academic success throughout your stay in Australia."}
        />
      </div>
    <section className="grid grid-cols-3 px-25 gap-10 py-10 max-h-xl mx-auto">
                {/* Energency */}
                <div className="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden">
                    <LuClock  className='bg-[#DBEAFF] text-[#165DFC] ml-5 mt-5 text-4xl border border-gray-200 rounded-md p-1'/>
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
                    <BsCurrencyDollar className='ml-5 mt-5 text-4xl border border-gray-200 rounded-md bg-[#FFE2E2] text-[#E7000B] p-1'/>
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
    </>
  )
}

export default Package;