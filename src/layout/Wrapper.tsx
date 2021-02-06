import { Layout } from "./Layout"
import config from "../../blog.config"
import ReactGA from "react-ga"

const Wrapper = (props) => {
  if (typeof config.analytics === "string" && config.analytics !== "") {
    ReactGA.initialize(config.analytics)
    ReactGA.set({ anonymizeIp: true })
    if (typeof window !== "undefined") {
      ReactGA.pageview(window.location.pathname + window.location.search)
    }
  }

  return <Layout {...props} />
}

export default Wrapper
