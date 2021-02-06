/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import Link from "next/link"
import { Link as TUILink } from "theme-ui"

const A = React.forwardRef(({ onClick, href, styles, children }, ref) => {
  return (
    <a href={href} sx={styles} ref={ref}>
      {children}
    </a>
  )
})

const ButtonLink = (props) => {
  let py = 2
  if (typeof props.fontSize === "number") {
    py = props.fontSize - 1
  } else if (props.fontSize.length > 1) {
    py = props.fontSize.map((n) => n - 1)
  }

  const styles = {
    textDecoration: "none",
    fontWeight: props.fontWeight || "normal",
    fontSize: props.fontSize || 3,
    px: props.fontSize || 3,
    py,
    bg: props.bg || "primary",
    color: props.bg === "white" ? "primary" : "#fff",
    boxShadow: "none",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    display: "inline-block",
  }
  return props.href.includes("http") ? (
    <TUILink href={props.href} sx={styles}>
      {props.children}
    </TUILink>
  ) : (
    <Link href={props.href} passHref>
      <TUILink sx={styles}>{props.children}</TUILink>
    </Link>
  )
}

export default ButtonLink
