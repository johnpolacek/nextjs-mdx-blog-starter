import MDX from "@mdx-js/runtime"
import { Flex, Box, Heading, Text } from "theme-ui"
import Image from "next/image"
import Container from "../ui/Container"
import DraftBadge from "../ui/DraftBadge"
import Link from "next/link"

const Posts = ({ posts, prevPosts, nextPosts }) => {
  const isLocal = process.env.NODE_ENV === "development"

  return (
    <Container>
      {posts &&
        posts
          .filter((post) => {
            return isLocal || !post.draft
          })
          .map((post) => (
            <Box sx={{ pb: 5 }} key={post.slug}>
              <Heading sx={{ pb: 2, position: "relative" }}>
                {post.draft && <DraftBadge />}
                <Link href={"/" + post.slug} passHref>
                  <a>{post.title}</a>
                </Link>
              </Heading>
              {post.coverImage && (
                <Box
                  sx={{
                    mt: 2,
                    mb: 3,
                    border: "1px solid",
                    borderColor: "rgba(0,0,0,.1)",
                  }}
                >
                  <Image
                    height={post.coverImageHeight}
                    width={post.coverImageWidth}
                    src={post.coverImage}
                    alt={post.coverImageAlt || ""}
                  />
                </Box>
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
    </Container>
  )
}

export default Posts
