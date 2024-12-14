import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownInterface {
  content: string;
}

const Markdown: React.FC<MarkdownInterface> = ({
  content,
}: MarkdownInterface) => {
  return (
    <div className="container">
      <div className="columns-1">
        <div className="w-full ">
          <ReactMarkdown className="prose" remarkPlugins={[remarkGfm]}>
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default Markdown;
