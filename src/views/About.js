import { MDXProvider } from "@mdx-js/react"
import MarkdownContent from "../mdx/about.mdx"
import { Box } from "theme-ui"
import Container from "../ui/Container"

const About = (props) => {
  const components = {
    Box: (props) => <Box {...props} />,
  }
  return (
    <MDXProvider components={components}>
      <Container>
        <MarkdownContent />
      </Container>
    </MDXProvider>
  )
}

export default About
