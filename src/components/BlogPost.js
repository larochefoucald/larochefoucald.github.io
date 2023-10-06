import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { blogMeta } from './BlogList'; // Import the blogs array

const BlogPost = ({ match, location }) => {
  const { id } = match.params;
  const blog = blogMeta.find((blog) => blog.id === id); // Find the blog based on the ID

  const [text, setText] = useState(null);
	
	console.log(blog.markdown)

  useEffect(() => {
    fetch(blog.markdown)
      .then((response) =>  response.text() )
      .then((text) =>  setText(text))
      .catch((error) => {
        console.error('Error fetching file:', error);
      });
  }, [blog.markdown]);


  return (
    <div>
      <Link to="/">Return to Home Page</Link>
      <h1>THIS IS MY BLOG</h1>
      <ReactMarkdown children={text} remarkPlugins={[remarkGfm]} />
    </div>
  );
};

export default BlogPost;

