// BlogList.js
import React from 'react';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';

import first from '../blog/post0/first.md'

export const blogMeta = [
  { 
    id: 'first',
    title: 'FIRST',
    markdown: first, 
    subtitle: "if you ain't first you're last"
  },
];

const BlogList = () => {
  return (
        <ListGroup as="ol" numbered>
          <h2 className="p-3"> Blog List </h2>
          {
          blogMeta.map((blog) => (
          <ListGroup.Item 
            as="li"
            className="d-flex justify-content-between align-items-start p-3"
            key={blog.id}>
            <div className="ms-2 me-auto">
              <div className="fw-bold pb-2">
                <Link to={`/blog/${blog.id}`} className="fw-bold text-success">
                  {blog.title}
                </Link>
              </div> 
              {blog.subtitle}
            </div>
          </ListGroup.Item>
        ))}
  </ListGroup>
  );
};

export default BlogList;

