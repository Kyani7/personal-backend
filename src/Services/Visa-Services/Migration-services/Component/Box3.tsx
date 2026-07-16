import MiniVisaCard from '../../../../pages/VisaCard'
import { TbCircleNumber3Filled } from 'react-icons/tb'

const Box3 = () => {
  return (
    <div className='mr-10'>
        <MiniVisaCard
        number={<TbCircleNumber3Filled className='text-4xl text-[#3187C4]'/>}
        title={"PR (Permanent Resident)"}
        description={"Australian migrants are permanent residents of Australia who have been granted migrant or permanent residence visas and are permitted to live and work in the country permanently. Migrants are not citizens; however, they do have the option of becoming citizens after they complete the residence requirements. Immigrating to Australia can be done through family, job, refugee, or humanitarian status."}
        features={[
           "indefinite stay in Australia",
           "enroll in Medicare, Australia’s national health insurance program",
           "work and study in Australia",
           "purchase a home with the help of a bank loan",
           "sponsor relatives who are eligible for permanent residency",
           "if you meet the requirements, you can apply for Australian citizenship.",
           "for as long as your travel facility allows, travel to and from Australia.",
           "work in New Zealand",
        ]}
    />
    </div>
  )
}

export default Box3;