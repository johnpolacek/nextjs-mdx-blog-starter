/** @jsx jsx */
import { jsx } from "theme-ui"
import config from "../../blog.config"
import { MDXProvider } from "@mdx-js/react"
import Blurb from "../markdown/blurb.mdx"
import { Box, Heading } from "theme-ui"
import Nav from "./Nav"
import ButtonLink from "../ui/ButtonLink"

export default (props) => (
  <MDXProvider>
    <Box as="header" sx={{ textAlign: "center", pt: 4 }}>
      <Heading sx={{ fontSize: 6, pb: 2 }} as="h1">
        {config.title}
      </Heading>
      <Heading sx={{ pb: 3 }}>{config.subtitle}</Heading>
      <Box sx={{ pb: 4 }}>
        <Blurb />
      </Box>
      <Box sx={{ pb: 5 }}>
        <a
          sx={{
            bg: "primary",
            px: 4,
            py: 3,
            color: "white",
            textDecoration: "none",
            fontSize: 3,
            borderRadius: "4px",
          }}
          href="https://github.com/johnpolacek/nextjs-mdx-blog-starter"
        >
          View on Github
        </a>
      </Box>
      <Nav />
    </Box>
  </MDXProvider>
)
