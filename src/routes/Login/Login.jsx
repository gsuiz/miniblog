import style from './Login.module.css'
import LabeledInput from '../../components/LabeledInput'
import GreenButton from '../../components/GreenButton'

function Login() {
  return (
    <div className={style.login}>
      <h1>Entrar</h1>
      <p>Faça o login para poder utilizar o sistema</p>
      <form className={style.login__form}>
        <LabeledInput
          label="Email:"
          type="email"
          placeholder="Email do usuário"
          name="email"
        ></LabeledInput>
        <LabeledInput
          label="Senha:"
          type="password"
          placeholder="Insira a senha"
          name="password"
        ></LabeledInput>
        <GreenButton text="Entrar" />
      </form>
    </div>
  )
}

export default Login
