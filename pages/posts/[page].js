import config from "../../blog.config"
import Wrapper from "../../src/layout/Wrapper"
import Posts from "../../src/views/Posts"
import { getAllPosts } from "../../src/api"

const PostsPage = ({ posts, prevPosts, nextPosts }) => (
  <Wrapper url="/" title={config.title} description={config.description}>
    <Posts posts={posts} prevPosts={prevPosts} nextPosts={nextPosts} />
  </Wrapper>
)

export async function getStaticProps({ params }) {
  const posts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ])

  const pageIndex = parseInt(params.page)
  const startIndex = pageIndex * config.postsPerPage
  const endIndex = (pageIndex + 1) * config.postsPerPage

  const prevPosts = pageIndex > 0 ? pageIndex - 1 : null
  const nextPosts = endIndex >= posts.length ? null : pageIndex + 1

  return {
    props: { posts: posts.slice(startIndex, endIndex), prevPosts, nextPosts },
  }
}

export async function getStaticPaths() {
  const numPages = getAllPosts().length % config.postsPerPage

  return {
    paths: [...Array(numPages)].map((v, i) => {
      return {
        params: { page: i.toString() },
      }
    }),
    fallback: false,
  }
}

export default PostsPage
