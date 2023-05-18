import styles from './Columns.module.css'
import Colunista from '../../imgs/colunista_observatorio_joinvilense.jpg'

function Columns () {
    return (
        <main className={styles.columns_container}>
            <h2>COLUNAS</h2>
            <section className={styles.columnist}>
                <div className={styles.columnist_info}>
                    <div>
                        <img src={Colunista} alt="Colunista do Observatório Joinvilense" />
                    </div>
                    <div className={styles.columnist_info_text}>
                        <p><span>Observatório Joinvilense</span></p>
                        <h5>Colunista</h5>
                        <p>Apresentador do programa de rádio Observatório Joinvilense, o Autor escreve sobre as principais atraçõe e eventos da cidade.</p>
                    </div>
                </div>
            </section>
            <div className={styles.hr_container}>
                <hr/>
            </div>
        </main>
    )
}

export default Columns;