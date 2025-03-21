import { NavLink } from 'react-router'
import style from './NavBar.module.css'
import { useEffect, useState } from 'react'
import { useAuthValue } from '../context/AuthContext'

function MenuToggle() {
  const { user } = useAuthValue()

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
          clicked
            ? user
              ? style['navBar__links--visible-logged']
              : style['navBar__links--visible-guest']
            : null
        }`}
      >
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          {user ? (
            <NavLink to="/newpost">Novo post</NavLink>
          ) : (
            <NavLink to="/login">Entrar</NavLink>
          )}
        </li>
        <li>
          {user ? (
            <NavLink to="/dashboard">Dashboard</NavLink>
          ) : (
            <NavLink to="/register">Cadastrar</NavLink>
          )}
        </li>
        <li>
          <NavLink to="/about">Sobre</NavLink>
        </li>
        {user ? (
          <li>
            <NavLink>Sair</NavLink>
          </li>
        ) : null}
      </ul>
    </>
  )
}

export default MenuToggle
