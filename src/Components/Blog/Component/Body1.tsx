import { useState } from 'react';
import { blogs } from '../blogsData';
import { BlogList } from './Bloglist';

export const Body1 = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      activeFilter === "All" || blog.category.toLowerCase() === activeFilter.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="flex flex-col md:flex-row justify-between mb-10 gap-4">
        <div className="flex gap-3">
          <button
            onClick={() => setActiveFilter("All")}
            className={`px-6 py-2 rounded-full ${activeFilter === "All" ? 'bg-[#0078bd] text-white' : 'bg-gray-100'}`}
          >
            All
          </button>
          <button
            onClick={() => setActiveFilter("Educational")}
            className={`px-6 py-2 rounded-full ${activeFilter === "Educational" ? 'bg-[#0078bd] text-white' : 'bg-gray-100'}`}
          >
            Educational
          </button>
          <button
            onClick={() => setActiveFilter("General")}
            className={`px-6 py-2 rounded-full ${activeFilter === "General" ? 'bg-[#0078bd] text-white' : 'bg-gray-100'}`}
          >
            General
          </button>
        </div>

        <input
          type="text"
          placeholder="Search blogs..."
          className="w-full md:w-96 p-4 border border-gray-300 rounded-full focus:outline-none focus:border-[#0078bd]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <BlogList blogs={filteredBlogs} />
    </div>
  );
};