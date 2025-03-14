import style from './NavBar.module.css'
import NavMenu from './NavMenu'
import MenuToggle from './MenuToggle'

function NavBar() {
  return (
    <nav className={style.navBar}>
      <h1 className={style.navBar__logo}>
        Mini <span>BLOG</span>
      </h1>
      <NavMenu></NavMenu>
      <MenuToggle></MenuToggle>
    </nav>
  )
}

export default NavBar
