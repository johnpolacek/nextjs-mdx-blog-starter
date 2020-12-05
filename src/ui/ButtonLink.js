import PropTypes from "prop-types"
import Link as NextLink from "next/link"
import { Link } from "theme-ui"

const ButtonLink = (props) => (
  <NextLink as={props.as || props.href} href={props.href}>
    <Link
      disabled={props.disabled}
      sx={{
        textDecoration: "none",
        fontSize: 3,
        px: 3,
        py: 2,
        bg: "black",
        color: "#fff",
        boxShadow: "none",
        borderRadius: "4px",
        border: "none",
        cursor: "pointer",
        display: "inline-block",
      }}
      {...props}
    />
  </NextLink>
)

ButtonLink.propTypes = {
  href: PropTypes.string.isRequired,
  as: PropTypes.string,
}

export default ButtonLink
