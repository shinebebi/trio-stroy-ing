import React, { useState, useEffect } from 'react';
import style from './slider.module.css';
import prom_img from './prom.jpg'
import civil_img from './civil.jpg'
import exploat_img from './exploat.jpg'
import next from './next.png'
import prev from './prev.png'
import door_img from './door.jpeg'
import furniture_img from './furniture.jpeg'
import {  Link } from "react-router-dom";
import window_img from './window.png'

export type ImageType = {
    src: string;
    text: string;
    link: string;
};

export const imagesIng: ImageType[] = [
    { src: prom_img, text: 'Промышленное строительство', link:'/engineering/prom' },
    { src: civil_img, text: 'Городское строительство', link: '/engineering/civil' },
    { src: exploat_img, text: 'Ввод в эксплуатацию инженерных объектов', link:'/engineering/exploat' }
];

export const imagesRestore: ImageType[] = [
    { src: door_img, text: 'Реставрация дверей', link:'/restore/doorrestore' },
    { src: window_img, text: 'Реставрация окон', link:'/restore/windowrestore' }
]


const Slider: React.FC<any> = ({ images }) => {
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
        }, 3000);
        return () => clearInterval(interval);
    }, [currentImgIndex]);

    return (
        <div className={style.sliderContainer} id="services">
            {images.map((image: ImageType, index:number) => (
                <Link to={images[currentImgIndex].link}
                    key={index}
                    className={`${style.sliderSlide} ${index === currentImgIndex ? style.active : ''}`}
                    style={{ backgroundImage: `url(${image.src})`}} onClick={() => console.log(image.src)}
                >
                    <div className={style.overlayText}>{image.text}</div>
                </Link>
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