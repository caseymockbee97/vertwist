import { TANGAROA_100, TANGAROA_500 } from 'src/design/Colors'
import styled from 'styled-components'

const DefaultInput = styled.input<{ width?: string }>`
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
