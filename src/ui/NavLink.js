import { Link as A } from "theme-ui"
import Link from "next/link"

const NavLink = ({ href, active, children }) => (
  <Link href={href}>
    <A
      sx={{
        py: [2, 3],
        px: [3, 4],
        fontSize: 3,
        fontWeight: 600,
        display: "inline-block",
        textDecoration: "none",
        borderBottom: "1px solid",
        borderColor: active ? "primary" : "background",
        cursor: "pointer",
        transition: "border-color .5s",
        "&:hover": {
          borderColor: "primary",
        },
      }}
    >
      {children}
    </A>
  </Link>
)

export default NavLink
