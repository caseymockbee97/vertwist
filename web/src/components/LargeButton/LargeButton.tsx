import {
  ORANGE_500,
  TANGAROA_100,
  TANGAROA_500,
  WHITE,
} from 'src/design/Colors'
import styled from 'styled-components'
import Typography from '../Typography/Typography'

type ButtonVariant = 'primary' | 'secondary'

interface LargeButtonProps {
  onClick?: () => unknown
  text: string
  variant?: ButtonVariant
  disabled?: boolean
}

const LargeButton = ({
  onClick,
  text,
  variant = 'primary',
  disabled = false
}: LargeButtonProps) => {
  switch (variant) {
    case 'primary':
      return (
        <PrimaryButton onClick={onClick} disabled={disabled}>
          <Typography variant="h1">{text}</Typography>
        </PrimaryButton>
      )
    case 'secondary':
      return (
        <SecondaryButton onClick={onClick} disabled={disabled}>
          <Typography variant="h1">{text}</Typography>
        </SecondaryButton>
      )
  }
}

const BaseButton = styled.button`
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
`
const SecondaryButton = styled(BaseButton)`
  background-color: ${WHITE};
`

export default LargeButton
