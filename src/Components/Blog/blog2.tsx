
import { BlogPostHeader } from './Component/BlogPostHeader';
import { ShareIcons } from './Component/ShareIcons';
import { RecentPosts } from './Component/RecentPosts';
import { blogs } from './blogsData';

const post = blogs[1];

const Blog2 = () => {
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
            Choosing the right guidance can make a big difference in shaping your future. At
            Himalus Consultancy, we are committed to helping students and professionals make
            informed decisions for education and career growth.
          </p>

          <div className="text-gray-700 leading-relaxed space-y-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                {post.title}
              </h2>
              <p>
                Choosing the right guidance can make a big difference in shaping your future.
                At <strong>Himalus Consultancy</strong>, we are committed to helping students
                and professionals make informed decisions for education and career growth.
              </p>
            </div>

            <p>
              We understand that every individual has unique goals. That's why we provide
              personalized consultancy services, guiding our clients step by step—from
              choosing the right course or institution to preparing the necessary
              documentation and planning ahead.
            </p>

            <p>
              Our team believes in transparency, honesty, and reliability. We focus on
              providing clear information and practical solutions so our clients feel
              confident throughout the entire process. Whether it's study abroad counseling,
              career guidance, or application support, we aim to make the journey smooth and
              stress-free.
            </p>

            <p>
              At <strong>Himalus Consultancy</strong>, your success is our priority. We don't
              just offer services—we build long-term relationships based on trust and
              results.
            </p>
          </div>
        </div>

        <RecentPosts excludeId={post.id} />
      </div>

    </div>
  );
};

export default Blog2;
