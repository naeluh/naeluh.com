import React from 'react';
import Link from 'next/link';
import styles from '../PostList/postList.module.css';

interface PostObject {
  Slug?: string;
  Title?: string;
  Image?: { url?: string };
  Description?: string;
  id?: string;
  Link?: string;
}

const Card: React.FC<{ post?: PostObject; title?: string }> = ({
  post,
  title,
}) => {
  return post ? (
    <>
      <Link href={`/work/${post.Slug}`}>
        <a className={styles.img} href={`/work/${post.Slug}`}>
          {post.Image && (
            <div>
              <img
                src={`https://strapi.hulea.org/${post.Image.url}`}
                alt={post.Title}
                className={styles.imageContainer}
              />
            </div>
          )}
        </a>
      </Link>
      {title === undefined ? (
        <Link href={`/work/${post.Slug}`}>
          <a href={`/work/${post.Slug}`}>
            <h4>{post.Title}</h4>
          </a>
        </Link>
      ) : (
        <Link href={`/work/${post.Slug}`}>
          <a href={`/work/${post.Slug}`}>
            <h4>{post.Title}</h4>
          </a>
        </Link>
      )}
    </>
  ) : (
    <></>
  );
};

export default Card;
