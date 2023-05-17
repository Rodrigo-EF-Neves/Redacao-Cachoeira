import Menu from "./Menu";

import { useState } from "react";
import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai";

import styles from './Navbar.module.css'
import Logo from '../../imgs/fritz.png'

function Navbar(){

    const [showMenu, setShowMenu] = useState(false);
    const [showCloseIcon, setShowCloseIcon] = useState(false);

    const handleIconClick = () => {
        setShowCloseIcon(!showCloseIcon);
        setShowMenu(!showMenu);
    }

    return (
        <nav className={styles.navbar}>
                {showMenu === false && (
                    <div className={styles.menu}> 
                        <AiOutlineMenu onClick={handleIconClick} />
                        <p>
                            <span>Menu</span>
                        </p>
                    </div>
                )}
                {showMenu === true && (
                    <div className={styles.menu}> 
                        <AiOutlineCloseCircle onClick={handleIconClick} />
                        <Menu />
                        <p>
                            <span>Menu</span>
                        </p>
                    </div>
                )}
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