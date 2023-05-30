import styles from './Signup.module.css'

function SignUp() {
    return (
        <main className={styles.signup_container}>
            <h2>Cadastro</h2>
                <form className={styles.form}>
                    <div className={styles.field_container}>
                        <label htmlFor="full_name">Nome completo</label>
                        <input
                            type="text"
                            name="full_name"
                            id="full_name"
                         />
                    </div>
                    <div className={styles.field_container}>
                        <label htmlFor="user">Usuário</label>
                        <input
                            type="text"
                            name="user"
                            id="user"
                         />
                    </div>
                    <div className={styles.field_container}>
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                         />
                    </div>
                    <div className={styles.field_container}>
                        <label htmlFor="tel">Número de celular/telefone</label>
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            placeholder="(XX) XXXXX-XXXX"
                         />
                    </div>
                    <div className={styles.field_container}>
                        <label htmlFor="password">Senha</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                         />
                    </div>
                    <div className={styles.field_container}>
                        <label htmlFor="password">Confirme a senha</label>
                        <input
                            type="password"
                            name="repassword"
                            id="repassword"
                         />
                    </div>
                     <div className={styles.button_container}>
                         <button type="button">Cadastrar</button>
                         <button type="reset">Limpar</button>
                     </div>
                </form>
        </main>
    )
}

export default SignUp;