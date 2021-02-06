const withImages = require("next-images")
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
})
module.exports = withImages(
  withMDX({
    pageExtensions: ["js", "jsx", "md", "mdx", "tsx"],
    webpack: (config, { isServer }) => {
      // Fixes npm packages (mdx) that depend on `fs` module
      if (!isServer) {
        config.node = {
          fs: "empty",
        }
      }
      return config
    },
  })
)
