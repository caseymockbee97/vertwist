import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import HubSpotForm from 'src/components/HubSpotForm/HubSpotForm'
import { WHITE } from 'src/design/Colors'
import { StyledH1, StyledH3, StyledP } from 'src/design/Typography'
import styled from 'styled-components'

const NewsletterSignUpPage = () => {
  return (
    <>
      <MetaTags title="Newsletter" description="Sign up to get updates" />
      <Container>
        <StyledH1>Update Me!</StyledH1>
        <StyledH3 color={WHITE}>
          Send us your email and we'll send you updates about Vertical Scramble!
        </StyledH3>
        <HubSpotForm />
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export default NewsletterSignUpPage
