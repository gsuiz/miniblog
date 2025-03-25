import style from './BlackButton.module.css'

function BlackButton({ text }) {
    return <button className={style.blackButton}>{text}</button>
}

export default BlackButton