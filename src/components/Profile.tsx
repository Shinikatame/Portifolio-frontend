import { useEffect, useState } from "react"

import styles from "../styles/components/profile.module.sass"
import { RiHome2Line } from "react-icons/ri"
import { GrGithub, GrLinkedinOption } from "react-icons/gr"
import axios from "axios"

type DataType = {
    "avatar_url": string,
    "html_url": string
}

const Profile = () => {
    const [ data, setData ]  = useState<DataType>({"avatar_url": "", "html_url": ""})

    useEffect(() => {
        axios("https://api.github.com/users/Shinikatame")
            .then(response => { setData(response.data) })
        }, [])
        
    return (
    <div className={styles.profile}>
        <div className={styles.about}>
            <img src={ data.avatar_url } alt="avatar"></img>
            <h1>Hudson Farias</h1>
            <span>Programador Fullstack Jr.</span>
        </div>
        
        <ul className={styles.infos}>
            <li><i><RiHome2Line /></i>Rio de Janeiro</li>
            <li><i><GrGithub /></i><a href={ data.html_url } target="_blank" rel="noreferrer">Shinikatame</a></li>
            <li><i><GrLinkedinOption /></i><a href="https://www.linkedin.com/in/hudson-shinikatame/" target="_blank" rel="noreferrer">Hudson Farias</a></li>
        </ul>

        <ul className={styles.technologies}>
            {/* <li><input type="checkbox">Python</li>
            <li><input type="checkbox">JavaScript / TypeScript</li>
            <li><input type="checkbox">HTML</li>
            <li><input type="checkbox">CSS</li> */}
            <li>Python</li>
            <li>JavaScript / TypeScript</li>
            <li>HTML</li>
            <li>CSS</li>
        </ul>
    </div>
    )
}
  
export default Profile