import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
// import remarkHtml from 'rehype-raw';

import { Post, Tag } from '../types';

interface PostViewInterface {
  post: Post;
}

export const PostView: React.FC<PostViewInterface> = ({
  post,
}: PostViewInterface) => {
  const tags = post.tags
    ?.map((tag: Tag) => {
      return tag.name;
    })
    .join(', ');

  return (
    <>
      <p className="text-7xl font-bold text-center">{post?.title}</p>
      <p className="text-center my-5">
        Created: {post?.created_at?.split('T')[0]}
      </p>
      {tags && tags.length > 0 && (
        <p className="text-center my-5">Tags: {tags}</p>
      )}
      <div className="prose">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </div>
    </>
  );
};
