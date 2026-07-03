import React from 'react'
import { LuCircleCheckBig } from 'react-icons/lu'

const Features = ({text, colorClass}) => {
  return (
    <>
    <div className="flex mt-1 space-y-3 px-5 gap-3">
        <LuCircleCheckBig className={`${colorClass}  text-2xl p-1 mt-1`} />
        <p>
         {text}   
        </p>
    </div>
    </>
  )
}

export default Features