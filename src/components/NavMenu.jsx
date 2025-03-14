import style from './NavBar.module.css'
import { NavLink } from 'react-router'

function NavMenu() {
  return (
    <ul className={style.navBar__menu}>
      <li className={style.menu__link}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? style.active : null)}
        >
          Home
        </NavLink>
      </li>
      <li className={style.menu__link}>
        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? style.active : null)}
        >
          Entrar
        </NavLink>
      </li>
      <li className={style.menu__link}>
        <NavLink
          to="/register"
          className={({ isActive }) => (isActive ? style.active : null)}
        >
          Cadastrar
        </NavLink>
      </li>
      <li className={style.menu__link}>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? style.active : null)}
        >
          Sobre
        </NavLink>
      </li>
    </ul>
  )
}

export default NavMenu
