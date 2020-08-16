import { Box } from "theme-ui"

const Main = (props) => {
  return (
    <Box
      as="main"
      sx={{
        display: "flex",
        flex: 1,
        px: [3, 4],
        pb: 4,
        alignItems: "center",
        bg: "white",
        borderBottom: "solid 1px",
        borderTop: "solid 1px",
        borderColor: "#EEE",
      }}
      {...props}
    />
  )
}

export default Main
