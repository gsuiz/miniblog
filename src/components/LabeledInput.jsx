import InputField from './InputField'

function LabeledInput({ label, type, placeholder, name }) {
  return (
    <label>
      {label}
      <InputField
        type={type}
        placeholder={placeholder}
        name={name}
        modifier="extended"
      ></InputField>
    </label>
  )
}

export default LabeledInput
