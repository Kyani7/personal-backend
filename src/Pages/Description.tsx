import React from 'react'

const Description = ({title, description}) => {
  return (
    <>
    <h1 className='text-[#0078BD] text-2xl font-bold'>
        {title}
    </h1>
    <p>
        {description}
    </p>
    </>
  )
}

export default Description