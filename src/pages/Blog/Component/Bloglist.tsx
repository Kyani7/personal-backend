import { BlogCard } from './BlogCard';
import type { Blog } from "./BlogCard"
interface BlogListProps {
  blogs: Blog[];
  imageHeight?: string;
  cardClassName?: string;
}

export const BlogList = ({ blogs, imageHeight, cardClassName }: BlogListProps) => {
  if (blogs.length === 0) {
    return (
      <p className="text-center text-gray-500 py-10">No blogs found.</p>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} imageHeight={imageHeight} cardClassName={cardClassName} />
      ))}
    </div>
  );
};