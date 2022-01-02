import React from 'react';
import Link from 'next/link';

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
        <a href={`/work/${post.Slug}`}>
          {post.Image && (
            <div>
              <div>
                <img
                  src={`/.netlify/functions/ipx/f_webp/https://strapi.hulea.org/${post.Image.url}`}
                  alt={post.Title}
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                />
              </div>
            </div>
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
    </>
  ) : (
    <></>
  );
};

export default Card;
