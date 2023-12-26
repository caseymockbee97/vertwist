import styled from '@emotion/styled'

import { Link, routes } from '@redwoodjs/router'

import { TANGAROA_500, ORANGE_300, TANGAROA_400 } from 'src/design/Colors'
import { StyledH2 } from 'src/design/Typography'

const NavBar = () => {
  return (
    <Container>
      <UnstyledLink to={routes.home()}>
        <StyledH2 hoverColor={ORANGE_300}>Home</StyledH2>
      </UnstyledLink>
      <UnstyledLink to={routes.gameplay()}>
        <StyledH2 hoverColor={ORANGE_300}>Gameplay</StyledH2>
      </UnstyledLink>
      <UnstyledLink to={routes.faq()}>
        <StyledH2 hoverColor={ORANGE_300}>FAQ</StyledH2>
      </UnstyledLink>
    </Container>
  )
}

export default NavBar

const Container = styled.div`
  padding: 12px 0;
  width: 100%;
  display: flex;
  background-color: ${TANGAROA_500};
  gap: 16px;
  justify-content: center;
  position: absolute;
  top: 0;
  box-shadow: 0px 1px 3px ${TANGAROA_400};
`
const UnstyledLink = styled(Link)`
  text-decoration: none;
`
