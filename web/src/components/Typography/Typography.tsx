import { ORANGE_500 } from 'src/design/Colors'
import styled from 'styled-components'

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'p'

interface TypographyProps {
  children?: React.ReactNode
  variant: TypographyVariant
}

const Typography = ({ children, variant }: TypographyProps) => {
  switch (variant) {
    case 'h1':
      return <StyledH1>{children}</StyledH1>
    case 'h2':
      return <StyledH2>{children}</StyledH2>
    case 'h3':
      return <StyledH3>{children}</StyledH3>
    case 'p':
      return <StyledP>{children}</StyledP>
  }
  return <h1 style={{ color: 'red' }}>Pass in a variant silly goose 🪿</h1>
}
const StyledH1 = styled.h1<{ color?: string }>`
  color: ${({ color }) => (color ? color : ORANGE_500)};
  font-family: Lato;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px; /* 100% */
  letter-spacing: -0.96px;
`
const StyledH2 = styled.h2<{ color?: string }>`
  color: ${({ color }) => (color ? color : ORANGE_500)};
  font-family: Lato;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 100% */
  letter-spacing: -0.72px;
`
const StyledH3 = styled.h3<{ color?: string }>`
  color: ${({ color }) => (color ? color : ORANGE_500)};
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 100% */
  letter-spacing: -0.48px;
`
const StyledP = styled.p<{ color?: string }>`
  color: ${({ color }) => (color ? color : ORANGE_500)};
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px; /* 100% */
  letter-spacing: -0.42px;
`

export default Typography
