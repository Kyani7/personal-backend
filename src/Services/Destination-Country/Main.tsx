import MiniPannel from "../../Pages/MiniPannel";
import NewZealand from "./Component/ NewZealand";
import Australia from "./Component/Australia";
import Canada from "./Component/Canada";
import Connect from "../../Pages/Connect";
import Germany from "./Component/Germany";
import Head from "./Component/Head";
import Japan from "./Component/Japan";
import Sweden from "./Component/Sweden";
import UK from "./Component/UnitedKingdom";
import USA from "./Component/USA";

const Main = () => {
  return (
  <>
  <Head />
  <section className="z-50 min-h-200 bg-white">
  <div className="sticky top-0 z-50 bg-white">
        <MiniPannel
        head={"Counselling Service"} 
        subHead={"Multi Destination Counselling"}
        body={"We provide personalized counselling services for students aspiring to study abroad across multiple countries, helping them choose the best pathway for their academic and career goals."}  
        />

        <div className='sticky top-20 z-50 bg-white flex mx-35 border border-gray-200 shadow-md rounded-2xl py-4 gap-4'>
          <button className='border border-gray-200 shadow-md rounded-3xl px-5 py-2 ml-2 bg-[#F3F4F6]'>
            Australia
          </button>

          <button className='border border-gray-200 shadow-md rounded-3xl px-5 py-2 ml-2 bg-[#F3F4F6]'>
            USA
          </button>

          <button className='border border-gray-200 shadow-md rounded-3xl px-5 py-2 ml-2 bg-[#F3F4F6]'>
            Canada
          </button>

          <button className='border border-gray-200 shadow-md rounded-3xl px-5 py-2 ml-2 bg-[#F3F4F6]'>
            United Kingdom
          </button>

          <button className='border border-gray-200 shadow-md rounded-3xl px-5 py-2 ml-2 bg-[#F3F4F6]'>
            New Zealand
          </button>

          <button className='border border-gray-200 shadow-md rounded-3xl px-5 py-2 ml-2 bg-[#F3F4F6]'>
            Japan
          </button>

          <button className='border border-gray-200 shadow-md rounded-3xl px-5 py-2 ml-2 bg-[#F3F4F6]'>
            Sweden
          </button>

          <button className='border border-gray-200 shadow-md rounded-3xl px-5 py-2 ml-2 bg-[#F3F4F6]'>
            Germany
          </button>
          </div>
        
      </div>
  <Australia />
  <hr className="border-gray-200 mt-10 mb-50 mx-20" />
  <USA/>
  <hr className="border-gray-200 mt-10 mb-50 mx-20" />
  <Canada />
  <hr className="border-gray-200 mt-10 mb-50 mx-20" />
  <UK />
  <hr className="border-gray-200 mt-10 mb-50 mx-20" />
  <NewZealand />
  <hr className="border-gray-200 mt-10 mb-50 mx-20" />
  <Japan />
  <hr className="border-gray-200 mt-10 mb-50 mx-20" />
  <Sweden />
  <hr className="border-gray-200 mt-10 mb-50 mx-20" />
  <Germany />
  <Connect/>
  </section>
    </>
);
};

export default Main;