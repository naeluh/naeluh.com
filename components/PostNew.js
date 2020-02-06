import { useQuery } from "@apollo/react-hooks";
import { NetworkStatus } from "apollo-client";
import gql from "graphql-tag";
import ErrorMessage from "./ErrorMessage";
import ReactMarkdown from "react-markdown";
import { withRouter } from "next/router";
import Head from "next/head";

export const ALL_POSTS_QUERY = gql`
  query webs($id: String!) {
    webs(where: { URL: $id }, limit: 1) {
      Title
      _id
      Image {
        url
        ext
        provider
        size
      }
      Description
      Data
      URL
      Link
      createdAt
      updatedAt
    }
  }
`;

export const allPostsQueryVars = {
  id: query.id
};

function Post() {
  const { loading, error, data, networkStatus } = useQuery(ALL_POSTS_QUERY, {
    // variables: allPostsQueryVars,
    // Setting this value to true will make the component rerender when
    // the "networkStatus" changes, so we are able to know if it is fetching
    // more data
    notifyOnNetworkStatusChange: true
  });

  const loadingMorePosts = networkStatus === NetworkStatus.fetchMore;

  if (error) return <ErrorMessage message="Error loading posts." />;
  if (loading && !loadingMorePosts) return <div>Loading</div>;

  const { webs } = data;

  return (
    <section>
      <ul>
        {webs.map((post, index) => (
          <li key={post._id}>
            <div>
              <p>
                <a href={post.URL}>{post.Title}</a>
              </p>
            </div>
            <img
              width={100}
              src={`https://strapi.hulea.org/${post.Image.url}`}
            />
            <ReactMarkdown source={post.Description} />
          </li>
        ))}
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
  );
}

export default withRouter(Post);
