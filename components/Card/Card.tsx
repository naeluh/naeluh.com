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
      <Link href={`/work/${post.Slug}`} className={styles.img}>
        {post.Image && (
          <div>
            <img
              src={`https://strapi.hulea.org/${post.Image.url}`}
              alt={post.Title}
              className={styles.imageContainer}
            />
          </div>
        )}
      </Link>
      {title === undefined ? (
        <Link href={`/work/${post.Slug}`}>
          <h4>{post.Title}</h4>
        </Link>
      ) : (
        <Link href={`/work/${post.Slug}`}>
          <h4>{post.Title}</h4>
        </Link>
      )}
    </>
  ) : (
    <></>
  );
};

export default Card;
