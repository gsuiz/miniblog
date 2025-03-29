import GreenButton from '../../components/GreenButton'
import style from './About.module.css'

function About() {
  return (
    <div className={style.about}>
      <h2>Sobre o Mini Blog</h2>
      <p>
        Este projeto consiste em um blog feito com React no front-end e Firebase
        no back-end.
      </p>
      <GreenButton text="Criar post"></GreenButton>
    </div>
  )
}

export default About
