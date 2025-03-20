import style from './Register.module.css'
import LabeledInput from '../../components/LabeledInput'
import GreenButton from '../../components/GreenButton'

function Register() {
  return (
    <div className={style.register}>
      <h1>Cadastre-se para postar</h1>
      <p>Crie seu usuário e compartilhe suas histórias</p>
      <form className={style.register__form}>
        <LabeledInput
          label="Nome:"
          type="text"
          placeholder="Nome do usuário"
          name="name"
          handle={handleChange}
          value={user.name}
        ></LabeledInput>
        <LabeledInput
          label="Email:"
          type="email"
          placeholder="E-mail do usuário"
          name="email"
          handle={handleChange}
          value={user.email}
        ></LabeledInput>
        <LabeledInput
          label="Senha:"
          type="password"
          placeholder="Insira a senha"
          name="password"
          handle={handleChange}
          value={user.password}
        ></LabeledInput>
        <LabeledInput
          label="Confirmação de senha:"
          type="password"
          placeholder="Confirme a senha"
          name="confirmation_password"
          handle={handleChange}
          value={user.confirmation_password}
        ></LabeledInput>
        <GreenButton text="Entrar"></GreenButton>
      </form>
    </div>
  )
}

export default Register
