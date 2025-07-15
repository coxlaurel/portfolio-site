import './styles/SocialLinks.css';

import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function SocialLinks() {
    return <>
        <div className="social-link-container">
            <a className="social-link-icon" href="https://www.linkedin.com/in/coxlaurel/"><FaLinkedin /></a>
            <a className="social-link-icon" href="https://github.com/coxlaurel"><FaGithub /></a>
        </div>
    </>
}

export default SocialLinks;