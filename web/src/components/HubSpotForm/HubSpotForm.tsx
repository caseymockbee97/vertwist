import { useState } from 'react'

import styled from '@emotion/styled'

import { CheckboxField, FieldError, Form, Label } from '@redwoodjs/forms'
import { navigate, routes } from '@redwoodjs/router'

import { WHITE } from 'src/design/Colors'
import { StyledH2, StyledH3, StyledP } from 'src/design/Typography'

import DefaultInput, { EmailInput } from '../DefaultInput/DefaultInput'
import LargeButton from '../LargeButton/LargeButton'

// TODO: update to use our own DB

export const HubSpotForm = () => {
  const [disabled, setDisabled] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formSubmitError] = useState('')

  const onSubmit = async () => {
    setDisabled(true)

    setSubmitted(true)

    setTimeout(() => {
      navigate(routes.home())
    }, 5000)
  }

  return submitted ? (
    <>
      <StyledH3 color={WHITE}>
        Thank you for signing up to our newsletter! You&apos;ll be hearing from
        us soon!
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
