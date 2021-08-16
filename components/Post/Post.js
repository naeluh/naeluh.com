import ReactMarkdown from 'react-markdown';
import Head from 'next/head';
import PostList from '../PostList';
import { imgOuterContainer, imgInnerContainer } from './post.module.css';
import Image from 'next/image';

const Post = ({ post, posts }) => {
  return (
    <section>
      <Head>
        <title>{post[0].Title}</title>
        <meta name="title" content={post[0].Title} />
        <meta name="description" content={post[0].Description} />
      </Head>

      <div key={post[0].id}>
        <h1>{post[0].Title}</h1>
        {post[0].Image && (
          <div className={imgOuterContainer}>
            <div className={imgInnerContainer}>
              <Image
                src={`https://strapi.hulea.org/${post[0].Image.url}`}
                alt={post[0].Title}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          </div>
        )}
        <ReactMarkdown children={post[0].Description} />
        <a className="dash-link" target="_blank" href={post[0].Link}>
          go to website {`>`}
        </a>
      </div>

      <PostList posts={posts} preview={true} title={post[0].Slug} />
    </section>
  );
};

export default Post;
