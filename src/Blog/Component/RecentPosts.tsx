import React from 'react';
import { blogs } from '../blogsData';

export const RecentPosts = ({ excludeId }: { excludeId: number }) => {
  const posts = blogs.filter((b) => b.id !== excludeId);

  return (
    <div className="border rounded-2xl p-6 h-fit">
      <h3 className="text-xl font-bold text-blue-600 mb-4">Recent Posts</h3>
      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <a
            key={post.id}
            href={`/blogs/${post.id}`}
            className="flex gap-3 group"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
            />
            <div>
              <p className="text-sm font-semibold leading-snug group-hover:text-blue-600">
                {post.title}
              </p>
              <p className="text-xs text-gray-500 mt-1">{post.date}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
