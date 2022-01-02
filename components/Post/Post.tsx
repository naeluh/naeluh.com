import ReactMarkdown from 'react-markdown';
import Head from 'next/head';
import PostList from '../PostList';
import styles from './post.module.css';

interface PostObject {
  Slug?: string;
  Title?: string;
  Image?: { url?: string };
  Description?: string;
  id?: string;
  Link?: string;
}

const Post: React.FC<{
  post?: PostObject[];
  posts?: PostObject[];
}> = ({ post, posts }) => {
  return post ? (
    <section>
      <Head>
        <title>{post[0].Title}</title>
        <meta name="title" content={post[0].Title} />
        <meta name="description" content={post[0].Description} />
      </Head>

      <div key={post[0].id}>
        <h1>{post[0].Title}</h1>
        {post[0].Image && (
          <div className={styles.imgOuterContainer}>
            <div className={styles.imgInnerContainer}>
              <img
                src={`/.netlify/functions/ipx/f_webp/https://strapi.hulea.org/${post[0].Image.url}`}
                alt={post[0].Title}
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              />
            </div>
          </div>
        )}
        {post[0].Description && (
          <ReactMarkdown children={post[0].Description} />
        )}
        <a className="dash-link" target="_blank" href={post[0].Link}>
          go to website {`>`}
        </a>
      </div>

      <PostList posts={posts} preview={true} title={post[0].Slug} />
    </section>
  ) : (
    <></>
  );
};

export default Post;
