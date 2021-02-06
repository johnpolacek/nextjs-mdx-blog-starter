import { useRouter } from "next/router"
import { Box } from "theme-ui"
import NavLink from "ui/NavLink"

const Nav: React.FC = () => {
  const router = useRouter()
  return (
    <Box
      as="nav"
      sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      <NavLink
        href="/"
        active={router.pathname === "/" || router.pathname.includes("/blog")}
      >
        Blog
      </NavLink>
      <NavLink href="/about" active={router.pathname === "/about"}>
        About
      </NavLink>
    </Box>
  )
}

export default Nav
