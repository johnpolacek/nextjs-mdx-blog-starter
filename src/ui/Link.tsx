/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui"
import NextLink from "next/link"

export const Link: React.FC<{ href: string }> = ({ href, children }) => {
  return (
    <NextLink passHref href={href}>
      <a sx={{ variant: "styles.a" }}>{children}</a>
    </NextLink>
  )
}
