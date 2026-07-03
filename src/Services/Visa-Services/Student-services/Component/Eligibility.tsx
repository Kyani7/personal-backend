import React from 'react'
import { BiSolidNotepad } from 'react-icons/bi'
import BulletPoint from '../../../../Pages/BulletPoint'

const Eligibility = () => {
  return (
    <div className=' pb-5 gap-5 pt-10'>
        <h1 className='flex text-[#396cb8] font-medium text-2xl gap-3 pb-5'>
        <BiSolidNotepad className='text-3xl'/>
            Eligibility & Document Requirements
        </h1>
        <p className='pt-3'>
            To ensure a successful application, you must meet specific criteria and provide comprehensive documentation:
        </p>
        <h1 className='font-medium pt-5 pb-3'>
            Eligibility Criteria:
        </h1>
        <div>
            <BulletPoint text={"Enrolled in a full-time course registered under CRICOS"}/>
            <BulletPoint text={"Meet English language requirements for your course level"}/>
            <BulletPoint text={"Have adequate financial capacity for tuition and living expenses"}/>
            <BulletPoint text={"Meet health and character requirements"}/>
            <BulletPoint text={"Have Overseas Student Health Cover (OSHC) for entire stay"}/>
            <BulletPoint text={"Genuine intention to study and comply with visa conditions"}/>
        </div>

        <h1 className='font-medium pt-5 pb-3'>
            Required Documents:
        </h1>
        <div>
            <BulletPoint text={"Academic transcripts and certificates from previous studies"}/>
            <BulletPoint text={"Proof of current qualifications and certifications"}/>
            <BulletPoint text={"English language proficiency test results (IELTS, TOEFL, PTE, etc.)"}/>
            <BulletPoint text={"For course credit: Translated documents proving past studies or professional experience"}/>
            <BulletPoint text={"Valid passport and passport-sized photographs"}/>
            <BulletPoint text={"Confirmation of Enrolment (CoE) from your Australian institution"}/>
            <BulletPoint text={"Genuine Temporary Entrant (GTE) statement"}/>
            <BulletPoint text={"Financial capacity proof (bank statements, sponsorship documents)"}/>
            <BulletPoint text={"Overseas Student Health Cover (OSHC) documentation"}/>
            <BulletPoint text={"Character and health examination certificates"}/>
        </div>
    </div>
  )
}

export default Eligibility