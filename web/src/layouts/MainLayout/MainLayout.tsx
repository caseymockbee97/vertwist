import { TANGAROA_500 } from "src/design/Colors"
import styled from "styled-components"

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return <Container>{children}</Container>
}

const Container = styled.div`
  background-color: ${TANGAROA_500};
  height: 100vh;
  width: 100vw;
  overflow: auto;
`
export default MainLayout
