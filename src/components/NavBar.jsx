import style from './NavBar.module.css'
import { NavLink } from 'react-router'

function NavBar() {
  return (
    <nav className={style.navBar}>
      <h1 className={style.navBar__logo}>
        Mini <span>BLOG</span>
      </h1>
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
    </nav>
  )
}

export default NavBar
