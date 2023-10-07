import React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { MDXProvider } from '@mdx-js/react';

// thank you https://www.codeconcisely.com/posts/nextjs-relative-image-paths-in-markdown/
const BlogMarkdown = ({ markdownContent }) => {
  return (
    <div>	
    <MDXProvider>
		  <Markdown
				components={{
					img: function ({ node, ...props }) {
							const fileName = node.properties.src.replace('./', '');
              props.src = require(`../blog/${fileName}`);
							return <img {...props} />;
						},
					}}
          remarkPlugins={[remarkGfm]}
        >
				{markdownContent}
		  </Markdown>

    </MDXProvider>
    </div>
  );
};

export default BlogMarkdown;

