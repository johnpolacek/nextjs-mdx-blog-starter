import Wrapper from "../src/layout/Wrapper"
import About from "../src/views/About"
import config from "../blog.config.js"

export default () => (
  <Wrapper
    url="/about"
    title={config.title + " | About"}
    description={"Learn more about " + config.title}
  >
    <About />
  </Wrapper>
)
