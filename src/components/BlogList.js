// BlogList.js
import React from 'react';
import { Link } from 'react-router-dom';

import simple from '../blog/post0/simple.mdx'

export const blogMeta = [
	{ id: 'simple', markdown: simple, title: 'Blog Post 1' },
	{ id: 2, title: 'Blog Post 2' },
];

const BlogList = () => {
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

