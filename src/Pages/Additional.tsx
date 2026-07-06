import React from 'react'

const Additional = ({topic,text}) => {
  return (
    <div className="border border-gray-200 shadow-md rounded-xl bg-[#F9FAFB] pl-5 mt-5">
          <h1 className="py-5 font-bold">
            Additional Details
          </h1>
          <div className="grid grid-cols-2">
            <div>
              <h2 className="font-medium pb-2">
                {topic}
              </h2>
              <p className="text-[#1F2736]">
                {text}
              </p>
            </div>
        </div>
    </div>
  )
}

export default Additional