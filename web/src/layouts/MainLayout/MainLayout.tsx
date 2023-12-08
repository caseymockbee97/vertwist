import styled from 'styled-components'

import NavBar from 'src/components/NavBar/NavBar'
import { TANGAROA_500 } from 'src/design/Colors'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Screen>
      <NavBar />
      <App>{children}</App>
    </Screen>
  )
}

const Screen = styled.div`
  background-color: ${TANGAROA_500};
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`
const App = styled.div`
  padding: 60px 0px;
  width: 300px;
  overflow: auto;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`

export default MainLayout
