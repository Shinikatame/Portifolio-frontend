import styles from "../styles/components/projects.module.sass"
import { BiCodeAlt, BiNavigation } from "react-icons/bi"

const Projects = () => {
    return (
    <div className={styles.projects}>
        <div className={styles.project}>
            <h2>AniSearch</h2>
            <p>Pesquisa de animes usando ReactTS, NextTS, Sass, GraphQL ( Anilist API )</p>
            <footer>
                <span>TypeScript</span>
                <div className={styles.links}>
                    <a href="https://github.com/Shinikatame/AniSearch" target="_blank">
                        <i>
                            <BiCodeAlt />
                        </i>
                    </a>

                    <a href="https://anisearch-tau.vercel.app/" target="_blank">
                        <i>
                            <BiNavigation />
                        </i>
                    </a>
                </div>
            </footer>
        </div>

        <div className={styles.project}>
            <h2>Em breve</h2>
            <p>Trabalhando em novos projetos</p>
        </div>
    </div>
    )
}
  
export default Projects
  