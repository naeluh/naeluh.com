import React from 'react';
import App from '../components/App';
import PostList from '../components/PostList';
import Footer from '../components/Footer';

import { getPosts } from '../lib/api.js';

const Work: React.FC<{ preview: boolean; posts: any }> = ({
  preview,
  posts,
}) => {
  return (
    <App>
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
