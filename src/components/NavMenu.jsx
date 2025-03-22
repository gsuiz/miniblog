import style from './NavBar.module.css'
import { NavLink } from 'react-router'
import { useAuthValue } from '../context/AuthContext'

function NavMenu() {
  const { user } = useAuthValue()

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
      {user ? (
        <li className={style.menu__link}>
          <NavLink
            to="/posts/create"
            className={({ isActive }) => (isActive ? style.active : null)}
          >
            Novo post
          </NavLink>
        </li>
      ) : (
        <li className={style.menu__link}>
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? style.active : null)}
          >
            Entrar
          </NavLink>
        </li>
      )}
      {user ? (
        <li className={style.menu__link}>
          <NavLink
            to="/dashboard"
            className={({ isActive }) => (isActive ? style.active : null)}
          >
            Dashboard
          </NavLink>
        </li>
      ) : (
        <li className={style.menu__link}>
          <NavLink
            to="/register"
            className={({ isActive }) => (isActive ? style.active : null)}
          >
            Cadastrar
          </NavLink>
        </li>
      )}
      <li className={style.menu__link}>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? style.active : null)}
        >
          Sobre
        </NavLink>
      </li>
      {user ? <li className={style.menu__link}>
        <NavLink>Sair</NavLink>
        </li> : null}
    </ul>
  )
}

export default NavMenu
