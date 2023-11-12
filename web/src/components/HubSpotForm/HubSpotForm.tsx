import { CheckboxField, FieldError, Form, Label } from '@redwoodjs/forms'
import { useState } from 'react'
import styled from 'styled-components'
import LargeButton from '../LargeButton/LargeButton'
import DefaultInput, { EmailInput } from '../DefaultInput/DefaultInput'
import { StyledH2, StyledH3, StyledP } from 'src/design/Typography'
import { WHITE } from 'src/design/Colors'
import { navigate, routes } from '@redwoodjs/router'

const FORM_ID = '81b89e89-930a-48bc-9c2b-ed548897ee91'
const PORTAL_ID = '44207835'

interface FormData {
  email: string
  firstName?: string
  lastName?: string
  agreedToTOS: string
}

const handleSubmit = async (data: FormData) => {
  return await fetch(
    `https://api.hsforms.com/submissions/v3/integration/secure/submit/${PORTAL_ID}/${FORM_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields: [
          {
            objectTypeId: '0-1',
            name: 'email',
            value: data.email,
          },
          {
            objectTypeId: '0-1',
            name: 'firstname',
            value: data.firstName,
          },
          {
            objectTypeId: '0-1',
            name: data.lastName,
            value: 'Jeff',
          },
        ],
        context: {
          pageUri: 'www.verticalscramble.com/newsletter',
          pageName: 'Newsletter',
        },
        legalConsentOptions: {
          consent: {
            // Include this object when GDPR options are enabled
            consentToProcess: true,
            text: 'I agree to receive promotional messages from Vertical Scramble.',
            communications: [
              {
                value: true,
                subscriptionTypeId: 999,
                text: 'I agree to receive marketing communications from Example Company.',
              },
            ],
          },
        },
      }),
    }
  )
}

export const HubSpotForm = () => {
  const [disabled, setDisabled] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formSubmitError, setFormSubmitError] = useState('')

  const onSubmit = async (data: FormData) => {
    setDisabled(true)
    const res = await handleSubmit(data)
    if (res.ok) {
      setSubmitted(true)
    } else {
      const errorRes = await res.json()
      console.log(errorRes)
      setFormSubmitError('')
    }

    setSubmitted(true)

    setTimeout(() => {
      navigate(routes.home())
    }, 5000)
  }

  return submitted ? (
    <>
      <StyledH3 color={WHITE}>
        Thank you for signing up to our newsletter! You'll be hearing from us
        soon!
      </StyledH3>
    </>
  ) : (
    <StyledForm id="Hubspot Form" onSubmit={onSubmit}>
      <InputWrapper>
        <StyledLabel name="email">
          <StyledH2>Email</StyledH2>
          <StyledP>*Required</StyledP>
        </StyledLabel>
        <EmailInput validation={{ required: true }} name="email" />
        <StyledP color={WHITE}>
          <FieldError name="email" />
        </StyledP>
      </InputWrapper>
      <InputWrapper>
        <Label name="firstName">
          <StyledH2>First Name</StyledH2>
        </Label>
        <DefaultInput name="firstName" />
        <StyledP color={WHITE}>
          <FieldError name="firstName" />
        </StyledP>
      </InputWrapper>
      <InputWrapper>
        <Label name="lastName">
          <StyledH2>Last Name</StyledH2>
        </Label>
        <DefaultInput name="lastName" />
        <StyledP color={WHITE}>
          <FieldError name="lastName" />
        </StyledP>
      </InputWrapper>
      <InputWrapper>
        <CheckboxWrapper>
          <CheckboxField
            name="consentToMessage"
            validation={{
              required: {
                message: 'You must agree to receive promotional messages.',
                value: true,
              },
            }}
          />
          <Label name="consentToMessage">
            <StyledH3>
              I agree to receive promotional messages from Vertical Scramble.
            </StyledH3>
          </Label>
        </CheckboxWrapper>
        <StyledP color={WHITE}>
          <FieldError name="consentToMessage" />
        </StyledP>
      </InputWrapper>

      <InputWrapper>
        <CheckboxWrapper>
          <CheckboxField
            name="consentToProcess"
            validation={{
              required: {
                message: 'You must agree for us to store your information.',
                value: true,
              },
            }}
          />
          <Label name="consentToProcess">
            <StyledH3>
              I agree to allow Vertical Scramble to store and process my
              personal data.
            </StyledH3>
          </Label>
        </CheckboxWrapper>
        <StyledP color={WHITE}>
          <FieldError name="consentToProcess" />
        </StyledP>
      </InputWrapper>
      <StyledP>
        You can unsubscribe from these communications at any time.
      </StyledP>
      <StyledButton disabled={disabled} type="submit">
        Subscribe
      </StyledButton>
      {!!formSubmitError && <StyledH3>{formSubmitError}</StyledH3>}
    </StyledForm>
  )
}

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const StyledLabel = styled(Label)`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`
const StyledButton = styled(LargeButton)`
  margin-top: 16px;
`

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

export default HubSpotForm

// useEffect(() => {
//   const script = document.createElement('script')
//   script.src = 'https://js.hsforms.net/forms/v2.js'
//   document.body.appendChild(script)

//   script.addEventListener('load', () => {
//     // @TS-ignore
//     if ((window as any).hbspt) {
//       // @TS-ignore
//       ;(window as any).hbspt.forms.create({
//         region: 'na1',
//         portalId: '44207835',
//         formId: '81b89e89-930a-48bc-9c2b-ed548897ee91',
//       })
//     }
//   })
// }, [])
