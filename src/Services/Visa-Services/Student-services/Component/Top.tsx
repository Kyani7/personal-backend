import MiniPannel from '../../../../Pages/MiniPannel'

const Top = () => {
  return (
    <>
    <section className="h-95 bg-cover bg-center bg-no-repeat relative mb-10" 
        style={{backgroundImage:"url('https://himaaus.com/images/WEBSITE-2.png')"}}>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-40">
        <h1 className="text-white text-4xl font-bold">
          Student Visa (Subclass 500) Australia
        </h1>

        <p className="text-white text-l mt-4 max-w-3xl">
          Complete guidance for your Australian study journey - From application to arrival and beyond
        </p>
      </div>
      </section>

      <div>
        <MiniPannel
        head={"Student Visa"}
        subHead={"Simplifying Your Study Abroad Journey"}
        body={"Visa support designed to help students apply with clarity, confidence, and accuracy."}
        />
      </div>
    </>
  )
}

export default Top;