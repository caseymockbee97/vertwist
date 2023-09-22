import { TANGAROA_500 } from "src/design/Colors"
import styled from "styled-components"

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return <Screen>
    <App>
    {children}
    </App>
    </Screen>
}

const Screen = styled.div`
  background-color: ${TANGAROA_500};
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`
const App = styled.div`
  width: 300px;
`

export default MainLayout
