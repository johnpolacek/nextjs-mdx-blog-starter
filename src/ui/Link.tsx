import React from "react"
import NextLink from "next/link"
import { LinkProps, Link as ThemeUILink } from "theme-ui"

// const ATag = React.forwardRef<LinkProps & {}>(({ onClick, href, children }, ref) => {
//   return (
//     <ThemeUILink href={href} onClick={onClick} ref={ref}>
//       {children}
//     </ThemeUILink>
//   )
// })

const ATag = React.forwardRef(
  (props: LinkProps, ref: React.ForwardedRef<unknown>) => (
    <ThemeUILink {...props} ref={ref as any} />
  )
)

export const Link: React.FC<LinkProps & { external?: boolean }> = ({
  href,
  external = false,
  ...linkProps
}) => {
  return external ? (
    <ATag href={href} target="_blank" {...linkProps} />
  ) : (
    <NextLink href={href} passHref>
      <ATag {...linkProps} />
    </NextLink>
  )
}
