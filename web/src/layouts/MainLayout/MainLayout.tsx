import styled from 'styled-components'

import { TANGAROA_500 } from 'src/design/Colors'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Screen>
      <App>{children}</App>
    </Screen>
  )
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
  padding: 60px 0px;
  width: 300px;
`

export default MainLayout
