import { MDXProvider } from "@mdx-js/react"
import MarkdownContent from "../mdx/about.mdx"
import Container from "../ui/Container"

const About = (props) => {
  return (
    <MDXProvider>
      <Container>
        <MarkdownContent />
      </Container>
    </MDXProvider>
  )
}

export default About
