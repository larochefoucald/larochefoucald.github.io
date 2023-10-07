import React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { MDXProvider } from '@mdx-js/react';

// thank you https://www.codeconcisely.com/posts/nextjs-relative-image-paths-in-markdown/

function nodeToImage({ node, ...props }) {
  const fileName = node.properties.src.replace('./', '');
  props.src = require(`../blog/${fileName}`);
  props.className = "blog-post-image"
  return <img {...props} />;
}

const BlogMarkdown = ({ markdownContent }) => {
  return (
    <div>	
    <MDXProvider>
		  <Markdown
				components={{ img: nodeToImage}}
          remarkPlugins={[remarkGfm]}
        >
				{markdownContent}
		  </Markdown>
    </MDXProvider>
    </div>
  );
};

export default BlogMarkdown;

