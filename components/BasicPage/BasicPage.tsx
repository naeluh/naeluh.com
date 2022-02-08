import { useQuery } from '@apollo/react-hooks';
import { NetworkStatus } from 'apollo-client';
import gql from 'graphql-tag';
import ErrorMessage from '../ErrorMessage';
import ReactMarkdown from 'react-markdown';
import { useRouter } from 'next/router';
import Head from 'next/head';

export const ALL_POSTS_QUERY = gql`
  query basics($url: String!) {
    basics(where: { URL: $url }, limit: 1) {
      Title
      _id
      Image {
        url
        ext
        provider
        size
      }
      Body
      URL
      createdAt
      updatedAt
    }
  }
`;

export default function BasicPage() {
  const router = useRouter();

  const allPostsQueryVars = {
    url: router.pathname.replace('/', ''),
  };

  const { loading, error, data, networkStatus } = useQuery(ALL_POSTS_QUERY, {
    variables: allPostsQueryVars,
    // Setting this value to true will make the component rerender when
    // the "networkStatus" changes, so we are able to know if it is fetching
    // more data
    notifyOnNetworkStatusChange: true,
  });

  const loadingMorePosts = networkStatus === NetworkStatus.fetchMore;

  if (error) return <ErrorMessage message="Error loading posts." />;
  if (loading && !loadingMorePosts) return <div>Loading</div>;

  const { basics } = data;

  return (
    <section>
      <Head>
        <title>{basics[0].Title}</title>
        <meta name="title" content={basics[0].Title} />
        <meta name="description" content={basics[0].Body} />
      </Head>
      <div key={basics[0].id}>
        <h1>{basics[0].Title}</h1>
        <div className="basicPage">
          <ReactMarkdown children={basics[0].Body} />
        </div>
      </div>
      <style jsx>{`
        * {
          box-sizing: border-box;
        }
        li {
          display: block;
          margin-bottom: 1em;
          line-height: 1.25;
        }
        a {
          text-decoration: none;
          padding-bottom: 0;
          border: 0;
          color: #000;
          font-weight: 400;
        }
        ul {
          margin: 0;
          padding: 0;
        }
        h4 {
          line-height: 1.5;
        }
        @media only screen and (max-width: 480px) {
          * {
            box-sizing: border-box;
          }
          li {
            display: block;
            margin-bottom: 1em;
            line-height: 1.25;
          }
          a {
            text-decoration: none;
            padding-bottom: 0;
            border: 0;
            color: #000;
            font-weight: 400;
          }
          ul {
            margin: 0;
            padding: 0;
          }
          section h4 {
            line-height: 1.5;
            font-size: 20;
          }
        }
      `}</style>
    </section>
  );
}
