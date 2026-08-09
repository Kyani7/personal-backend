
import { PiMedalBold } from 'react-icons/pi'
import BulletPoint from '../../../VisaServices-DestinationCountry/BulletPoint.tsx'

const SubBody = () => {
  return (
    <section className='flex justify-between px-20 gap-12 text-justify'>
                <div className='flex-1'>
                    <h1 className='text-2xl text-[#396cb8] font-bold pb-5 flex gap-5'>
                        <PiMedalBold />
                        About the Student Visa (Subclass 500)
                    </h1>
                    <p className='pr-10 pb-5 '>
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
                <div className="mt-6 space-y-3 pl-13 pb-5 text-sm">
                    <BulletPoint text={"Apply from inside or outside Australia"}/>
                    <BulletPoint text={"Family members can be included in application"}/>
                    <BulletPoint text={"Health insurance (OSHC) is mandatory"}/>
                    <BulletPoint text={"Visa application charge applies"}/>
                 </div>
                </div>
            </section>
  )
}

export default SubBody