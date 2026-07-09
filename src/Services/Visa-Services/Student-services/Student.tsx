import React from 'react'
import Top from './Component/Top'
import Box from './Component/Box'
import SubBody from './Component/SubBody'
import Visa from './Component/Visa'
import Ready from './Component/Ready'
import Bottom from './Component/Bottom'
import Eligibility from './Component/Eligibility'
import Features from './Component/Features'


const Student = () => {
  return (
    <>
    <Top />
    <Box />
    <SubBody/>
    <section className='px-20 pt-10 flex justify-between gap-15 mb-4'>
        <div>
            <Visa />
            <Eligibility />
            <Features />
        </div>
        <Ready />
    </section>
    <Bottom />
    </>
  )
}

export default Student