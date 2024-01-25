import styled from '@emotion/styled'

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
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const App = styled.div`
  padding: 36px calc((100vw - 500px) / 2);

  /* If it is a small screen it wil make the body better sized.  */
  @media (max-width: 600px) {
    padding: 36px calc((100vw - 300px) / 2);
  }
  min-height: calc(100vh - 48px);
  margin-bottom: 72px;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`

export default MainLayout
