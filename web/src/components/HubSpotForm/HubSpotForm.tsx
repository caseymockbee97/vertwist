import { FieldError, Form, Label } from '@redwoodjs/forms'
import { useState } from 'react'
import styled from 'styled-components'
import LargeButton from '../LargeButton/LargeButton'
import DefaultInput, { EmailInput } from '../DefaultInput/DefaultInput'
import { StyledH2, StyledP } from 'src/design/Typography'
import { WHITE } from 'src/design/Colors'
import { navigate, routes } from '@redwoodjs/router'

export const HubSpotForm = () => {
  const [loading, setLoading] = useState(false)
  const [disabled, setDisabled] = useState(false)

  const onSubmit = (data: {
    email: string
    firstName?: string
    lastName?: string
  }) => {
    setDisabled(true)
    setTimeout(() => {
      navigate(routes.home())
    }, 2000)
  }

  return (
    <StyledForm onSubmit={onSubmit}>
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
      <StyledButton disabled={disabled || loading} type="submit">
        Subscribe
      </StyledButton>
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
