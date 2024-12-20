import React from 'react';
import { Post } from '../types';
import { Link } from 'react-router-dom';

interface PostLinkProps {
  post: Post;
}

export const PostLink: React.FC<PostLinkProps> = ({ post }: PostLinkProps) => {
  if (post.uuid === undefined) {
    return <></>;
  }
  return (
    <>
      <Link to={`/post/${post.uuid}`}>
        <div className="box bg-white shadow-md rounded-lg overflow-hidden">
          <div className="thumbnail">
            <img
              src="https://placehold.co/600x400"
              className="w-full h48 object-cover"
            />
          </div>
          <div className="p-4">
            <h2 className="title text-xl font-semibold mb-2">{post.title}</h2>
            <p className="description text-gray-600 mb-4">
              This is a short description of the box content.
            </p>
            <span className="date text-sm text-gray-500">
              {post.created_at?.split('T')[0]}
            </span>
          </div>
        </div>
      </Link>
    </>
  );
};
