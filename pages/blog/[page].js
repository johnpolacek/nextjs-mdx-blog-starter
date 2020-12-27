import config from "../../blog.config"
import Wrapper from "../../src/layout/Wrapper"
import Posts from "../../src/views/Posts"
import { getAllPosts } from "../../src/api"

const PostsPage = ({ posts, prevPosts, nextPosts, pageIndex, numPages }) => (
  <Wrapper
    url={config.url + "blog/" + (pageIndex + 1)}
    title={config.title + " | Blog - " + (pageIndex + 1) + " of " + numPages}
    description={config.description}
    imageUrl={config.shareImage}
    imageAlt={config.shareImageAlt}
  >
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
    "coverImageAlt",
    "coverImageHeight",
    "coverImageWidth",
    "excerpt",
    "draft",
  ])

  const pageIndex = parseInt(params.page) - 1
  const startIndex = pageIndex * config.postsPerPage
  const endIndex = (pageIndex + 1) * config.postsPerPage

  const prevPosts = pageIndex > 0 ? pageIndex : null
  const nextPosts = endIndex >= posts.length ? null : pageIndex + 2
  const numPages = (config.postsPerPage % getAllPosts().length) + 1

  return {
    props: {
      posts: posts.slice(startIndex, endIndex),
      prevPosts,
      nextPosts,
      pageIndex,
      numPages,
    },
  }
}

export async function getStaticPaths() {
  const numPages = (config.postsPerPage % getAllPosts().length) + 1

  return {
    paths: [...Array(numPages)].map((v, i) => {
      return {
        params: { page: (i + 1).toString() },
      }
    }),
    fallback: false,
  }
}

export default PostsPage
