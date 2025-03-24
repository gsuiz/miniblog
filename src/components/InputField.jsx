import style from './InputField.module.css'

function InputField({ type, placeholder, name, modifier = '', handle, value }) {
  return type === 'textarea' ? (
    <textarea
      className={`${style.InputField} ${style['InputField--extended']}`}
      name={name}
      placeholder={placeholder}
      maxLength={500}
      onChange={handle}
      value={value}
      required
    ></textarea>
  ) : (
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
