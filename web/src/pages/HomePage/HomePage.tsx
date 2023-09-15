import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import ColorTiles from 'src/components/ColorTiles'
import LargeButton from 'src/components/LargeButton/LargeButton'
import SmallButton from 'src/components/SmallButton/SmallButton'
import { HOLD_BLUE } from 'src/design/Colors'
import { StyledH1, StyledH2 } from 'src/design/Typography'
import styled from 'styled-components'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <Container>
        <StyledH1>Howdy 🤠</StyledH1>
        <ColorTiles colors={[HOLD_BLUE]} />
        <div>
          <StyledH2>Add a Color</StyledH2>
          <input placeholder="Type a Color" />
          <SmallButton variant="primary">Add</SmallButton>
        </div>
        <LargeButton onClick={() => {console.log('howdy')}} variant="primary">Howdy</LargeButton>
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 72px;
`

export default HomePage
