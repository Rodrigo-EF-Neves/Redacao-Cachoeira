import styles from './Home.module.css'

import Libertadores from '../../imgs/libertadores_news.jpg'

import Carousel from '../layout/Carousel'
import { CarouselData } from '../layout/CarouselData'

function Home(){
    return (
        <main className={styles.home_container}>
            <section>
                <Carousel imagens={CarouselData}/>
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
        </main>
    )
}

export default Home;