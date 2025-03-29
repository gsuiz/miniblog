import style from './GreenButton.module.css'

function Button({ text, active = true }) {
  return (
    <button className={style.button} disabled={!active}>
      {text}
    </button>
  )
}

export default Button
