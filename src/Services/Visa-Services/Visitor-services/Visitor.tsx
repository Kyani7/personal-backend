import React from 'react'
import Head from './Component/Head'
import Feature from './Component/Feature'
import Overview from './Component/Overview'
import Right from './Component/Right'
import Last from './Component/Last'

const Visitor = () => {
  return (
    <>
    <Head/>
    <Feature />
    <section className='flex justify-between px-20 py-0'>
            <Overview />
            <Right />
    </section>
    <Last/>
    </>
    
  )
}

export default Visitor