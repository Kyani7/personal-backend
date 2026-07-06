import React from "react";

const Key = ({ topic, heading, title }) => {
  return (
    <section className="flex gap-5 pb-2">
      {/* Circle */}
      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
        {topic}
      </div>

      {/* Content */}
      <div>
        <h3 className="text-gray-900 font-bold text-l">
          {heading}
        </h3>

        <p className="text-gray-700 mt-2">
          {title}
        </p>
      </div>
    </section>
  );
};

export default Key;