import { Box } from "theme-ui"
import { MDXProvider } from "@mdx-js/react"
import MarkdownContent from "../mdx/about.mdx"

const Home = (props) => (
  <MDXProvider>
    <Box
      id="home"
      sx={{
        px: [3, 4, 5],
        maxWidth: "800px",
        mx: "auto",
        textAlign: "center",
      }}
    >
      <MarkdownContent />
    </Box>
  </MDXProvider>
)

export default Home
