import { useEffect } from "react"
import { theme } from "./Theme"
import { Box } from "theme-ui"
import { DocHead, Props as DocHeadProps } from "./DocHead"
import ThemeToggle from "../ui/ThemeToggle"
import Header from "../ui/Header"
import Main from "../ui/Main"
import Footer from "../ui/Footer"

// // inject inline styles on the body before the page is rendered to avoid the flash of light if we are in dark mode
// // TODO: revisit whether this is the best way
// eslint-disable-next-line prefer-const
let codeToRunOnClient: string | null = null
const isLocal = process.env.NODE_ENV === "development"
if (isLocal) {
  codeToRunOnClient = `
  (function() {
    console.warn("Hello from some script")
  })()`
}

export const Layout: React.FC<DocHeadProps> = (props) => {
  useEffect(() => {
    // the theme styles will be applied by theme ui after hydration, so remove the inline style we injected on page load
    document.body.removeAttribute("style")
  }, [])

  return (
    <>
      <DocHead {...props} />
      {codeToRunOnClient && (
        <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />
      )}
      <Box
        sx={{
          display: "flex",
          minHeight: "100vh",
          flexDirection: "column",
        }}
      >
        {typeof theme.colors.modes === "object" && <ThemeToggle />}
        <Header />
        <Main>{props.children}</Main>
        <Footer />
      </Box>
    </>
  )
}
