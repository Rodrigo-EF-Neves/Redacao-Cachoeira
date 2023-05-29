import Estrada from '../../imgs/estrada.jpg'
import styles from './News.module.css'

function News() {
    return (
        <main className={styles.news_container}>
            <h2>NOTÍCIAS</h2>
            <section className={styles.news}>
                <div className={styles.news_info}>
                    <div className={styles.news_image}>
                        <img src={Estrada} alt="Duplicação da BR 470" />
                    </div>
                    <div className={styles.news_info_text}>
                        <h5>Duplicação da BR 470: Entenda as mudanças</h5>
                        <p className={styles.news_date}>19/05/2023</p>
                        <p>O trânsito ficará engarrafado</p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default News;