import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './Blog/Main';
import Blog1 from './Blog/blog1';
import Blog2 from './Blog/blog2';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/blogs" element={<Main />} />
      <Route path="/blogs/1" element={<Blog1 />} />
      <Route path="/blogs/2" element={<Blog2 />} />
    </Routes>
  );
}

export default App;