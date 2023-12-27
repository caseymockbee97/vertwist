import styled from '@emotion/styled'

import { StyledH2 } from 'src/design/Typography'

interface Props {
  question: string
  answer: JSX.Element
}

const Faq = ({ question, answer }: Props) => {
  return (
    <Container>
      <StyledH2>{question}</StyledH2>
      {answer}
    </Container>
  )
}

export default Faq

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`
