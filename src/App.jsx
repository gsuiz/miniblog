import './App.css'
import { Outlet } from 'react-router'
import NavBar from './components/NavBar'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
