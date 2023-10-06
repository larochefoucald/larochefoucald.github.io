// BlogList.js
import React from 'react';
import { Link } from 'react-router-dom';

import simple from '../blog/simple.md'

export const blogMeta = [
	{ id: 'simple', markdown: simple, title: 'Blog Post 1' },
	{ id: 2, title: 'Blog Post 2' },
	// Add more blog posts
];



const BlogList = () => {
  // Fetch the list of blogs (you can store them as an array or fetch from an API)
  return (
    <div>
      <h2>Blog List</h2>
      <ul>
        {blogMeta.map((blog) => (
          <li key={blog.id}>
            <Link 
              to={`/blog/${blog.id}`}
          >{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;

