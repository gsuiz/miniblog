import { NavLink } from "react-router"
import style from "./NavBar.module.css"

function MenuToggle() {
  return (
    <>
      <div className={style.navBar__menuToggle}>
        <div className={style.menuToggle__line}></div>
        <div className={style.menuToggle__line}></div>
        <div className={style.menuToggle__line}></div>
      </div>
      <ul className={style.navBar__links}>
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
