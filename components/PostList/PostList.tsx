import React from 'react';
import Head from 'next/head';
import styles from './postList.module.css';
import Link from 'next/link';

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
                  <Link href={`/work/${post.Slug}`}>
                    <a className={styles.img} href={`/work/${post.Slug}`}>
                      {post.Image && (
                        <img
                          src={`/.netlify/functions/ipx/f_webp/https://strapi.hulea.org/${post.Image.url}`}
                          alt={post.Title}
                          style={{
                            objectFit: 'cover',
                            objectPosition: 'center',
                          }}
                        />
                      )}
                    </a>
                  </Link>
                  {title === undefined ? (
                    <Link href={`/work/${post.Slug}`}>
                      <a href={`/work/${post.Slug}`}>
                        <h2>{post.Title}</h2>
                      </a>
                    </Link>
                  ) : (
                    <Link href={`/work/${post.Slug}`}>
                      <a href={`/work/${post.Slug}`}>
                        <p>{post.Title}</p>
                      </a>
                    </Link>
                  )}
                </li>
              )
          )}
      </ul>
    </section>
  );
};

export default PostList;
