import React from 'react';
import styles from './postList.module.css';
import Card from '../Card';

interface PostObject {
  Slug?: string;
  Title?: string;
  Image?: { url?: string };
  Description?: string;
  id?: string;
  Link?: string;
}

const PostList: React.FC<{
  preview?: boolean;
  posts?: any[];
  title?: string;
}> = ({ posts, preview, title }) => {
  const previewClass = preview ? styles.previewList : '';
  return (
    <section className={[previewClass, styles.postList].join(' ')}>
      {title === undefined && <h1>Work</h1>}
      <ul>
        {posts &&
          posts.map(
            (post: any) =>
              post.Slug !== title && (
                <li key={post.Slug}>
                  <Card post={post} title={title} />
                </li>
              )
          )}
      </ul>
    </section>
  );
};

export default PostList;
