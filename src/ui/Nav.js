import { Box } from "theme-ui"
import NavLink from "./NavLink"

const Nav = (props) => (
  <Box
    as="nav"
    sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
  >
    <NavLink href="/">Home</NavLink>
    <NavLink href="/about">About</NavLink>
  </Box>
)

export default Nav
