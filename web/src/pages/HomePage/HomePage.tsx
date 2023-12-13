import { useCallback } from 'react'

import styled from '@emotion/styled'

import { navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import LargeButton from 'src/components/LargeButton/LargeButton'
import PlayingCard from 'src/components/PlayingCard/PlayingCard'
import Title from 'src/components/Title/Title'
import { WHITE } from 'src/design/Colors'
import { StyledH2, StyledH3 } from 'src/design/Typography'

const HomePage = () => {
  const handleNavigation = useCallback(() => {
    navigate(routes.newsletterSignUp())
  }, [])

  return (
    <>
      <MetaTags
        title="Home"
        description="Vertical Scramble. The card game for climbers."
      />

      <Container $gap="36px">
        <Title />
        <CenteredH3 color={WHITE}>
          Vertical Scramble is the card game for climbers. The game board is the
          spray wall at your climbing gym. The cards describe your next move.
          Challenge your friends to see who has better endurance on the wall –
          last one left climbing wins!
        </CenteredH3>
        <PlayingCard />
        <Container $gap="18px">
          <StyledH2>The card game for climbers.</StyledH2>
        </Container>
        <LargeButton onClick={handleNavigation}>Newsletter Sign Up</LargeButton>
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
  & form {
    position: relative;
  }
`

const CenteredH3 = styled(StyledH3)`
  text-align: center;
`

export default HomePage
