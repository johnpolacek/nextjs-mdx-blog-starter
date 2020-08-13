import { Box, Text } from "theme-ui"

const Footer = (props) => (
  <Box
    sx={{
      p: 4,
      color: "#666",
      textAlign: "center",
      fontSize: 1,
    }}
  >
    <Text sx={{ mx: 3, display: "inline-block" }}>
      Created by <a href="https://johnpolacek">John Polacek</a>
    </Text>
    <Text sx={{ mx: 3, display: "inline-block" }}>
      Open sourced on{" "}
      <a href="https://github.com/johnpolacek/nextjs-mdx-blog-starter">
        Github
      </a>
    </Text>
    <Text sx={{ mx: 3, display: "inline-block" }}>
      Follow <a href="https://twitter.com/johnpolacek">@johnpolacek</a>
    </Text>
  </Box>
)

export default Footer
