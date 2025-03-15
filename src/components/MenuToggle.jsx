import { NavLink } from 'react-router'
import style from './NavBar.module.css'
import { useState } from 'react'

function MenuToggle() {
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
