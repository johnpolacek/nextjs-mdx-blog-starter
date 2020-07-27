/** @jsx jsx */
import { jsx } from "theme-ui"
import NavLink from "./NavLink"

export default (props) => (
  <NavLink href="/">
    <h1
      sx={{
        color: "black",
        fontWeight: "inherit",
        m: 0,
        fontSize: "inherit",
      }}
    >
      <span
        sx={{
          pr: 2,
          position: "relative",
          top: "-2px",
          color: "primary",
        }}
      >
        <span sx={{ letterSpacing: "2px", display: "inline-block" }}>
          &lt;/&gt;
        </span>
      </span>
      <span>Project Starter</span>
    </h1>
  </NavLink>
)
