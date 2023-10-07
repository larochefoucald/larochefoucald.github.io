

## First post!!!



Managed to get React behaving correctly.
A key step was the ability to render images from relative paths.
Luckily with the help of `react-markdown` and a [genereous soul](https://www.codeconcisely.com/posts/nextjs-relative-image-paths-in-markdown/)
I managed to get it working. All you have to do is specify 
how to transform the markdown into html.


```js
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

```


![Alt Text](./post0/tester.jpg)

