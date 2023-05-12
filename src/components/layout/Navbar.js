import { AiOutlineMenu } from "react-icons/ai";
import styles from './Navbar.module.css'

function Navbar(){
    return (
        <nav className={styles.navbar}>
            <div className={styles.menu}>
                <AiOutlineMenu /> 
                <p>
                    <span>Menu</span>
                </p>
            </div>
            <div>
                <h1>Redação Cachoeira</h1>
            </div>
            <div>
                <p>Logo</p>
            </div>
        </nav>
    )
}

export default Navbar;