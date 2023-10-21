import { MetaTags } from '@redwoodjs/web'
import PlayingCard from 'src/components/PlayingCard/PlayingCard'
import Title from 'src/components/Title/Title'
import { WHITE } from 'src/design/Colors'
import { StyledH2, StyledH3 } from 'src/design/Typography'
import styled from 'styled-components'

const HomePage = () => {
  return (
    <>
      <MetaTags
        title="Home"
        description="Vertical Scramble. The card game for climbers."
      />

      <Container $gap="36px">
        <Title />
        <Container $gap="18px">
          <StyledH2>The card game for climbers.</StyledH2>
          <StyledH3 color={WHITE}>Coming soon...</StyledH3>
        </Container>
        <PlayingCard />
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
