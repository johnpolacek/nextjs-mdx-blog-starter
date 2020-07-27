import MDX from "@mdx-js/runtime"
import { Box, Heading } from "theme-ui"
import Link from "next/link"

const BlogPost = ({ post }) => {
  const components = {
    Box: (props) => <Box {...props} />,
  }

  return (
    <Box sx={{ maxWidth: "960px", mx: "auto", px: [3, 4, 5], py: 5 }}>
      <Heading as="h1" sx={{ pb: [3, 4], fontSize: [5, 6] }}>
        {post.title}
      </Heading>
      <MDX components={components}>{post.content}</MDX>
    </Box>
  )
}

export default BlogPost
