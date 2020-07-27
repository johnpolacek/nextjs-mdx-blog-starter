/** @jsx jsx */
import { jsx } from "theme-ui"
import { ThemeProvider } from "theme-ui"
import Layout from "./Layout"
import Theme from "./Theme"
import config from "../../blog.config"
import ReactGA from "react-ga"

export default (props) => {
  if (config.analytics) {
    ReactGA.initialize(config.analytics)
    ReactGA.set({ anonymizeIp: true })
    if (typeof window !== "undefined") {
      ReactGA.pageview(window.location.pathname + window.location.search)
    }
  }

  return (
    <ThemeProvider theme={Theme}>
      <Layout {...props} />
    </ThemeProvider>
  )
}
