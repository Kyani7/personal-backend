

export const Head = () => {
  return (
    <section
      className="h-80 bg-cover bg-center bg-no-repeat relative flex items-center"
      style={{ backgroundImage: "url('https://himaaus.com/images/WEBSITE-6.png')" }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <h1 className="text-white text-4xl md:text-5xl font-bold">
          Blogs &amp; News
        </h1>
        <p className="text-white/90 text-lg md:text-xl mt-4 max-w-2xl">
          Read expert insights, tips, and stories about studying abroad, student visas, university admissions, and career guidance.
        </p>
      </div>
    </section>
  );
};