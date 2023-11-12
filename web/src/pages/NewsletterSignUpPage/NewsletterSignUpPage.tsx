import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import HubSpotForm from 'src/components/HubSpotForm/HubSpotForm'
import { StyledH1 } from 'src/design/Typography'
import styled from 'styled-components'

const NewsletterSignUpPage = () => {
  return (
    <>
      <MetaTags
        title="Newsletter"
        description="Sign up to get updates from Vertical Scramble."
      />
      <Container>
        <StyledH1>Update Me!</StyledH1>
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
