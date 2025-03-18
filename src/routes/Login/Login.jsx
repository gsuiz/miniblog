import style from './Login.module.css'
import InputField from '../../components/InputField'
import GreenButton from '../../components/GreenButton'

function Login() {
  return (
    <div className={style.login}>
      <h1>Entrar</h1>
      <p>Faça o login para poder utilizar o sistema</p>
      <form className={style.login__form}>
        <label>
          E-mail:
          <InputField
            type="email"
            placeholder="Email do usuário"
            name="email"
            modifier="aumentado"
          />
        </label>
        <label>
          Senha:
          <InputField
            type="password"
            placeholder="Insira a senha"
            name="password"
            modifier="aumentado"
          />
        </label>
        <GreenButton text="Entrar" />
      </form>
    </div>
  )
}

export default Login
