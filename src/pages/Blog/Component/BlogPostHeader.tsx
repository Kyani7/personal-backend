export const BlogPostHeader = () => {
  return (
    <div className="absolute top-24 left-6 md:left-12 z-40">
      <a
        href="/blog&news"
        className="inline-flex items-center gap-2 bg-white/70 hover:bg-white hover:text-secondary backdrop-blur-md px-4 py-2 rounded-full text-[#0078bd] text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 border border-white/20"
      >
        <span aria-hidden="true">←</span> Back to Blog
      </a>
    </div>
  );
};
