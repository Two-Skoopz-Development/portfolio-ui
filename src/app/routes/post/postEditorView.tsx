import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';

import { ContentLayout } from '../../../components/layouts';
import PostAPI from '../../../features/posts/api/post';
import TagAPI from '../../../features/posts/api/tag';
import { PostView, PostEditor } from '../../../features/posts/components';
import { Post, SelectTag, Tag } from '../../../features/posts/types';

export const PostEditorView: React.FC = () => {
  const { getToken } = useAuth();
  const { postId } = useParams();
  const navigate = useNavigate();
  const [preview, setPreview] = useState<boolean>(false);
  const [post, setPost] = useState<Post>({
    title: 'new post',
    content: '',
  });
  const [selectedTags, setSelectedTags] = useState<{
    [key: number]: SelectTag;
  }>({});

  const fetchTags = async () => {
    const tags = await TagAPI.GetList();
    const tagMap: { [key: number]: SelectTag } = {};
    tags.map((tag: Tag) => {
      if (!tag.id) throw 'Error';
      tagMap[tag.id] = { selected: false, tag: tag };
    });

    console.log(post.tags);
    if (post.tags) {
      for (var i = 0; i < post.tags.length; i++) {
        if (!post.tags[i].id) {
          alert(`error occured: ${post.tags[i].id}`);
          continue;
        }
        const key: number = post.tags[i].id as number;
        tagMap[key].selected = true;
      }
    }
    console.log(tagMap);
    setSelectedTags(tagMap);
  };

  const submitPostData = async () => {
    try {
      let retPost: Post | undefined;
      let token = await getToken();
      if (postId && token) {
        retPost = await PostAPI.Update(token, post);
      } else if (token) {
        retPost = await PostAPI.Create(token, post);
      } else {
        throw 'error';
      }

      if (!retPost) {
        alert('Failed to create post');
      } else {
        navigate(`/post/${retPost.uuid}`);
      }
    } catch {}
  };

  useEffect(() => {
    const fetchData = async () => {
      if (postId) {
        const postData = await PostAPI.GetByID(postId);
        setPost(postData);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      fetchTags();
    };
    fetchData();
  }, [post]);

  const selected =
    'inline-block p-4 text-platinum rounded-t-lg active dark:text-blue-500 bg-space-cadet-blue active';
  const notSelected =
    'inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300';

  // const selected =
  //   'bg-space-cadet-blue text-platinum px-10 py-5 w-28 border-space-cadet-blue border-2';
  // const notSelected =
  //   'bg-slate-100 text-black px-10 py-5 w-28 border-space-cadet-blue border-2';

  return (
    <ContentLayout>
      <div className="m-auto">
        <input
          className="bg-space-cadet-blue text-platinum px-4 py-2 rounded-lg mb-3"
          type="button"
          value={'Save Post'}
          onClick={() => {
            submitPostData();
          }}
        />
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 mt">
          <li>
            <a
              aria-current="page"
              className={preview ? selected : notSelected}
              onClick={() => {
                setPreview(true);
              }}
            >
              Preview
            </a>
          </li>
          <li>
            <a
              aria-current="page"
              className={!preview ? selected : notSelected}
              onClick={() => {
                setPreview(false);
              }}
            >
              Edit
            </a>
          </li>
        </ul>
        {preview ? (
          <PostView post={post} />
        ) : (
          <PostEditor
            post={post}
            updatePost={setPost}
            selectedTags={selectedTags}
            updateSelectedTags={setSelectedTags}
          />
        )}
      </div>
    </ContentLayout>
  );
};
