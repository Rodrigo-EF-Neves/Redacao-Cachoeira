import styles from './Login.module.css'

import { Link } from 'react-router-dom';
import { FaUserAlt, FaLock } from 'react-icons/fa';

function Login () {
    return (
        <main className={styles.login_container}>
            <h2>Login</h2>
            <div className={styles.form_container}>
                <form className={styles.form}>
                    <div className={styles.field_container}>
                        <label htmlFor="user">Usuário</label>
                        <div className={styles.icon_input_container}>
                            <FaUserAlt />
                            <input
                                type="text"
                                name="user"
                                id="user"
                                placeholder="Insira seu nome de usuário"
                            />
                        </div>
                        <label htmlFor="password">Senha</label>
                        <div className={styles.icon_input_container}>
                            <FaLock/>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Insira a sua senha"
                            />
                        </div>
                    </div>
                    <div className={styles.btn}>
                        <button type="button">
                            Entrar
                        </button>
                    </div>
                </form>
            </div>
            <div className={styles.options_container}>
                        <p className={styles.sign_up_option}>
                            Não possui uma conta? 
                            <span>
                                <Link to="/signup">
                                    <p>Cadastre-se</p>
                                </Link>
                            </span>
                        </p>
                        <p className={styles.forgot_password}>
                            Esqueci minha senha
                        </p>
            </div>  
        </main>
    )
}

export default Login;