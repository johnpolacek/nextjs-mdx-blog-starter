import { Box, Text } from "theme-ui"
import { Link } from "ui/Link"

const Footer: React.FC = () => (
  <Box
    sx={{
      p: 4,
      color: "#666",
      textAlign: "center",
      fontSize: 1,
    }}
  >
    <Text sx={{ mx: 3, display: "inline-block" }}>
      Created by{" "}
      <Link external href="https://erikdstock">
        Erik Stockmeier
      </Link>
    </Text>
    <Text sx={{ mx: 3, display: "inline-block" }}>
      Open sourced on{" "}
      <a href="https://github.com/johnpolacek/nextjs-mdx-blog-starter">
        Github TODO: update to fork
      </a>
    </Text>
    <Text sx={{ mx: 3, display: "inline-block" }}>
      Follow{" "}
      <a href="https://twitter.com/johnpolacek">@johnpolacek TODO: Update</a>
    </Text>
  </Box>
)

export default Footer
