import { Link } from 'react-router-dom';

export interface Blog {
  id: string | number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

interface BlogCardProps {
  blog: Blog;
  imageHeight?: string;
  cardClassName?: string;
}

export const BlogCard = ({ blog, imageHeight = "h-64", cardClassName = "" }: BlogCardProps) => {
  return (
    <div className={`bg-white overflow-hidden hover:shadow-2xl transition-all ${cardClassName}`}>
      <img src={blog.image} alt={blog.title} className={`w-full ${imageHeight} object-cover`} />
      <div className="p-6">
        <div className="text-sm text-gray-500 mb-3">
          {blog.date} • By {blog.author}
        </div>
        <h3 className="font-semibold text-2xl mb-4 leading-tight">{blog.title}</h3>
        <p className="text-gray-600 mb-6 line-clamp-4">{blog.excerpt}</p>

        <Link
          to={`/blog&news/${blog.id}`}
          className="inline-flex items-center text-[#0078bd] font-medium hover:text-secondary"
        >
          Read more →
        </Link>
      </div>
    </div>
  );
};