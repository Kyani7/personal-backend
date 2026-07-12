import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogs } from '../blogsData';

export const Body1 = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === "All" || blog.category.toLowerCase() === activeFilter.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="flex flex-col md:flex-row justify-between mb-10 gap-4">
        <div className="flex gap-3">
          <button onClick={() => setActiveFilter("All")} className={`px-6 py-2 rounded-full ${activeFilter === "All" ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}>All</button>
          <button onClick={() => setActiveFilter("Educational")} className={`px-6 py-2 rounded-full ${activeFilter === "Educational" ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}>Educational</button>
          <button onClick={() => setActiveFilter("General")} className={`px-6 py-2 rounded-full ${activeFilter === "General" ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}>General</button>
        </div>

        <input
          type="text"
          placeholder="Search blogs..."
          className="w-full md:w-96 p-4 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {filteredBlogs.map(blog => (
          <div key={blog.id} className="bg-white border rounded-2xl overflow-hidden hover:shadow-xl transition-all">
            <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover" />
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-3">{blog.date} • By {blog.author}</div>
              <h3 className="font-semibold text-2xl mb-4 leading-tight">{blog.title}</h3>
              <p className="text-gray-600 mb-6 line-clamp-4">{blog.excerpt}</p>

              <Link
                to={`/blogs/${blog.id}`}
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700"
              >
                Read more →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
