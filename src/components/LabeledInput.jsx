import InputField from './InputField'

function LabeledInput({ label, type, placeholder, name, handle, value }) {
  return (
    <label>
      {label}
      <InputField
        type={type}
        placeholder={placeholder}
        name={name}
        modifier="extended"
        handle={handle}
        value={value}
      ></InputField>
    </label>
  )
}

export default LabeledInput
