import Description from '../../Pages/Description'
import Australia from './Component/Australia'
import Head from './Component/Head'
import australiaImg from "../../assets/Australia.png"

const Main = () => {
  return (
    <>   
     <div className='relative'>
    <Head/>
    <div className='flex p-10 gap-10'>
        <div>
            <Description 
            title={"Study in Australia"}
            description={"Australia remains a top choice for international students with world-class universities, practical learning, strong job markets, and clear pathways to post-study work and permanent residency."}
            />
            <Australia />
        </div>

            <div className='bg-red-200 h-50 w-90 flex justify-start items-end sticky top-5' style={{backgroundImage:australiaImg}}>
            <div className='bg-white m-2 p-2 rounded-xl'>
                <h1>2-6 years</h1>
                <p>Post Study work </p>
            </div>
        </div>

    </div>
    </div>
    </>

  )
}

export default Main