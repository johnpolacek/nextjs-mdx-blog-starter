/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui"
import Link from "next/link"

interface Props {
  href: string
  active?: boolean
}
const NavLink: React.FC<Props> = ({ href, active, children }) => (
  <Link href={href} passHref>
    <a
      sx={{
        variant: "styles.a",
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
    </a>
  </Link>
)

export default NavLink
