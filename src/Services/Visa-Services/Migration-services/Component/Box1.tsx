import { TbCircleNumber1Filled } from 'react-icons/tb'
import MiniVisaCard from '../../../../pages/VisaCard'

const Box1 = () => {
  return (
    <div className='mr-10'>
        <MiniVisaCard
        number={<TbCircleNumber1Filled className='text-4xl text-[#3187C4]'/>}
        title={"Training Visa (Subclass 407):"}
        description={"Training Visa (Subclass 407): The Training Subclass 407 Visa is a short-term visa for persons who want to study or work in Australia. The Training visa permits persons to do occupational training in Australia to fulfill occupational registration or licensing requirements, improve skills in their current employment, or create capacity elsewhere.Visit Australia to participate in a workplace-based training program (to strengthen your abilities for your present career, tertiary study sector, or field of expertise) or a professional development training program."}
        features={[
            "Temporary Visa",
            "Visa limit up to 2 years",
            "Have to be sponsored",
            "Be nominated (unless your sponsor is a Commonwealth Government organization)",
            "Be invited (if your sponsor is a Commonwealth Government agency)",
        ]}
    />
    </div>
  )
}

export default Box1;