import React from 'react';
import Head from 'next/head';
import { postList, previewList, img } from './postList.module.css';
import Image from 'next/image';
import Link from 'next/link';

const PostList = ({ posts, preview, title }) => {
  const previewClass = preview ? previewList : '';
  return (
    <section className={[previewClass, postList].join(' ')}>
      <Head>
        <title>Work</title>
        <meta name="title" content="Nick Hulea's Work and Projects" />
        <meta name="description" content="Nick Hulea's Work and Projects" />
      </Head>
      {title === undefined && <h1>Work</h1>}
      <ul>
        {posts.map(
          (post) =>
            post.Slug !== title && (
              <li key={post.Slug}>
                <Link href={`/work/${post.Slug}`}>
                  <a className={img} href={`/work/${post.Slug}`}>
                    {post.Image && (
                      <Image
                        src={`https://strapi.hulea.org/${post.Image.url}`}
                        alt={post.Title}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
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
