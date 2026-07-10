import React from 'react'
import FeaturesCard from '../../../../pages/FeaturesCard'
import { MdDoneAll, MdOutlineDomainVerification } from 'react-icons/md'
import MiniPannel from '../../../../pages/MiniPannel'
import { CiClock2 } from 'react-icons/ci'
import { FiTarget } from 'react-icons/fi'
import { IoCallOutline } from 'react-icons/io5'
import { FaGlobe } from 'react-icons/fa'

const Feature = () => {
  return (
    <>
    <section className='bg-[#F9FAFB]'>
        <div>
            <MiniPannel
            head={"Visit Visa"}
            subHead={"Your Complete Visit Visa Solution Partner"}
            body={"We provide end-to-end support for your Australia visitor visa application"}
            />
        </div>
    </section>

    <section className='grid grid-cols-3 py-10 px-20 gap-5'>
        {/* div 1 */}
    <FeaturesCard
    icon={<MdOutlineDomainVerification />}
    title={"100% Visa Success Rate"}
    description={"Expert guidance ensures your application meets all requirements"}
    />

    {/* div 2 */}
    <FeaturesCard
    icon={<CiClock2 />}
    title={"Fast Processing"}
    description={"Express processing options available for urgent travel needs"}
    />

    {/* div 3 */}
    <FeaturesCard
    icon={<FiTarget />}
    title={"Personalized Assistance"}
    description={"Dedicated case officer for personalized support throughout"}
    />

    {/* div 4 */}
    <FeaturesCard
    icon={<MdDoneAll />}
    title={"Document Verification"}
    description={"Complete document checklist and verification service"}
    />

    {/* div 5 */}
    <FeaturesCard
    icon={<IoCallOutline />}
    title={"24/7 Support"}
    description={"Round-the-clock assistance for all your queries"}
    />

    {/* div 6 */}
    <FeaturesCard
    icon={<FaGlobe />}
    title={"Multiple Entry Options"}
    description={"Single or multiple entry visas based on your travel needs"}
    />

    </section>
    

    </>
  )
}

export default Feature