import { WHITE } from "src/design/Colors"

interface Props {
  color: string
  borderColor?: string
}

const ColorTile = ({ color, borderColor = WHITE }: Props) => {
  return (
    <>
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23 2.3094C24.2376 1.59487 25.7624 1.59487 27 2.3094L43.6506 11.9226C44.8882 12.6372 45.6506 13.9577 45.6506 15.3868V34.6132C45.6506 36.0423 44.8882 37.3628 43.6506 38.0774L27 47.6906C25.7624 48.4051 24.2376 48.4051 23 47.6906L6.34937 38.0774C5.11176 37.3628 4.34937 36.0423 4.34937 34.6133V15.3868C4.34937 13.9577 5.11176 12.6372 6.34936 11.9226L23 2.3094Z"
          fill={color}
          stroke={borderColor}
          strokeWidth="2"
        />
      </svg>
    </>
  )
}

export default ColorTile
