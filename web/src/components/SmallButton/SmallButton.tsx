import styled from '@emotion/styled'

import {
  ORANGE_500,
  TANGAROA_100,
  TANGAROA_500,
  WHITE,
} from 'src/design/Colors'
import { StyledH3 } from 'src/design/Typography'

type ButtonVariant = 'primary' | 'secondary'

interface SmallButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  onClick?: () => unknown
  children: React.ReactNode
  variant?: ButtonVariant
  disabled?: boolean
}

const SmallButton = ({
  onClick,
  children,
  variant = 'primary',
  disabled = false,
  ...htmlAttributes
}: SmallButtonProps) => {
  switch (variant) {
    case 'primary':
      return (
        <PrimaryButton
          onClick={onClick}
          disabled={disabled}
          {...htmlAttributes}
        >
          <StyledH3>{children}</StyledH3>
        </PrimaryButton>
      )
    case 'secondary':
      return (
        <SecondaryButton
          onClick={onClick}
          disabled={disabled}
          {...htmlAttributes}
        >
          <StyledH3>{children}</StyledH3>
        </SecondaryButton>
      )
  }
}

const BaseButton = styled.button<{}>`
  padding: 6px 12px;
  border-radius: 10px;
  cursor: pointer;
  & h3 {
    color: ${TANGAROA_500};
  }
  &:disabled h3 {
    color: ${TANGAROA_100};
  }
`

const PrimaryButton = styled(BaseButton)`
  background-color: ${ORANGE_500};
`
const SecondaryButton = styled(BaseButton)`
  background-color: ${WHITE};
`

export default SmallButton
