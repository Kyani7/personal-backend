import { useNavigate } from "react-router-dom"

const Head = () => {
  const navigate = useNavigate()

  return (
    <section className="h-95 bg-cover bg-center bg-no-repeat relative mb-10"
      style={{ backgroundImage: "url('https://himaaus.com/images/WEBSITE-2.png')" }}>
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-40">
        <button
          onClick={() => navigate("/")}
          className="mb-4 flex w-fit items-center gap-2 text-[15px] font-medium text-white/90 transition-colors hover:text-brand-orange"
        >
          <span aria-hidden="true">←</span> Back
        </button>
        <h1 className="text-white text-4xl font-bold pr-120">
          Your Success, Our Priority
        </h1>
        <p className="text-white text-l mt-4 max-w-3xl">
          End-to-end support services designed to make your Australian education journey smooth, successful, and memorable.
        </p>
      </div>
    </section>
  )
}

export default Head