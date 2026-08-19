type MiniPanleprops={
  head:string;
  subHead:string;
  body:string;
}
const MiniPannel = ({head, subHead, body}:MiniPanleprops) => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 lg:px-12">
          <div
          >
            {/* Label */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-1 bg-[#0078BD] rounded-full"></div>
              <span className="text-sm font-semibold tracking-[0.3em] text-[#F0B100] uppercase">
                {head}
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-[#0078BD] leading-tight mb-6">
              {subHead}
            </h2>

            {/* Description */}
            <p className="text-lg text-[#111828] leading-relaxed max-w-6xl mb-5">
              {body}
            </p>
          </div>
      </div>
    </section>
  )
}

export default MiniPannel;