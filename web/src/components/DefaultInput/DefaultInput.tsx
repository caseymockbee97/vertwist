import styled from '@emotion/styled'

import { EmailField, TextField } from '@redwoodjs/forms'

import { TANGAROA_100, TANGAROA_500 } from 'src/design/Colors'

// TODO: Look up how to use this when you have wifi.
// const inputStyles = css<{ width?: string }>`
//   padding: 6px 12px;
//   border-radius: 5px;
//   width: ${({ width }) => (width ? width : 'auto')};

//   /* FONT H3 */
//   font-family: Lato;
//   font-size: 16px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 16px; /* 100% */
//   letter-spacing: -0.48px;
//   color: ${TANGAROA_500};
//   &::placeholder {
//     color: ${TANGAROA_100};
//   }
// `

const DefaultInput = styled(TextField)<{ width?: string }>`
  padding: 6px 12px;
  border-radius: 5px;
  width: ${({ width }) => (width ? width : 'auto')};

  /* FONT H3 */
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 100% */
  letter-spacing: -0.48px;
  color: ${TANGAROA_500};
  &::placeholder {
    color: ${TANGAROA_100};
  }
`
export const EmailInput = styled(EmailField)<{ width?: string }>`
  padding: 6px 12px;
  border-radius: 5px;
  width: ${({ width }) => (width ? width : 'auto')};

  /* FONT H3 */
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 100% */
  letter-spacing: -0.48px;
  color: ${TANGAROA_500};
  &::placeholder {
    color: ${TANGAROA_100};
  }
`

export default DefaultInput
