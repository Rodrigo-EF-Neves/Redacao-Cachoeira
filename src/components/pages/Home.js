import styles from './Home.module.css'
import FestivalDeDanca from '../../imgs/festival_de_dança_news.jpg'
import Libertadores from '../../imgs/libertadores_news.jpg'

function Home(){
    
    return (
        <div>
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
            <hr className={styles.horizontal_line}/>
            <section className={styles.home_news_container}>
                <div className={styles.home_news_img}>
                   <img src={Libertadores} alt="Libertadores da América"/>
                </div>
                <div className={styles.home_news_text}>
                    <h3>Confira os jogos da Libertadores da América</h3>
                </div>
            </section>
        </div>
    )
}

export default Home;