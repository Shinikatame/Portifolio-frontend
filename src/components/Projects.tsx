import styles from "../styles/components/projects.module.sass";
import { BiCodeAlt, BiNavigation } from "react-icons/bi";

import { ReposProps } from "../Interfaces/Repos";

const Projects = (props: ReposProps) => {
  return (
    <div className={styles.projects}>

        {props.data.map(repo => { return (
        <div className={styles.project} key={styles.project}>

            <h2>{repo.name.replace('-', ' ')}</h2>
            <p>{repo.description}</p>

            <footer>
                <span>{repo.primaryLanguage}</span>

                { repo.homepageUrl &&
                <a href={repo.homepageUrl} target="_blank" rel="noreferrer">
                    <i><BiNavigation /></i>
                </a>
                }

                <a href={repo.url} target="_blank" rel="noreferrer">
                    <i><BiCodeAlt /></i>
                </a>
            </footer>
        </div>
        )})}

       <div className={styles.project}>
         <h2>Em breve</h2>
         <p>Trabalhando em novos projetos</p>
       </div>
       
    </div>
  );
};

export default Projects;
