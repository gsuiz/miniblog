import "./Footer.css"
function Footer() {
  const date = new Date().getFullYear()

  return (
    <footer>
      <p>Escreva sobre o que você tem interesse!</p>
      <p>Mini Blog ©{date}</p>
    </footer>
  )
}

export default Footer
