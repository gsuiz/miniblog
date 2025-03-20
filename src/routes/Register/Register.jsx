import style from './Register.module.css'
import LabeledInput from '../../components/LabeledInput'
import GreenButton from '../../components/GreenButton'
import useRegister from '../../hooks/useRegister'

function Register() {
  const { registrationData, handleChange, handleSubmit, errors, loading } =
    useRegister()

  return (
    <div className={style.register}>
      <h1>Cadastre-se para postar</h1>
      <p>Crie seu usuário e compartilhe suas histórias</p>
      <form className={style.register__form} onSubmit={handleSubmit}>
        <LabeledInput
          label="Nome:"
          type="text"
          placeholder="Nome do usuário"
          name="name"
          handle={handleChange}
          value={registrationData.name}
        ></LabeledInput>
        <LabeledInput
          label="Email:"
          type="email"
          placeholder="E-mail do usuário"
          name="email"
          handle={handleChange}
          value={registrationData.email}
        ></LabeledInput>
        <LabeledInput
          label="Senha:"
          type="password"
          placeholder="Insira a senha"
          name="password"
          handle={handleChange}
          value={registrationData.password}
        ></LabeledInput>
        <LabeledInput
          label="Confirmação de senha:"
          type="password"
          placeholder="Confirme a senha"
          name="confirmation_password"
          handle={handleChange}
          value={registrationData.confirmation_password}
        ></LabeledInput>
        {loading ? (
          <GreenButton text="Cadastrando..." active={false}></GreenButton>
        ) : (
          <GreenButton text="Entrar"></GreenButton>
        )}
      </form>
      {errors && <div className="error">{errors}</div>}
    </div>
  )
}

export default Register
