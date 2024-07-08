import styled from '@emotion/styled'

import { MetaTags } from '@redwoodjs/web'

import LargeButton from 'src/components/LargeButton/LargeButton'
import PlayingCard from 'src/components/PlayingCard/PlayingCard'
import Title from 'src/components/Title/Title'
import { TANGAROA_500, WHITE } from 'src/design/Colors'
import { StyledH2, StyledH3 } from 'src/design/Typography'

const HomePage = () => {
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
        <LargeButton>
          <StyledA
            href="https://www.etsy.com/shop/VerticalScramble"
            target="_blank"
            rel="noopener noreferrer"
          >
            Order Here!
          </StyledA>
        </LargeButton>
        <AppStoreBadge href="https://apps.apple.com/us/app/vertical-scramble/id6499559832?itsct=apps_box_badge&amp;itscg=30200">
          <AppStoreImage
            src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1715040000"
            alt="Download on the App Store"
          />
        </AppStoreBadge>
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

const StyledA = styled.a`
  text-decoration: none;
  color: ${TANGAROA_500};
`

const AppStoreBadge = styled.a`
  display: inline-block;
  overflow: hidden;
  border-radius: 13px;
  width: 250px;
  height: 83px;
`
const AppStoreImage = styled.img`
  border-radius: 13px;
  width: 250px;
  height: 83px;
`

export default HomePage
