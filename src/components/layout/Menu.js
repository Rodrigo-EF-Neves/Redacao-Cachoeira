import styles from './Menu.module.css'

function Menu() {
    return (
        <div className={styles.menu_container}>
            <div className={styles.category}>
                <h6>Notícias</h6>
                <ul className={styles.menu_list}>
                    <li>Política</li>
                    <li>Esportes</li>
                    <li>Segurança</li>
                    <li>Especiais</li>
                </ul>
            </div>
            <div className={styles.category}>
                <h6>Conteúdo</h6>
                <ul className={styles.menu_list}>
                    <li>Colunas</li>
                    <li>Horóscopo</li>
                    <li>Previsão do tempo</li>
                </ul>
            </div>
            <div className={styles.category}>
                <h6>Serviços</h6>
                <ul className={styles.menu_list}>
                    <li>Cadastro de conta/Login</li>
                </ul>
            </div>
            <div className={styles.category}>
                <h6>A Empresa</h6>
                <ul className={styles.menu_list}>
                    <li>Quem somos</li>
                </ul>
            </div>
        </div>
    )
}

export default Menu;