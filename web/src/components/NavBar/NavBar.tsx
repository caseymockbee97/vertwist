import styled from 'styled-components'

import { Link, routes } from '@redwoodjs/router'

import { TANGAROA_500 } from 'src/design/Colors'
import { StyledH2 } from 'src/design/Typography'

const NavBar = () => {
  return (
    <Container>
      <UnstyledLink to={routes.home()}>
        <StyledH2>Home</StyledH2>
      </UnstyledLink>
      <UnstyledLink to={routes.rules()}>
        <StyledH2>Rules</StyledH2>
      </UnstyledLink>
      <UnstyledLink to={routes.gameplay()}>
        <StyledH2>Gameplay</StyledH2>
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
`
const UnstyledLink = styled(Link)`
  text-decoration: none;
`
