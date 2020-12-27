import Wrapper from "../src/layout/Wrapper"
import About from "../src/views/About"
import config from "../blog.config.js"

const AboutPage = () => (
  <Wrapper
    url={config.url + "about"}
    title={config.title + " | About"}
    description={"Learn more about " + config.title}
    imageUrl={config.shareImage}
    imageAlt={config.shareImageAlt}
  >
    <About />
  </Wrapper>
)

export default AboutPage
