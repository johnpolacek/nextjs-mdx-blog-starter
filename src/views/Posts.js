import MDX from "@mdx-js/runtime"
import { Flex, Box, Heading, Image } from "theme-ui"
import Link from "next/link"

const Posts = ({ posts, prevPosts, nextPosts }) => (
  <Box
    sx={{
      py: 5,
      px: [3, 4, 5],
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
          {post.coverImage && (
            <Image
              sx={{
                mt: 2,
                mb: 3,
                border: "1px solid",
                borderColor: "rgba(0,0,0,.1)",
              }}
              src={post.coverImage}
              alt={post.coverImageAlt || ""}
            />
          )}
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
          <Link href={"/blog/" + prevPosts} passHref>
            <a>« see newer posts</a>
          </Link>
        )}
      </Box>
      <Box sx={{ width: "50%", py: 3, pr: 3, textAlign: "right" }}>
        {nextPosts !== null && (
          <Link href={"/blog/" + nextPosts} passHref>
            <a>see older posts »</a>
          </Link>
        )}
      </Box>
    </Flex>
  </Box>
)

export default Posts
