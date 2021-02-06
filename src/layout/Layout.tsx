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
// if (Object.keys(theme?.colors?.modes || {}).length !== 0) {
//   codeToRunOnClient = `
//   (function() {
//     const theme = ${JSON.stringify(theme)}

//     let mode = localStorage.getItem("theme-ui-color-mode")

//     if (!mode) {
//       const mql = window.matchMedia('(prefers-color-scheme: dark)')
//       if (typeof mql.matches === 'boolean' && mql.matches) {
//         mode = "dark"
//       }
//     }

//     if (mode && typeof theme.colors.modes === "object" && typeof theme.colors.modes[mode] === "object") {
//       const root = document.documentElement
//       Object.keys(theme.colors.modes[mode]).forEach((colorName) => {
//         document.body.style.setProperty("--theme-ui-colors-"+colorName, "var(--theme-ui-colors-primary,"+theme.colors.modes[mode][colorName]+")")
//       })
//     }
//   })()`
// }

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
