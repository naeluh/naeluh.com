import type { Metadata } from 'next';
import Post from '../../../components/Post';
import Gradient from '../../../components/Gradient';
import { getPosts, getPost } from '../../../lib/posts.js';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.Slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const [post] = getPost(slug);
  return {
    title: post?.Title,
    description: post?.Description,
  };
}

export default async function Slug({ params }: Props) {
  const { slug } = await params;
  return (
    <>
      <Post post={getPost(slug)} posts={getPosts()} />
      <Gradient />
    </>
  );
}
