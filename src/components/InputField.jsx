import style from './InputField.module.css'

function InputField({ type, placeholder, name, modifier = '' }) {
  return (
    <input
      type={type}
      className={`${style.InputField} ${style[`InputField--${modifier}`]}`}
      name={name}
      placeholder={placeholder}
      autoComplete="off"
      required
    />
  )
}

export default InputField
