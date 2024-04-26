import React, { useState, useEffect } from 'react';
import style from './slider.module.css';
import prom_img from './prom.jpg'
import civil_img from './civil.jpg'
import exploat_img from './exploat.jpg'
import next from './next.png'
import prev from './prev.png'

const images = [
    { src: prom_img, text: 'Промышленное строительство' },
    { src: civil_img, text: 'Городское строительство' },
    { src: exploat_img, text: 'Ввод в эксплуатацию инженерных объектов' }
];

const Slider = () => {
    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentImgIndex((currentImgIndex + images.length - 1) % images.length);
    };

    const handleNextClick = () => {
        setCurrentImgIndex((currentImgIndex + 1) % images.length);
    };
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImgIndex((currentImgIndex + 1) % images.length);
        }, 3000); // Переключение каждые 2 секунды
        return () => clearInterval(interval);
    }, [currentImgIndex]);

    return (
        <div className={style.sliderContainer} id="services">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`${style.sliderSlide} ${index === currentImgIndex ? style.active : ''}`}
                    style={{ backgroundImage: `url(${image.src})`}}
                >
                    <div className={style.overlayText}>{image.text}</div>
                </div>
            ))}
            <button onClick={handlePrevClick} className={`${style.button} ${style.prev}`}>
                <img src={prev}/>
            </button>
            <button onClick={handleNextClick} className={`${style.button} ${style.next}`}>
                <img src={next}/>
            </button>
        </div>
    );
};

export default Slider;