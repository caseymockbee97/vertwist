import styled from '@emotion/styled'

import { Link, routes, useMatch } from '@redwoodjs/router'

import {
  TANGAROA_500,
  ORANGE_300,
  TANGAROA_400,
  ORANGE_500,
  WHITE,
} from 'src/design/Colors'
import { StyledH2 } from 'src/design/Typography'

const NavBar = () => {
  const isHomeActive = useMatch(routes.home())
  const isGameplayActive = useMatch(routes.gameplay())
  const isFaqActive = useMatch(routes.faq())

  return (
    <Container>
      <UnstyledLink to={routes.home()}>
        <StyledH2
          color={isHomeActive.match ? WHITE : ORANGE_500}
          hoverColor={ORANGE_300}
        >
          Home
        </StyledH2>
      </UnstyledLink>
      <UnstyledLink to={routes.gameplay()}>
        <StyledH2
          color={isGameplayActive.match ? WHITE : ORANGE_500}
          hoverColor={ORANGE_300}
        >
          Gameplay
        </StyledH2>
      </UnstyledLink>
      <UnstyledLink to={routes.faq()}>
        <StyledH2
          color={isFaqActive.match ? WHITE : ORANGE_500}
          hoverColor={ORANGE_300}
        >
          FAQ
        </StyledH2>
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
  box-shadow: 0px 1px 3px ${TANGAROA_400};
`
const UnstyledLink = styled(Link)`
  text-decoration: none;
`
