import './Footer.css'
import { useDarkBackgroundContext } from '../context/DarkBackgroundContext'

function Footer() {
  const date = new Date().getFullYear()
  const { darkBackground } = useDarkBackgroundContext()

  return (
    <footer>
      <div className={darkBackground ? 'footer--darkened' : null}></div>
      <p>Escreva sobre o que você tem interesse!</p>
      <p>Mini Blog ©{date}</p>
    </footer>
  )
}

export default Footer
