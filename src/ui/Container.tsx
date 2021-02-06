import { Box } from "theme-ui"

const Container: React.FC = (props) => (
  <Box sx={{ maxWidth: "800px", mx: "auto", p: [3, 4, 5] }} {...props} />
)

export default Container
