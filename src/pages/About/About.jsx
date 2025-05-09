import styles from './About.module.css'
import { Link } from "react-router-dom"

const About = () => {
  return (
    <div className={styles.About}>
        <h1>
            Sobre o mini <span>Blog</span>Dev
        </h1>

        <p>
            Projeto criado para servir de aprendizado de React, 3 Semestre do curso de desenvolvimento de software multiplataforma<span>Fatec Matao</span>
        </p>
            <link to="/posts/create" className='btn'>Criar Post</link>

    </div>
  )
}

export default About
