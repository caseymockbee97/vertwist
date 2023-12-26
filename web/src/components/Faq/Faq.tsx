import styled from '@emotion/styled'

import { WHITE } from 'src/design/Colors'
import { StyledH2, StyledH3 } from 'src/design/Typography'

interface Props {
  question: string
  answer: string
}

const Faq = ({ question, answer }: Props) => {
  return (
    <Container>
      <StyledH2>{question}</StyledH2>
      <StyledH3 color={WHITE}>{answer}</StyledH3>
    </Container>
  )
}

export default Faq

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`
