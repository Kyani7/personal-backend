
import { VscExtensionsLarge } from 'react-icons/vsc'
import BulletPoint from '../../../../Pages/BulletPoint.tsx'
import { PiSealDuotone } from 'react-icons/pi'
import { LuPlane } from 'react-icons/lu'
import { CiClock2 } from 'react-icons/ci'

const Features = () => {
  return (
    <>
    <div className=' pb-5 gap-5 pt-10'>
        <h1 className='flex text-[#396cb8] font-medium text-2xl gap-3'>
        <VscExtensionsLarge className='text-3xl'/>
            Visa Duration & Extension Options
        </h1>
    </div>
    <div>
        <BulletPoint text={"Initial visa duration matches your course length (up to 5 years maximum)"}/>
        <BulletPoint text={"Primary and secondary school students: Maximum 3-year visa duration"}/>
        <BulletPoint text={"Package courses: Visa covers entire study period including foundation courses"}/>
        <BulletPoint text={"Research students: Additional time granted for thesis submission"}/>
    </div>

    <p className='font-medium pb-3 pt-3'>
        Extension Pathways:
    </p>

    <div>
        <BulletPoint text={"Apply for a new Student visa to continue studies"}/>
        <BulletPoint text={"Temporary Graduate visa (subclass 485) for work after studies"}/>
        <BulletPoint text={"Visitor visa (subclass 600) for graduation attendance"}/>
        <BulletPoint text={"Skilled visas for eligible occupations and qualifications"}/>
        <BulletPoint text={"Partner or family visas for eligible relationships"}/>
    </div>

    <div className=' pb-5 gap-5 pt-10'>
        <h1 className='flex text-[#396cb8] font-medium text-2xl gap-3'>
        <PiSealDuotone className='text-3xl'/>
            Visa Conditions & Obligations
        </h1>
    </div>

    <div>
        <BulletPoint text={"Maintain enrolment in a CRICOS-registered course"}/>
        <BulletPoint text={"Achieve satisfactory course attendance and progress"}/>
        <BulletPoint text={"Notify institution of address changes within 7 days"}/>
        <BulletPoint text={"Maintain adequate health insurance coverage"}/>
        <BulletPoint text={"Comply with Australian laws and visa conditions"}/>
        <BulletPoint text={"Work within permitted hours during study periods"}/>
    </div>

    <div className='border border-gray-200 shadow-md rounded-2xl p-5 mt-5 bg-[#FEFCE8]'>
        <p className='text-[#894B00] text-sm'>
            Important: Failure to comply with visa conditions may result in visa cancellation and affect future applications.
        </p>
    </div>

    <div className=' pb-5 gap-5 pt-10'>
        <h1 className='flex text-[#396cb8] font-medium text-2xl gap-3'>
        <LuPlane className='text-3xl'/>
            Travel & Digital Visa Information
        </h1>
        <p className='pt-3'>
            Australia uses a digital visa system. Your visa is electronically linked to your passport - no physical label is required.
        </p>
    </div>
    <div>
        <BulletPoint text={"Live and study in Australia for up to 5 years, depending on your course duration"}/>
        <BulletPoint text={"Work up to 48 hours per fortnight during study periods"}/>
        <BulletPoint text={"Work unlimited hours during scheduled course breaks"}/>
        <BulletPoint text={"Bring eligible family members as dependents"}/>
        <BulletPoint text={"Travel freely in and out of Australia during visa validity"}/>
    </div>

    <div className=' pb-5 gap-5 pt-10'>
        <h1 className='flex text-[#396cb8] font-medium text-2xl gap-3'>
        <CiClock2 className='text-3xl'/>
            Processing Timeline
        </h1>
    </div>

    <div>
        <BulletPoint text={"Standard processing: 4-6 weeks for complete applications"}/>
        <BulletPoint text={"Priority processing available for certain sectors"}/>
        <BulletPoint text={"Longer processing during peak periods (December-February)"}/>
        <BulletPoint text={"Apply at least 8 weeks before course commencement"}/>
    </div>

    <p className='pt-3'>
        Processing times vary based on application completeness, applicant country, and seasonal factors
    </p>
    </>
  )
}

export default Features