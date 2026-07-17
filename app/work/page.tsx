import type { Metadata } from 'next';
import PostList from '../../components/PostList';
import { getPosts } from '../../lib/posts.js';

export const metadata: Metadata = {
  title: 'Work',
  description: "Nick Hulea's Work and Projects",
};

export default function Work() {
  return <PostList posts={getPosts()} />;
}
