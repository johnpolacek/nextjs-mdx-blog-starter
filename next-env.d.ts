/// <reference types="next" />
/// <reference types="next/types/global" />
declare module "*.mdx" {
  let MDXComponent: (props) => JSX.Element
  export default MDXComponent
}
