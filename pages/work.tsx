import React from 'react';
import App from '../components/App';
import Header from '../components/Header';
import PostList from '../components/PostList';
import Footer from '../components/Footer';
import { getPosts } from '../lib/api';

const Work: React.FC<{ preview: boolean; posts: Array<object> }> = ({
  preview,
  posts,
}) => {
  return (
    <App>
      <Header />
      <PostList posts={posts} />
      <Footer />
    </App>
  );
};

export default Work;

export async function getStaticProps({ preview = false }) {
  const posts = await getPosts();
  return {
    props: { preview, posts },
  };
}
