import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import ColorTiles from 'src/components/ColorTiles'
import DefaultInput from 'src/components/DefaultInput/DefaultInput'
import LargeButton from 'src/components/LargeButton/LargeButton'
import SmallButton from 'src/components/SmallButton/SmallButton'
import { HOLD_BLUE, HOLD_PINK, HOLD_PURPLE, HOLD_WHITE } from 'src/design/Colors'
import { StyledH1, StyledH2 } from 'src/design/Typography'
import styled from 'styled-components'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <Container>
        <StyledH1>Vertical Scramble</StyledH1>
        <ColorTiles colors={[HOLD_BLUE, HOLD_PINK, HOLD_PURPLE, HOLD_WHITE]} />
        <InputContainer>
          <label htmlFor="colorInput">
            <StyledH2>Add a Color</StyledH2>
          </label>
          <InputRow>
            <DefaultInput
              id="colorInput"
              width="100%"
              placeholder="Type a Color"
            />
            <SmallButton variant="primary">Add</SmallButton>
          </InputRow>
        </InputContainer>
        <LargeButton
          onClick={() => {
            console.log('howdy')
          }}
          variant="primary"
        >
          Start Game
        </LargeButton>
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 72px;
  width: 100%;
`
const InputRow = styled.div`
  display: flex;
  gap: 26px;
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`

export default HomePage
