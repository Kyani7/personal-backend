import React from 'react'
import MiniPannel from '../../Pages/MiniPannel'

const Body = () => {
  return (
    <>
    <div>
        <MiniPannel
        head={"Our Comprehensive Services"}
        subHead={"End-to-End Study Abroad Solutions"}
        body={"From initial counseling to post-arrival support, we provide complete guidance for your international education journey."}
        />
      </div>

    <section className="grid grid-cols-4 my-20 gap-20 max-w-6xl mx-auto text-center">

      <div className=" bg-white rounded-2xl shadow-md hover:scale-90 py-5">
        <p className="font-bold text-[#0078BD] text-2xl">10,000+</p>
        <p>students</p>
      </div>

      <div className=" bg-white rounded-2xl shadow-md hover:scale-90 py-5">
        <p className="font-bold text-[#0078BD] text-2xl">98%</p>
        <p>Visa Success Rate</p>
      </div>

      <div className=" bg-white rounded-2xl shadow-md hover:scale-90 py-5">
        <p className="font-bold text-[#0078BD] text-2xl">50+</p>
        <p>Partner Universities</p>
      </div>

      <div className=" bg-white rounded-2xl shadow-md hover:scale-90 py-5">
        <p className="font-bold text-[#0078BD] text-2xl">24/7</p>
        <p>Student Support</p>
      </div>
    </section>
    </>
  )
}

export default Body