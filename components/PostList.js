import { useQuery } from '@apollo/react-hooks'
import { NetworkStatus } from 'apollo-client'
import gql from 'graphql-tag'
import ErrorMessage from './ErrorMessage'
import Head from 'next/head'

export const ALL_POSTS_QUERY = gql`
  query {
    webs {
      _id
      Title
      Image {
        url
        ext
        provider
        size
      }
      Description
      Data
      URL
      createdAt
      updatedAt
    }
  }
`

export const allPostsQueryVars = {
  skip: 0,
  first: 10,
}

export default function PostList({ title, extraClass }) {
  const { loading, error, data, fetchMore, networkStatus } = useQuery(
    ALL_POSTS_QUERY,
    {
      // variables: allPostsQueryVars,
      // Setting this value to true will make the component rerender when
      // the "networkStatus" changes, so we are able to know if it is fetching
      // more data
      notifyOnNetworkStatusChange: true,
    }
  )

  const loadingMorePosts = networkStatus === NetworkStatus.fetchMore

  if (error) return <ErrorMessage message="Error loading posts." />
  if (loading && !loadingMorePosts) return <div>Loading</div>

  const { webs } = data

  return (
    <section className={extraClass}>
      <Head>
        <>
          <title>Work</title>
          <meta name="title" content="Nick Hulea's Work and Projects" />
          <meta name="description" content="Nick Hulea's Work and Projects" />
        </>
      </Head>
      {title === undefined ? <h1>Work</h1> : ''}
      <ul>
        {webs.map((post, index) =>
          post.Slug !== title ? (
            <li key={index + 1}>
              <a props={post._id} href={`/work/${post.Slug}`}>
                {post.Image !== null /* && title === undefined */ ? (
                  <span
                    className={`imgHero ${extraClass}__image`}
                    style={{
                      backgroundImage: `url(https://strapi.hulea.org/${post.Image.url})`,
                    }}
                  />
                ) : (
                  ''
                )}
                {title === undefined ? (
                  <h2>{post.Title}</h2>
                ) : (
                  <p>{post.Title}</p>
                )}
              </a>
            </li>
          ) : (
            ''
          )
        )}
      </ul>
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
        .worklist {
          padding: 0;
        }
        .worklist > ul {
          display: flex;
          flex-flow: row wrap;
          justify-content: space-between;
        }
        .worklist > ul > li {
          width: 32%;
          margin-top: 10px;
          margin-bottom: 10px;
          position: relative;
          box-sizing: border-box;
        }
        .worklist > ul > li > a > span.imgHero {
          clear: both;
          display: block;
          margin-bottom: 0;
          padding-bottom: 40.7%;
          border-top: 20px solid #111;
          border-left: 20px solid #111;
          border-right: 20px solid #111;
          background-size: 140%;
          background-color: #111;
          background-repeat: no-repeat;
          background-position: center center;
        }
        @media (max-width: 815px) {
          .worklist > ul > li {
            width: 48%;
          }
        }
        @media (max-width: 555px) {
          .worklist > ul > li {
            width: 100%;
          }
        }
        @media only screen and (max-width: 480px) {
          h2 {
            font-size: 20px;
            padding: 10px 15px;
            bottom: 0;
            left: 0;
            margin: 0;
            position: relative;
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
