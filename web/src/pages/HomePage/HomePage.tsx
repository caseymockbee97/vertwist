import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useCallback } from 'react'
import LargeButton from 'src/components/LargeButton/LargeButton'
import PlayingCard from 'src/components/PlayingCard/PlayingCard'
import Title from 'src/components/Title/Title'
import { WHITE } from 'src/design/Colors'
import { StyledH2, StyledH3 } from 'src/design/Typography'
import styled from 'styled-components'

const HomePage = () => {
  const handleNavigation = useCallback(() => {
    navigate(routes.newsletterSignUp())
  }, [navigate])

  return (
    <>
      <MetaTags
        title="Home"
        description="Vertical Scramble. The card game for climbers."
      />

      <Container $gap="36px">
        <Title />
        <PlayingCard />
        <Container $gap="18px">
          <StyledH2>The card game for climbers.</StyledH2>
          <IndentedH3 color={WHITE}>{PARAGRAPH_TEXT}</IndentedH3>
        </Container>
        <LargeButton onClick={handleNavigation}>Send Me Updates</LargeButton>
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

const IndentedH3 = styled(StyledH3)`
  text-indent: 2ch;
`

export default HomePage

const PARAGRAPH_TEXT =
  'Vertical Scramble is a 2+ player card game. It uses the spray wall in your climbing gym as the game board. Challenge your gym friends (...or enemies) to see who has the better endurance!'
