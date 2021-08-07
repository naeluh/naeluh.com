import gql from 'graphql-tag'
import ErrorMessage from './ErrorMessage'
import ReactMarkdown from 'react-markdown'
import { useRouter } from 'next/router'
import Head from 'next/head'
import PostList from '../components/PostList'

const Post = ({ post, posts }) => {
  console.log(post[0].Image)

  return (
    <section>
      <Head>
        <title>{post[0].Title}</title>
        <meta name="title" content={post[0].Title} />
        <meta name="description" content={post[0].Description} />
      </Head>

      <div key={post[0].id}>
        <h1>{post[0].Title}</h1>
        {post[0].Image !== null ? (
          <span
            className="imgHero"
            style={{
              backgroundImage: `url(https://strapi.hulea.org/${post[0].Image.url})`,
            }}
          />
        ) : (
          ''
        )}
        <ReactMarkdown children={post[0].Description} />
        <a className="dash-link" target="_blank" href={post[0].Link}>
          go to website {`>`}
        </a>
      </div>

      <PostList posts={posts} extraClass="worklist" />

      <style jsx>{`
        * {
          box-sizing: border-box;
        }
        a {
          position: relative;
          display: block;
        }
        ul {
          margin: 0;
          padding: 0;
          list-style: none;
        }
        li {
          margin-bottom: 2em;
        }
        h2 {
          position: absolute;
          bottom: 5px;
          left: 25px;
          padding: 20px 30px;
          color: #fff;
          background-color: #111;
        }
        p {
          background-color: #111;
          color: #fff;
          letter-spacing: -1.5px;
          font-weight: 700;
          font-size: 20px;
          padding: 10px 15px;
          bottom: 0;
          left: 0;
          margin: 0;
        }
        @media only screen and (max-width: 480px) {
          h2 {
            font-size: 15px;
            padding: 10px 15px;
            bottom: 0;
            left: 0;
            margin: 0;
          }
          p {
            font-size: 20px;
            padding: 10px 15px;
            bottom: 0;
            left: 0;
            margin: 0;
          }
        }
      `}</style>
    </section>
  )
}

export default Post
