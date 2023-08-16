import styled from 'styled-components'
import bg from './img/bg.jpg'
import { MainLayout } from './styles/Layout'
import Orb from './components/Orb/Orb'
import Navigation from './components/Navigation/Navigation'

function App() {
  return (
    <AppStyled>
      <Orb />
      <MainLayout>
        <Navigation />
      </MainLayout>
    </AppStyled>
  )
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`

export default App
