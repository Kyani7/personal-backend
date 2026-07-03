import React from 'react'
import { Head } from './Component/Head'
import Last from './Component/Last'
import About from './Component/About'
import Box1 from './Component/Box1'
import Right from './Component/Right'
import Box2 from './Component/Box2'
import Box3 from './Component/Box3'
import Box4 from './Component/Box4'

const Main = () => {
  return (
    <>
    <Head />
     <section className='flex justify-between px-20 pt-20'>
        <div>
            <About />
            <Box1 />
            <Box2 />
            <Box3 />
            <Box4 />
        </div>
        <Right />
    </section>
    <Last />
    </>
  )
}

export {Main}