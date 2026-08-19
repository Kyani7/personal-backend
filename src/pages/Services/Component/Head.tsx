import { useNavigate } from "react-router-dom"

const Head = () => {
  const navigate = useNavigate()

  return (
    <section
      className="relative min-h-[380px] sm:min-h-[420px] lg:min-h-[500px] bg-cover bg-center bg-no-repeat mb-10"
      style={{
        backgroundImage:
          "url('https://himaaus.com/images/WEBSITE-2.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[380px] sm:min-h-[420px] lg:min-h-[500px] items-center">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Back Button */}
          <button
            onClick={() => navigate("/")}
            className="mb-6 flex w-fit items-center gap-2 text-sm sm:text-[15px] font-medium text-white/90 transition-colors hover:text-orange-400"
          >
            ← Back
          </button>

          {/* Heading */}
          <h1 className="max-w-3xl text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
            Your Success, Our Priority
          </h1>

          {/* Description */}
          <p className="mt-4 max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed text-white/90">
            End-to-end support services designed to make your Australian
            education journey smooth, successful, and memorable.
          </p>

        </div>
      </div>
    </section>
  )
}

export default Head;