import styled from "styled-components"
import { ORANGE_500 } from "../Colors"

export const StyledH1 = styled.h1<{ color?: string }>`
  color: ${({ color }) => (color ? color : ORANGE_500)};
  font-family: Lato;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px; /* 100% */
  letter-spacing: -0.96px;
`
export const StyledH2 = styled.h2<{ color?: string }>`
  color: ${({ color }) => (color ? color : ORANGE_500)};
  font-family: Lato;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 100% */
  letter-spacing: -0.72px;
`
export const StyledH3 = styled.h3<{ color?: string }>`
  color: ${({ color }) => (color ? color : ORANGE_500)};
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 100% */
  letter-spacing: -0.48px;
`
export const StyledP = styled.p<{ color?: string }>`
  color: ${({ color }) => (color ? color : ORANGE_500)};
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px; /* 100% */
  letter-spacing: -0.42px;
`
