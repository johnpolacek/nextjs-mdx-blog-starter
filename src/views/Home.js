import { Box, Heading, Text } from "theme-ui"
import Link from "next/link"

const Home = ({ posts }) => (
  <Box
    id="home"
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
          <Heading>{post.title}</Heading>
          <Text sx={{ pb: 3 }}>{post.excerpt}</Text>
          <Link href={"/" + post.slug} passHref>
            <a>Read more...</a>
          </Link>
        </Box>
      ))}
  </Box>
)

export default Home
