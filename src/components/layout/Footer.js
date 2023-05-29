import styles from './Footer.module.css';
import Logo from '../../imgs/fritz.png';

import {FaInstagram, FaFacebook, FaTwitter} from "react-icons/fa";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.copyright_container}>
                <div className={styles.footer_logo_container}>
                    <h2>Redação Cachoeira</h2>
                    <img src={Logo} alt="Jacaré Fritz"/>
                </div>
                <p>&copy; Redação Cachoeira 2023. Todos os direitos reservados.</p>
            </div>
            <div className={styles.line}></div>
            <div className={styles.list_container}>
                <h4>Acompanhe as notícias nas redes sociais</h4>
                <ul className={styles.social_list}>
                    <li>
                        <FaFacebook />
                    </li>
                    <li>
                        <FaInstagram />
                    </li>
                    <li>
                        <FaTwitter />
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;