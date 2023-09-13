import { HOLD_CLEAR, WHITE } from "src/design/Colors";

interface Props {
  colors: string[];
  borderColor?: string;
  defaultColor?: string;
}

const ColorTiles = ({colors, borderColor = WHITE, defaultColor = HOLD_CLEAR}: Props) => {
  return (
    <>
      <svg
        width="276"
        height="90"
        viewBox="0 0 276 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.5 3.30141C24.7376 2.58687 26.2624 2.58687 27.5 3.30141L44.1506 12.9147C45.3882 13.6292 46.1506 14.9497 46.1506 16.3788V35.6053C46.1506 37.0343 45.3882 38.3548 44.1506 39.0694L27.5 48.6826C26.2624 49.3971 24.7376 49.3971 23.5 48.6826L6.84937 39.0694C5.61176 38.3548 4.84937 37.0343 4.84937 35.6053V16.3788C4.84937 14.9497 5.61176 13.6292 6.84936 12.9147L23.5 3.30141Z"
          fill={colors[0] || defaultColor}
          stroke={borderColor}
          stroke-width="2"
        />
        <path
          d="M45.5 42.3014C46.7376 41.5869 48.2624 41.5869 49.5 42.3014L66.1506 51.9147C67.3882 52.6292 68.1506 53.9497 68.1506 55.3788V74.6053C68.1506 76.0343 67.3882 77.3548 66.1506 78.0694L49.5 87.6826C48.2624 88.3971 46.7376 88.3971 45.5 87.6826L28.8494 78.0694C27.6118 77.3548 26.8494 76.0343 26.8494 74.6053V55.3788C26.8494 53.9497 27.6118 52.6292 28.8494 51.9147L45.5 42.3014Z"
          fill={colors[1] || defaultColor}
          stroke={borderColor}
          stroke-width="2"
        />
        <path
          d="M68.5 3.30141C69.7376 2.58687 71.2624 2.58687 72.5 3.30141L89.1506 12.9147C90.3882 13.6292 91.1506 14.9497 91.1506 16.3788V35.6053C91.1506 37.0343 90.3882 38.3548 89.1506 39.0694L72.5 48.6826C71.2624 49.3971 69.7376 49.3971 68.5 48.6826L51.8494 39.0694C50.6118 38.3548 49.8494 37.0343 49.8494 35.6053V16.3788C49.8494 14.9497 50.6118 13.6292 51.8494 12.9147L68.5 3.30141Z"
          fill={colors[2] || defaultColor}
          stroke={borderColor}
          stroke-width="2"
        />
        <path
          d="M90.5 42.3014C91.7376 41.5869 93.2624 41.5869 94.5 42.3014L111.151 51.9147C112.388 52.6292 113.151 53.9497 113.151 55.3788V74.6053C113.151 76.0343 112.388 77.3548 111.151 78.0694L94.5 87.6826C93.2624 88.3971 91.7376 88.3971 90.5 87.6826L73.8494 78.0694C72.6118 77.3548 71.8494 76.0343 71.8494 74.6053V55.3788C71.8494 53.9497 72.6118 52.6292 73.8494 51.9147L90.5 42.3014Z"
          fill={colors[3] || defaultColor}
          stroke={borderColor}
          stroke-width="2"
        />
        <path
          d="M113.5 3.30141C114.738 2.58687 116.262 2.58687 117.5 3.30141L134.151 12.9147C135.388 13.6292 136.151 14.9497 136.151 16.3788V35.6053C136.151 37.0343 135.388 38.3548 134.151 39.0694L117.5 48.6826C116.262 49.3971 114.738 49.3971 113.5 48.6826L96.8494 39.0694C95.6118 38.3548 94.8494 37.0343 94.8494 35.6053V16.3788C94.8494 14.9497 95.6118 13.6292 96.8494 12.9147L113.5 3.30141Z"
          fill={colors[4] || defaultColor}
          stroke={borderColor}
          stroke-width="2"
        />
        <path
          d="M135.5 42.3014C136.738 41.5869 138.262 41.5869 139.5 42.3014L156.151 51.9147C157.388 52.6292 158.151 53.9497 158.151 55.3788V74.6053C158.151 76.0343 157.388 77.3548 156.151 78.0694L139.5 87.6826C138.262 88.3971 136.738 88.3971 135.5 87.6826L118.849 78.0694L118.359 78.9193L118.849 78.0694C117.612 77.3548 116.849 76.0343 116.849 74.6053V55.3788C116.849 53.9497 117.612 52.6292 118.849 51.9147L135.5 42.3014Z"
          fill={colors[5] || defaultColor}
          stroke={borderColor}
          stroke-width="2"
        />
        <path
          d="M158.5 3.30141C159.738 2.58687 161.262 2.58687 162.5 3.30141L179.151 12.9147C180.388 13.6292 181.151 14.9497 181.151 16.3788V35.6053C181.151 37.0343 180.388 38.3548 179.151 39.0694L162.5 48.6826C161.262 49.3971 159.738 49.3971 158.5 48.6826L141.849 39.0694L141.359 39.9193L141.849 39.0694C140.612 38.3548 139.849 37.0343 139.849 35.6053V16.3788C139.849 14.9497 140.612 13.6292 141.849 12.9147L158.5 3.30141Z"
          fill={colors[6] || defaultColor}
          stroke={borderColor}
          stroke-width="2"
        />
        <path
          d="M180.5 42.3014C181.738 41.5869 183.262 41.5869 184.5 42.3014L201.151 51.9147C202.388 52.6292 203.151 53.9497 203.151 55.3788V74.6053C203.151 76.0343 202.388 77.3548 201.151 78.0694L184.5 87.6826C183.262 88.3971 181.738 88.3971 180.5 87.6826L163.849 78.0694L163.359 78.9193L163.849 78.0694C162.612 77.3548 161.849 76.0343 161.849 74.6053V55.3788C161.849 53.9497 162.612 52.6292 163.849 51.9147L180.5 42.3014Z"
          fill={colors[7] || defaultColor}
          stroke={borderColor}
          stroke-width="2"
        />
        <path
          d="M203.5 3.30141C204.738 2.58687 206.262 2.58687 207.5 3.30141L224.151 12.9147C225.388 13.6292 226.151 14.9497 226.151 16.3788V35.6053C226.151 37.0343 225.388 38.3548 224.151 39.0694L207.5 48.6826C206.262 49.3971 204.738 49.3971 203.5 48.6826L186.849 39.0694L186.359 39.9193L186.849 39.0694C185.612 38.3548 184.849 37.0343 184.849 35.6053V16.3788C184.849 14.9497 185.612 13.6292 186.849 12.9147L203.5 3.30141Z"
          fill={colors[8] || defaultColor}
          stroke={borderColor}
          stroke-width="2"
        />
        <path
          d="M225.5 42.3014C226.738 41.5869 228.262 41.5869 229.5 42.3014L246.151 51.9147C247.388 52.6292 248.151 53.9497 248.151 55.3788V74.6053C248.151 76.0343 247.388 77.3548 246.151 78.0694L229.5 87.6826C228.262 88.3971 226.738 88.3971 225.5 87.6826L208.849 78.0694L208.359 78.9193L208.849 78.0694C207.612 77.3548 206.849 76.0343 206.849 74.6053V55.3788C206.849 53.9497 207.612 52.6292 208.849 51.9147L225.5 42.3014Z"
          fill={colors[9] || defaultColor}
          stroke={borderColor}
          stroke-width="2"
        />
        <path
          d="M248.5 3.30141C249.738 2.58687 251.262 2.58687 252.5 3.30141L269.151 12.9147C270.388 13.6292 271.151 14.9497 271.151 16.3788V35.6053C271.151 37.0343 270.388 38.3548 269.151 39.0694L252.5 48.6826C251.262 49.3971 249.738 49.3971 248.5 48.6826L231.849 39.0694L231.359 39.9193L231.849 39.0694C230.612 38.3548 229.849 37.0343 229.849 35.6053V16.3788C229.849 14.9497 230.612 13.6292 231.849 12.9147L248.5 3.30141Z"
          fill={colors[10] || defaultColor}
          stroke={borderColor}
          stroke-width="2"
        />
      </svg>
    </>
  )
}

export default ColorTiles
