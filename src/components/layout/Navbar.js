import { AiOutlineMenu } from "react-icons/ai";
import styles from './Navbar.module.css'
import Logo from '../../imgs/fritz.png'

function Navbar(){
    return (
        <nav className={styles.navbar}>
            <div className={styles.menu}>
                <AiOutlineMenu /> 
                <p>
                    <span>Menu</span>
                </p>
            </div>
            <div className={styles.main_title}>
                <h1>Redação Cachoeira</h1>
            </div>
            <div className={styles.logo}>
                <span>
                    <img src={Logo} alt="Jacaré Fritz"/>
                </span>
            </div>
        </nav>
    )
}

export default Navbar;