import styles from './Home.module.css'
import FestivalDeDanca from '../../imgs/festival_de_dança_news.jpg'

function Home(){
    
    return (
        <section className={styles.home_container}>
            <div className={styles.main_news}>
                <img src={FestivalDeDanca} alt="Festival de Dança de Joinville"/>
                <div className={styles.main_news_title}>
                    40° Festival de Dança de Joinville
                </div>
                <div className={styles.main_news_description}>
                    Atrações, apresentações e datas
                </div>
            </div>
        </section>
    )
}

export default Home;