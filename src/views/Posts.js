import MDX from "@mdx-js/runtime"
import { Flex, Box, Heading } from "theme-ui"
import Link from "next/link"

const Posts = ({ posts, prevPosts, nextPosts }) => (
  <Box
    sx={{
      py: 5,
      px: 3,
      maxWidth: "800px",
      mx: "auto",
    }}
  >
    {posts &&
      posts.map((post) => (
        <Box sx={{ pb: 5 }} key={post.slug}>
          <Heading sx={{ pb: 2 }}>
            <Link href={"/" + post.slug} passHref>
              <a>{post.title}</a>
            </Link>
          </Heading>
          <Box sx={{ pb: 3 }}>
            <MDX>{post.excerpt}</MDX>
          </Box>
          <Link href={"/" + post.slug} passHref>
            <a>Read more...</a>
          </Link>
        </Box>
      ))}
    <Flex sx={{ fontStyle: "italic" }}>
      <Box sx={{ width: "50%", py: 3, textAlign: "left" }}>
        {prevPosts !== null && (
          <Link href={"/posts/" + prevPosts} passHref>
            <a>« see newer posts</a>
          </Link>
        )}
      </Box>
      <Box sx={{ width: "50%", py: 3, pr: 3, textAlign: "right" }}>
        {nextPosts !== null && (
          <Link href={"/posts/" + nextPosts} passHref>
            <a>see older posts »</a>
          </Link>
        )}
      </Box>
    </Flex>
  </Box>
)

export default Posts
