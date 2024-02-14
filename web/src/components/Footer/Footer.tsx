import styled from '@emotion/styled'

import { TANGAROA_500, WHITE } from 'src/design/Colors'
import { StyledH3 } from 'src/design/Typography'

const Footer = () => {
  return (
    <Container>
      <UnstyledLink
        target="_blank"
        href="https://www.instagram.com/vertical.scramble/"
      >
        <StyledH3 color={WHITE}>Instagram</StyledH3>
      </UnstyledLink>
      <UnstyledLink
        target="_blank"
        href="https://verticalscramble.myshopify.com/?utm_source=websitecampaign"
      >
        <StyledH3 color={WHITE}>Shopify</StyledH3>
      </UnstyledLink>
      <UnstyledLink target="_blank" href="mailto:casey@verticalscramble.com">
        <StyledH3 color={WHITE}>casey@verticalscramble.com</StyledH3>
      </UnstyledLink>
      <UnstyledLink href="/sitemap.xml">
        <StyledH3 color={WHITE}>sitemap</StyledH3>
      </UnstyledLink>
    </Container>
  )
}

export default Footer

const Container = styled.div`
  width: 100%;
  padding: 12px 0px;
  gap: 4px;
  background-color: ${TANGAROA_500};
  display: flex;
  flex-direction: column;
  align-items: center;
`
const UnstyledLink = styled.a`
  text-decoration: none;
  text-decoration: underline ${WHITE};
`
