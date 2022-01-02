import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import App from '../../components/App';
import Header from '../../components/Header';
import Post from '../../components/Post';
import Footer from '../../components/Footer';
import { getPosts, getPost } from '../../lib/api';

interface PostObject {
  Slug?: string;
  Title?: string;
  Image?: { url?: string };
  Description?: string;
  id?: string;
  Link?: string;
}

const Slug: React.FC<{ post: PostObject[]; posts: PostObject[] }> = ({
  post,
  posts,
}) => {
  return (
    <App>
      <Header />
      <Post post={post} posts={posts} />
      <Footer />
    </App>
  );
};

export default Slug;

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts();
  return {
    paths: posts?.map((post: { Slug: string }) => `/work/${post.Slug}`) || [],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const posts = await getPosts();
  const post = await getPost(context?.params?.slug);
  return { props: { post, posts } };
};
