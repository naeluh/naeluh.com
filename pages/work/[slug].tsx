import React from 'react';
import { GetStaticPaths } from 'next';
import App from '../../components/App';
import Header from '../../components/Header';
import Post from '../../components/Post';
import Footer from '../../components/Footer';
import Gradient from '../../components/Gradient';
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
      <Gradient />
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

type Params = {
  params: {
    slug: string;
  };
};

export const getStaticProps = async ({ params }: Params) => {
  const { slug } = params;
  const posts = await getPosts();
  const post = await getPost(slug);
  return { props: { post, posts } };
};
