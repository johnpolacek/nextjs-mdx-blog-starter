import MDX from "@mdx-js/runtime"
import config from "../../blog.config"
import { DiscussionEmbed } from "disqus-react"
import { Box, Heading, Image } from "theme-ui"
import Link from "next/link"

const BlogPost = ({ post }) => {
  const components = {
    Box: (props) => <Box {...props} />,
  }

  return (
    <Box sx={{ maxWidth: "800px", mx: "auto", px: [3, 4, 5], py: 5 }}>
      <Heading as="h1" sx={{ pb: [3, 4], fontSize: [5, 6] }}>
        {post.title}
      </Heading>
      {post.coverImage && (
        <Image
          sx={{
            mb: 3,
            border: "1px solid",
            borderColor: "rgba(0,0,0,.1)",
          }}
          src={post.coverImage}
          alt={post.coverImageAlt || ""}
        />
      )}
      <MDX components={components}>{post.content}</MDX>
      {typeof config.disqus === "string" && config.disqus !== "" && (
        <Box sx={{pt: 4, mt: 5, borderTop: "2px solid", borderColor: "rgba(0,0,0,.1)"}}>
          <DiscussionEmbed
            shortname={config.disqus}
            config={{
              url: config.url + post.slug,
              identifier: post.slug,
              title: post.title,
              language: "en",
            }}
          />
        </Box>
      )}
    </Box>
  )
}

export default BlogPost
