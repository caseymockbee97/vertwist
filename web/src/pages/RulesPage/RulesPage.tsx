import styled from '@emotion/styled'

import { MetaTags } from '@redwoodjs/web'

import { WHITE } from 'src/design/Colors'
import { StyledH1, StyledH3 } from 'src/design/Typography'

const RulesPage = () => {
  return (
    <>
      <MetaTags
        title="Rules"
        description="Standard rules for Vertical Scramble."
      />
      <Container>
        <StyledH1>Rules:</StyledH1>
        <StyledH3 color={WHITE}>House rules are encouraged!</StyledH3>
        <StyledH3 color={WHITE}>
          There is 1 reader and as many players as your climbing wall can
          accommodate.
        </StyledH3>
        <StyledH3 color={WHITE}>
          When making a move, if an unrelated hand or foot comes off a hold, it
          must remain off all holds until it is called into play. Smearing is
          allowed.
        </StyledH3>
        <StyledH3 color={WHITE}>
          A hand or foot must change holds at each call. If a hand or foot is
          already on the color called, it must still be moved.
        </StyledH3>
        <StyledH3 color={WHITE}>
          Players must establish each move before the next cards are read. If a
          player fails to do so, that hand or foot is off until it is called
          back into play.
        </StyledH3>
      </Container>
    </>
  )
}

export default RulesPage

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`
