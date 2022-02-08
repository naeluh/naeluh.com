import React from 'react';
import Head from 'next/head';
import styles from './postList.module.css';
import Link from 'next/link';
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
  posts?: PostObject[];
  title?: string;
}> = ({ posts, preview, title }) => {
  const previewClass = preview ? styles.previewList : '';
  return (
    <section className={[previewClass, styles.postList].join(' ')}>
      <Head>
        <title>Work</title>
        <meta name="title" content="Nick Hulea's Work and Projects" />
        <meta name="description" content="Nick Hulea's Work and Projects" />
      </Head>
      {title === undefined && <h1>Work</h1>}
      <ul>
        {posts &&
          posts.map(
            (post: PostObject) =>
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
