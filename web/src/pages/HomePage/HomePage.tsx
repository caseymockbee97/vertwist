import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import ColorTiles from 'src/components/ColorTiles'
import Typography from 'src/components/Typography'
import { HOLD_BLUE } from 'src/design/Colors'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <Typography variant='h1'>Howdy 🤠</Typography>
      <ColorTiles colors={[HOLD_BLUE]} />
    </>
  )
}

export default HomePage
