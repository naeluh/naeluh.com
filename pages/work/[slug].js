import App from '../../components/App'
import Header from '../../components/Header'
import Post from '../../components/Post'
import Footer from '../../components/Footer'
import { getPosts, getPost } from '../../lib/api'

const Slug = ({ post, posts }) => {
  return (
    <App>
      <Header />
      <Post post={post} posts={posts} />
      <Footer />
    </App>
  )
}

export default Slug

export async function getStaticPaths({}) {
  const posts = await getPosts()
  return {
    paths: posts?.map((post) => `/work/${post.Slug}`) || [],
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const posts = await getPosts()
  const post = await getPost(params.slug)
  return { props: { post, posts } }
}
