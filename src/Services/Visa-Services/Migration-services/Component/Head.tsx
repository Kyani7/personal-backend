import React from 'react'
import MiniPannel from '../../../../Pages/MiniPannel'

export const Head = () => {
  return (
    <>
    <section className="h-125 bg-cover bg-center bg-no-repeat relative mt-10" 
        style={{backgroundImage:"url('https://himaaus.com/images/WEBSITE-2.png')"}}>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-40">
        <h1 className="text-white text-4xl font-bold pr-120">
          Australian Migration Made Simple & Successful
        </h1>
        <p className="text-white text-l mt-4 max-w-3xl">
          End-to-end support services designed to make your Australian education journey smooth, 
          successful and memorable.
        </p>
      </div>
      </section>
        <div>
        <MiniPannel
        head={"Migration Visa "} 
        subHead={"Expert Guidance for Your Migration Journey"}
        body={"Our migration visa services are designed to support individuals seeking to migrate and settle in Australia, ensuring a smooth, transparent, and well-guided process."}  
        />
        </div>
    </>
  )
}
