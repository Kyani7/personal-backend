
import { CiClock2 } from 'react-icons/ci'
import { GiGraduateCap } from 'react-icons/gi'
import { MdLocalPostOffice, MdOutlineDomainVerification } from 'react-icons/md'

const Box = () => {
  return (
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
  )
}

export default Box