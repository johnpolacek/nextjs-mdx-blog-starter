import Wrapper from "../src/layout/Wrapper"
import Home from "../src/views/Home"
import config from "../blog.config.js"
import { getAllPosts } from "../src/api"

const HomePage = ({ posts }) => (
  <Wrapper url="/" title={config.title} description={config.description}>
    <Home posts={posts} />
  </Wrapper>
)

export async function getStaticProps() {
  const posts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ])

  return {
    props: { posts },
  }
}

export default HomePage
