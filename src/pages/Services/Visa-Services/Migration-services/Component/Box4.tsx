
import { TbCircleNumber4Filled } from 'react-icons/tb'
import MiniVisaCard from '../../../VisaServices-DestinationCountry/VisaCard'

const Box4 = () => {
  return (
    <div className='mr-10'>
        <MiniVisaCard
        number={<TbCircleNumber4Filled className='text-4xl text-[#3187C4]'/>}
        title={"Skilled Regional Visa"}
        description={"This four-year work visa permits you to live and work in a specific area of Australia, as well as bring your family with you. This visa has two options: (1) the Extended Stay option, and (2) the Invited option.Applicants who have held a provisional visa in subclasses 496, 495, 487, or 475 are eligible for the Extended Stay route. You must submit an Expression of Interest and acquire an invitation to apply for the visa through the Invited Pathway. The application process for both paths will be explained."}
        features={[
            "stay in Australia up to 4 years",
            "live, work, and study in a certain Australian geographical location",
            "whilst the visa is valid, travel in and out of Australia",
        ]}
    />
    </div>
  )
}

export default Box4;