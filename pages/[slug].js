import Wrapper from "../src/layout/Wrapper"
import BlogPost from "../src/views/BlogPost"
import config from "../blog.config.js"
import { getPostBySlug, getAllPosts } from "../src/api"

const PostPage = ({ post }) => (
  <Wrapper
    url="/"
    title={config.title + " | " + post.title}
    description={post.excerpt}
    imageUrl={post.coverImage}
    imageAlt={post.coverImageAlt}
  >
    <BlogPost post={post} />
  </Wrapper>
)

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "excerpt",
    "date",
    "slug",
    "author",
    "content",
    "coverImage",
    "coverImageAlt",
  ])

  return {
    props: { post },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"])

  return {
    paths: posts.map((post) => {
      return {
        params: { ...post },
      }
    }),
    fallback: false,
  }
}

export default PostPage
