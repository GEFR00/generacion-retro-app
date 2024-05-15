import './App.css'
import { Banner } from './components/Banner/Banner'
import { Menu } from './components/Menu/Menu'

function App() {

  return (
    <>
      <Menu />
      <Banner showPrograms={true} tableInfoName={'Programas'} />
    </>
  )
}

export default App
