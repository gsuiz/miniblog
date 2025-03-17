import { NavLink } from 'react-router'
import style from './NavBar.module.css'
import { useEffect, useState } from 'react'

function MenuToggle() {

useEffect(() => {
  const menuToogle = document.querySelector(style.navBar__menuToogle)
  document.addEventListener("click", (e) => {
    if(e.target === menuToogle){
      console.log("a")
    }
  })
  
  return () => document.removeEventListener("click", () => setClicked(false))
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
        <li onClick={handleClick}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li onClick={handleClick}>
          <NavLink to="/login">Entrar</NavLink>
        </li>
        <li onClick={handleClick}>
          <NavLink to="/register">Cadastrar</NavLink>
        </li>
        <li onClick={handleClick}>
          <NavLink to="/about">Sobre</NavLink>
        </li>
      </ul>
    </>
  )
}

export default MenuToggle
