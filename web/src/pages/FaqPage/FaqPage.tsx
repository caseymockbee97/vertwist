import styled from '@emotion/styled'

import { MetaTags } from '@redwoodjs/web'

import Faq from 'src/components/Faq/Faq'
import { StyledH1 } from 'src/design/Typography'

interface Faq {
  question: string
  answer: string
}

const FAQS: Faq[] = [
  {
    question: 'What is Vertical Scramble?',
    answer:
      'Vertical Scramble is a card game for climbers to use in conjunction with the spray wall.',
  },
  {
    question: 'When can I buy it?',
    answer:
      "We are going to have preorders available soon. We are hoping to ship them out by the end of February but we can't currently guarantee a date.",
  },
  {
    question: 'Where can I buy it?',
    answer:
      'We are going to have a storefront on shopify soon! Stay up to date by following us on Instagram!',
  },
  {
    question: 'How many people do I need to play Vertical Scramble?',
    answer:
      'The minimum number of people you can play the game with is two. One person to read the cards and one or more people on the spray wall.',
  },
  {
    question: 'Can I play Vertical Scramble without a spray wall?',
    answer:
      "We haven't come up with a way but let us know if you come up with a way!",
  },
  {
    question: 'Can I sell this at my climbing gym?',
    answer:
      "We would love to work with you to make it happen! Reach out to us a we'll try to make something work!",
  },
  {
    question: 'What comes included in the box?',
    answer:
      '24 action cards, 24 color cards, 6 blank cards, and 2 instruction cards.',
  },
  {
    question: 'Is there an app for Vertical Scramble?',
    answer: 'There might be one in the pipeline 👀.',
  },
  {
    question: 'How do you play Vertical Scramble?',
    // TODO: Update this to accept links!
    answer: 'Find out here!',
  },
]

const FaqPage = () => {
  return (
    <>
      <MetaTags title="Faq" description="Faq page" />

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
