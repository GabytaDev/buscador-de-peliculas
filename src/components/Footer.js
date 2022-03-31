import "../styles/_Footer.scss";
import { SiLinkedin as Linkedin } from "react-icons/si";
import { SiGithub as Github } from "react-icons/si";
import { SiTwitter as Twitter } from "react-icons/si";
import { SiInstagram as Instagram } from "react-icons/si";
import { SiMaildotru as Mail } from "react-icons/si";

const Footer = () => {
    return (
        <div className="content-footer">
            <footer >
                <span>Realizado por Gabriela Loyola Carpio</span>
                <div className="content-icons">
                    <ul className="list-icons">
                        <li> <a href="https://www.linkedin.com/in/gabrielaloyolacarpio/"><Linkedin/> Linkedin</a></li>
                        
                        <li> <a href="https://github.com/GabytaDev"><Github/> GitHub</a></li>
                       
                        <li> <a href="mailto:gabyta.loyola@gmail.com"><Mail/> Mail </a></li>
                        
                        <li><a href="https://twitter.com/Gabytas09"><Twitter/> Twiter </a></li>
                        
                        <li><a href="https://www.instagram.com/gabriela.loyola.carpio/"><Instagram/> Instagram </a></li>
                        
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default Footer;