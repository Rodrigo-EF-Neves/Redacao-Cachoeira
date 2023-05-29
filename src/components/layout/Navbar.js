import Menu from "./Menu";
import Container from "./Container";

import { useState } from "react";
import { Link } from "react-router-dom";
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
                        <AiOutlineMenu className={styles.menu_icon} onClick={handleIconClick} />
                        <p>
                            <span>Menu</span>
                        </p>
                    </div>
                )}
                {showMenu === true && (
                    <div className={styles.menu}> 
                        <AiOutlineCloseCircle className={styles.menu_icon} onClick={handleIconClick} />
                        <Menu />
                        <p>
                            <span>Menu</span>
                        </p>
                    </div>
                )}
            <div className={styles.main_title}>
                <h1>Redação Cachoeira</h1>
            </div>
            <Container>
                <div className={styles.logo}>
                    <p>
                        <span>Home</span>
                    </p>
                    <Link to="/">
                        <img src={Logo} alt="Jacaré Fritz"/>
                    </Link>
                </div>
            </Container>
        </nav>
    )
}

export default Navbar;