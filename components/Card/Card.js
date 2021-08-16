import React from 'react';

const Card = ({ post }) => {
  return (
    <>
      <Link href={`/work/${post.Slug}`}>
        <a className={img} href={`/work/${post.Slug}`}>
          {post.Image && (
            <div className={imgOuterContainer}>
              <div className={imgInnerContainer}>
                <Image
                  src={`https://strapi.hulea.org/${post.Image.url}`}
                  alt={post.Title}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
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
  );
};

export default Card;
