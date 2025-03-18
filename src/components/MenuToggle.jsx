import { NavLink } from 'react-router'
import style from './NavBar.module.css'
import { useEffect, useState } from 'react'

function MenuToggle() {
  const removeMenu = (event) => {
    const menuToggle = document.querySelector(`.${style.navBar__menuToggle}`)

    if (!menuToggle.contains(event.target)) {
      setClicked(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', (e) => removeMenu(e))

    return () => document.removeEventListener('click', (e) => removeMenu(e))
  }, [])

  const [clicked, setClicked] = useState(false)

  const handleClick = () => setClicked((prev) => !prev)

  return (
    <>
      <div
        className={`${style['navBar__menuToggle']} ${
          clicked ? style['navBar__menuToggle--clicked'] : null
        }`}
        onClick={handleClick}
      >
        <div className={style.menuToggle__line}></div>
        <div className={style.menuToggle__line}></div>
        <div className={style.menuToggle__line}></div>
      </div>
      <ul
        className={`${style.navBar__links} ${
          clicked ? style['navBar__links--visible'] : null
        }`}
      >
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/login">Entrar</NavLink>
        </li>
        <li>
          <NavLink to="/register">Cadastrar</NavLink>
        </li>
        <li>
          <NavLink to="/about">Sobre</NavLink>
        </li>
      </ul>
    </>
  )
}

export default MenuToggle
