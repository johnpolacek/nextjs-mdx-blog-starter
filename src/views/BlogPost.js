import MDX from "@mdx-js/runtime"
import config from "../../blog.config"
import { DiscussionEmbed } from "disqus-react"
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
      {typeof config.disqus === "string" && (
        <DiscussionEmbed
          shortname={config.disqus}
          config={{
            url: config.url + post.slug,
            identifier: post.slug,
            title: post.title,
            language: "en",
          }}
        />
      )}
    </Box>
  )
}

export default BlogPost
