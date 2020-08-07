import { Box } from "theme-ui"
import { MDXProvider } from "@mdx-js/react"
import MarkdownContent from "../mdx/about.mdx"

const About = (props) => {
  const components = {
    Box: (props) => <Box {...props} />,
  }
  return (
    <MDXProvider components={components}>
      <Box
        id="about"
        sx={{
          p: [3, 4, 5],
          maxWidth: "800px",
          mx: "auto",
        }}
      >
        <MarkdownContent />
      </Box>
    </MDXProvider>
  )
}

export default About
