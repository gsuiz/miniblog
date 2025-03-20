import style from './InputField.module.css'

function InputField({ type, placeholder, name, modifier = '', handle, value }) {
  return (
    <input
      type={type}
      className={`${style.InputField} ${style[`InputField--${modifier}`]}`}
      name={name}
      placeholder={placeholder}
      onChange={handle}
      value={value}
      autoComplete="off"
      required
    />
  )
}

export default InputField
