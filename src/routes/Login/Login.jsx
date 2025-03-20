import style from './Login.module.css'
import LabeledInput from '../../components/LabeledInput'
import GreenButton from '../../components/GreenButton'
import useLogin from '../../hooks/useLogin'

function Login() {

  const { loginCredentials, handleChange, handleSubmit, errors } = useLogin()

  return (
    <div className={style.login}>
      <h1>Entrar</h1>
      <p>Faça o login para poder utilizar o sistema</p>
      <form className={style.login__form} onSubmit={handleSubmit}>
        <LabeledInput
          label="Email:"
          type="email"
          placeholder="Email do usuário"
          name="email"
          handle={handleChange}
          value={loginCredentials.email}
        ></LabeledInput>
        <LabeledInput
          label="Senha:"
          type="password"
          placeholder="Insira a senha"
          name="password"
          handle={handleChange}
          value={loginCredentials.password}
        ></LabeledInput>
        <GreenButton text="Entrar" />
      </form>
      {errors && (
        <div className="error">{errors}</div>
      )}
    </div>
  )
}

export default Login
