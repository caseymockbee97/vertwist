import { navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import ColorTiles from 'src/components/ColorTiles'
import DefaultInput from 'src/components/DefaultInput/DefaultInput'
import LargeButton from 'src/components/LargeButton/LargeButton'
import SmallButton from 'src/components/SmallButton/SmallButton'
import Title from 'src/components/Title/Title'
import {
  HOLD_BLACK,
  HOLD_BLUE,
  HOLD_GREEN,
  HOLD_ORANGE,
  HOLD_PINK,
  HOLD_PURPLE,
  HOLD_RED,
  HOLD_WHITE,
  HOLD_WILDCARD,
  HOLD_YELLOW,
  WHITE,
} from 'src/design/Colors'
import { StyledH1, StyledH2, StyledH3, StyledP } from 'src/design/Typography'
import styled from 'styled-components'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <Container $gap="36px">
        <Title />
        <Container $gap="12px">
          <StyledH2>The card game for climbers.</StyledH2>
          <StyledH3 color={WHITE}>Coming soon...</StyledH3>
        </Container>
      </Container>
    </>
  )
}

const Container = styled.div<{ $gap: string }>`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: ${({ $gap }) => $gap};
  width: 100%;
`

export default HomePage
