/** @jsx jsx */
import { jsx } from "theme-ui"
import NavHome from "./NavHome"
import NavLink from "./NavLink"

export default (props) => (
  <nav sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
    <NavLink href="/">Home</NavLink>
    <NavLink href="/about">About</NavLink>
  </nav>
)
