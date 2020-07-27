import { Box } from "theme-ui"
import { MDXProvider } from "@mdx-js/react"
import MarkdownContent from "../markdown/about.mdx"

const Home = (props) => (
  <MDXProvider>
    <Box
      id="home"
      sx={{
        px: 3,
        maxWidth: "1100px",
        mx: "auto",
        textAlign: "center",
      }}
    >
      <MarkdownContent />
    </Box>
  </MDXProvider>
)

export default Home
