
import { BlogPostHeader } from './Component/BlogPostHeader';
import { ShareIcons } from './Component/ShareIcons';
import { RecentPosts } from './Component/RecentPosts';
import { blogs } from './blogsData';

const post = blogs[0];

const Blog1 = () => {
  return (
    <div className="relative">
      <BlogPostHeader />

      <img
        src={post.image}
        alt={post.title}
        className="w-full h-[420px] object-cover -mt-16"
      />

      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <span className="bg-[#0078bd]/10 text-[#0078bd] text-xs font-medium px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span>📅 {post.date}</span>
              <span>👤 {post.author}</span>
              <span>🕑 {post.readTime}</span>
            </div>
            <ShareIcons />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-[#0078bd] mb-6 leading-tight">
            {post.title}
          </h1>

          <p className="text-gray-700 leading-relaxed mb-8">
            Studying abroad is still a dream for many students, but the global international
            student recruitment process has changed significantly in recent years. Countries
            like Australia, the UK, the USA, and Canada have introduced new rules to manage
            student numbers, improve visa integrity, and address housing and migration
            pressures. Understanding these changes is now essential before applying.
          </p>

          <div className="text-gray-700 leading-relaxed space-y-6">
            <p>
              Studying abroad is still a dream for many students, but the global international
              student recruitment process has changed significantly in recent years. Countries
              like Australia, the UK, the USA, and Canada have introduced new rules to manage
              student numbers, improve visa integrity, and address housing and migration
              pressures. Understanding these changes is now essential before applying.
            </p>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                Australia: Focus on Genuine Students
              </h2>
              <p>
                Australia has tightened its visa process by closely assessing students'
                academic background, financial capacity, and future goals. The Genuine Student
                (GS) requirement plays a key role. While the process is more detailed,
                Australia remains a strong destination due to quality education, part-time
                work rights, and post-study work opportunities.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                United Kingdom: Quality Over Quantity
              </h2>
              <p>
                The UK has reduced dependent options for most postgraduate students and
                increased compliance requirements for universities. Institutions are now more
                selective, focusing on students who are academically prepared and
                career-focused. Shorter course duration and globally recognized degrees still
                make the UK attractive.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                United States: Early Planning Matters
              </h2>
              <p>
                The USA continues to lead in research, innovation, and global exposure.
                However, enhanced visa screening and longer processing times mean students
                must apply early with accurate documentation. A clear study plan is essential
                for success.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                Canada: New Limits, New Choices
              </h2>
              <p>
                Canada has introduced caps on study permits and stricter provincial
                regulations. Rising living costs and housing shortages have also influenced
                policy changes. As a result, students need careful planning and realistic
                budgeting before choosing Canada.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">What Lies Ahead</h2>
              <p>
                Global education is shifting towards quality, transparency, and long-term
                outcomes. Students who prepare early, choose the right course, and seek
                professional guidance will have the best chance of success. At HIMA AUS
                Education Consultancy, we guide students through changing policies, help
                build strong applications, and support smart study-abroad decisions that will
                help turning global education goals into reality.
              </p>
            </div>
          </div>
        </div>

        <RecentPosts excludeId={post.id} />
      </div>
    </div>
  );
};

export default Blog1;
