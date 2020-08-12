import { Box } from "theme-ui"
import { MDXProvider } from "@mdx-js/react"
import FooterContent from "../mdx/footer.mdx"

const Footer = (props) => (
  <Box
    as="footer"
    sx={{
      p: 4,
      color: "#666",
      textAlign: "center",
      fontSize: 1,
    }}
  >
    <FooterContent />
  </Box>
)

export default Footer
