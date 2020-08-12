import { Text } from "theme-ui"

const DraftBadge = (props) => (
  <Text
    as="span"
    sx={{
      bg: "red",
      color: "white",
      fontWeight: 400,
      fontSize: 0,
      py: 2,
      px: 2,
      position: "absolute",
      top: "-3px",
      left: "-60px",
      borderRadius: "2px",
    }}
  >
    draft
  </Text>
)

export default DraftBadge
