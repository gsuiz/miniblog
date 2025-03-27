import style from './BlackButton.module.css'

function BlackButton({ text, handle }) {
    return <button className={style.blackButton} onClick={handle}>{text}</button>
}

export default BlackButton