import styled from '@emotion/styled'

import { MetaTags } from '@redwoodjs/web'

import Faq from 'src/components/Faq/Faq'
import { WHITE } from 'src/design/Colors'
import { StyledH1, StyledH3 } from 'src/design/Typography'

interface Faq {
  question: string
  answer: JSX.Element
}

const FaqPage = () => {
  return (
    <>
      <MetaTags title="FAQ" description="Frequently Asked Questions" />

      <Container>
        <StyledH1>FAQ</StyledH1>
        {FAQS.map(({ answer, question }) => (
          <Faq answer={answer} question={question} key={question} />
        ))}
      </Container>
    </>
  )
}

export default FaqPage

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const StyledExternalLink = styled.a`
  color: ${WHITE};
  text-decoration: underline;
`

const FAQS: Faq[] = [
  {
    question: 'What is Vertical Scramble?',
    answer: (
      <StyledH3 color={WHITE}>
        Vertical Scramble is a card game for climbers to use in conjunction with
        the spray wall.
      </StyledH3>
    ),
  },
  {
    question: 'When can I buy it?',
    answer: (
      <StyledH3 color={WHITE}>
        We are going to have preorders available soon. We are hoping to ship
        them out by the end of February but we can&apos;t currently guarantee a
        date.
      </StyledH3>
    ),
  },
  {
    question: 'Where can I buy it?',
    answer: (
      <StyledH3 color={WHITE}>
        We are going to have a storefront soon! Stay up to date by following us
        on{' '}
        <StyledExternalLink
          href="https://www.instagram.com/vertical.scramble/"
          target="_blank"
        >
          Instagram
        </StyledExternalLink>
        !
      </StyledH3>
    ),
  },
  {
    question: 'How many people do I need to play Vertical Scramble?',
    answer: (
      <StyledH3 color={WHITE}>
        The minimum number of people you can play the game with is <b>2</b>.{' '}
        <b>1</b> person to read the cards and <b>1+</b> people on the spray
        wall.
      </StyledH3>
    ),
  },
  {
    question: 'Can I play Vertical Scramble without a spray wall?',
    answer: (
      <StyledH3 color={WHITE}>
        We haven&apos;t come up with a way but let us know if you come up with a
        way!
      </StyledH3>
    ),
  },
  {
    question: 'Can I sell this at my climbing gym?',
    answer: (
      <StyledH3 color={WHITE}>
        We would love to work with you to make it happen! Reach out to us a
        we&apos;ll try to make something work!
      </StyledH3>
    ),
  },
  {
    question: 'What comes included in the box?',
    answer: (
      <StyledH3 color={WHITE}>
        24 action cards, 24 color cards, 6 blank cards, and 2 instruction cards.
      </StyledH3>
    ),
  },
  {
    question: 'Is there an app for Vertical Scramble?',
    answer: (
      <StyledH3 color={WHITE}>
        There might be one in the pipeline 👀 stay tuned for more information.
      </StyledH3>
    ),
  },
  {
    question: 'How do you play Vertical Scramble?',
    answer: (
      <StyledH3 color={WHITE}>
        Find out how to play on our gameplay page!
      </StyledH3>
    ),
  },
]
