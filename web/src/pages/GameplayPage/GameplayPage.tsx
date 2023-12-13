import styled from '@emotion/styled'

import { MetaTags } from '@redwoodjs/web'

import { WHITE } from 'src/design/Colors'
import { StyledH1, StyledH3 } from 'src/design/Typography'

const GameplayPage = () => {
  return (
    <>
      <MetaTags
        title="Gameplay"
        description="Standard gameplay for Vertical Scramble"
      />

      <Container>
        <StyledH1>Gameplay:</StyledH1>
        <StyledH3 color={WHITE}>
          <b>Climbing is inherently dangerous, so play at your own risk.</b>
        </StyledH3>
        <StyledH3 color={WHITE}>
          Divide the deck into action cards and color cards. Remove any colors
          that aren&apos;t on the climbing wall.
        </StyledH3>
        <StyledH3 color={WHITE}>
          The reader starts by turning over <b>4</b> color cards. The player(s)
          choose any <b>4</b> starting holds (<b>2</b> hands, <b>2</b> feet)
          using those colors.
        </StyledH3>
        <StyledH3 color={WHITE}>
          The reader shuffles the color cards back into the deck.
        </StyledH3>
        <StyledH3 color={WHITE}>
          Once the player(s) are established on the starting holds, the reader
          flips over a color card and an action card and reads them aloud (e.g.,
          &quot;heel hook blue&quot;).
        </StyledH3>
        <StyledH3 color={WHITE}>
          The player(s) move according to the color and action. The reader sets
          the pace for the game.
        </StyledH3>
        <StyledH3 color={WHITE}>
          This process continues until the player(s) fall.
        </StyledH3>
        <StyledH3 color={WHITE}>Happy climbing!</StyledH3>
      </Container>
    </>
  )
}

export default GameplayPage

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`
