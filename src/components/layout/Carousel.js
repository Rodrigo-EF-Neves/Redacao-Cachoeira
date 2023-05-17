import styles from './Carousel.module.css'

import React, { useState } from 'react';
import { CarouselData } from './CarouselData';

import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

function Carousel ({ imagens }) {
    const [current, setCurrent] = useState(0)
    const length = imagens.length

    if(!Array.isArray(imagens) || imagens.length <= 0){
        return null;
    }

    const prevImage = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    const nextImage = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    return (
        <section className={styles.carousel}>
            <FaArrowAltCircleLeft className={styles.left_arrow} onClick={prevImage} />
            <FaArrowAltCircleRight className={styles.right_arrow} onClick={nextImage} />
            {CarouselData.map((imagem, index) => {
                return (
                    <section>
                        <div className={index === current ? styles.slide_active : styles.slide} key={index}>
                            {index === current  && (
                                <div className={styles.carousel_image_container}>
                                    <img src={imagem.image} alt="Imagem do site" className={styles.main_news_image}/>
                                    <h2>{imagem.title}</h2>
                                    <p>{imagem.description}</p>
                                </div>
                                
                            )}
                        </div>
                    </section>
                )
            })}
        </section>
    )
}


export default Carousel;