import { useQuery } from '@apollo/react-hooks'
import { NetworkStatus } from 'apollo-client'
import gql from 'graphql-tag'
import ErrorMessage from './ErrorMessage'
import ReactMarkdown from 'react-markdown'
import { useRouter } from 'next/router'
import Head from 'next/head'
import PostList from '../components/PostList'

export const ALL_POSTS_QUERY = gql`
  query webs($id: String!) {
    webs(where: { Slug: $id }, limit: 1) {
      _id
      Title
      Description
      Slug
      Link
      createdAt
      updatedAt
      Image {
        url
        ext
        provider
        size
      }
    }
  }
`

export default function Post() {
  const router = useRouter()

  const allPostsQueryVars = {
    id: router.query.id,
  }

  const { loading, error, data, networkStatus } = useQuery(ALL_POSTS_QUERY, {
    variables: allPostsQueryVars,
    // Setting this value to true will make the component rerender when
    // the "networkStatus" changes, so we are able to know if it is fetching
    // more data
    notifyOnNetworkStatusChange: true,
  })

  const loadingMorePosts = networkStatus === NetworkStatus.fetchMore

  if (error) return <ErrorMessage message="Error loading posts." />
  if (loading && !loadingMorePosts) return <div>Loading</div>

  const { webs } = data

  return (
    <section>
      <Head>
        <title>{webs[0].Title}</title>
        <meta name="title" content={webs[0].Title} />
        <meta name="description" content={webs[0].Description} />
      </Head>

      {webs.map((post) => (
        <div key={post.id}>
          <h1>{post.Title}</h1>
          {post.Image !== null ? (
            <span
              className="imgHero"
              style={{
                backgroundImage: `url(https://strapi.hulea.org/${post.Image.url})`,
              }}
            />
          ) : (
            ''
          )}
          <ReactMarkdown source={post.Description} />
          <a className="dash-link" target="_blank" href={post.Link}>
            go to website {`>`}
          </a>
        </div>
      ))}

      <PostList title={webs[0].Slug} extraClass="worklist" />

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
