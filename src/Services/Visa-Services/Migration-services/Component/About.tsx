import { FiLayers } from 'react-icons/fi'
import { HiOutlineQuestionMarkCircle } from 'react-icons/hi2'

const About = () => {
  return (
    <>
    <div className='flex text-[#396cb8] text-2xl pb-5 gap-5'>
                    <HiOutlineQuestionMarkCircle className='mt-1'/>
                    <h1 className='font-bold'>
                        About Migration Visa
                    </h1>
                </div>
                <p className='text-justify pr-10'>
                    An Australian migration visa is a permit allowing skilled foreign workers to live and 
                    work permanently or temporarily in Australia, primarily through the Skilled Migration 
                    Program to fill labor shortages, involving pathways like employer sponsorship, state 
                    nomination (Subclass 190, 491), or independent application (Subclass 189) based on 
                    skills, points, and meeting specific criteria for various visa subclasses.
                </p>
                <div className='flex text-[#396cb8] text-2xl gap-5 mt-5'>
                    <FiLayers className='mt-1'/>
                    <h1 className='font-bold'>
                        Varietes of Migration Visa
                    </h1>
                </div>
                <p className='mt-5'>
                    There are various varietes of migration visa that Austrailia is currently providing.
                </p>
                
    </>
  )
}

export default About;