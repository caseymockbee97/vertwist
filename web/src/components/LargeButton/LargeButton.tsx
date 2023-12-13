import styled from '@emotion/styled'

import {
  ORANGE_400,
  ORANGE_500,
  PURPLE_400,
  PURPLE_500,
  TANGAROA_100,
  TANGAROA_500,
} from 'src/design/Colors'
import { StyledH1 } from 'src/design/Typography'

type ButtonVariant = 'primary' | 'secondary'

interface LargeButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  onClick?: () => unknown
  children: React.ReactNode
  variant?: ButtonVariant
  disabled?: boolean
}

const LargeButton = ({
  onClick,
  children,
  variant = 'primary',
  disabled = false,
  ...htmlAttributes
}: LargeButtonProps) => {
  switch (variant) {
    case 'primary':
      return (
        <PrimaryButton
          onClick={onClick}
          disabled={disabled}
          {...htmlAttributes}
        >
          <StyledH1>{children}</StyledH1>
        </PrimaryButton>
      )
    case 'secondary':
      return (
        <SecondaryButton
          onClick={onClick}
          disabled={disabled}
          {...htmlAttributes}
        >
          <StyledH1>{children}</StyledH1>
        </SecondaryButton>
      )
  }
}

const BaseButton = styled.button`
  cursor: pointer;
  padding: 6px 12px;
  border-radius: 10px;
  & h1 {
    color: ${TANGAROA_500};
  }
  &:disabled h1 {
    color: ${TANGAROA_100};
  }
`

const PrimaryButton = styled(BaseButton)`
  background-color: ${ORANGE_500};
  &:hover {
    background-color: ${ORANGE_400};
  }
`
const SecondaryButton = styled(BaseButton)`
  background-color: ${PURPLE_500};
  &:hover {
    background-color: ${PURPLE_400};
  }
`

export default LargeButton
