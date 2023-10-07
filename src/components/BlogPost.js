import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Container from 'react-bootstrap/Container';
import BlogMarkdown  from './BlogMarkdown';
import { blogMeta } from './BlogList'; // Import the blogs array
import classNames from 'classnames';

import Nav from 'react-bootstrap/Nav';


const BlogPost = ({ match, location }) => {
  const { id } = match.params;
  const [text, setText] = useState(null);

  const blog = blogMeta.find((blog) => blog.id === id); // fix this: pass blog from Link in BlogList? Find the blog based on the ID

  useEffect(() => {
		if (blog && blog.markdown){
			fetch(blog.markdown)
				.then((response) =>  response.text() )
				.then((text) =>  setText(text))
				.catch((error) => {
					console.error('Error fetching file:', error);
				});
		}
  }, [blog]);

  return (
    <div>
    	<Nav
      	activeKey="/home"
    	>
				<Nav.Item>
					<Nav.Link href="/blog" className="text-success">Return to Home Page</Nav.Link>
				</Nav.Item>
			</Nav>
			<hr />
      <Container className={
        classNames(
          'ml-5',
          'mr-0',
          'mt-5',
        )
      }>
      <BlogMarkdown markdownContent={text} />
		</Container>
    </div>
  );
};

export default BlogPost;
