import React, { useState, useEffect } from 'react';
import prom_img from '../slider/prom2.jpg'
import civil_img from '../slider/city2.jpg'
import exploat_img from '../slider/exploat2.jpg'
import door_img from '../slider/door.jpeg'
import furniture_img from '../slider/furniture.jpeg'
import window_img from '../slider/window.png'
import style from './service.module.css'
import { Link } from "react-router-dom";

export type ImageType = {
    src: string;
    text: string;
    link: string
};

export const imagesService: ImageType[] = [
    { src: prom_img, text: 'Промышленное строительство', link: '/engineering/prom' },
    { src: civil_img, text: 'Городское строительство', link: '/engineering/civil' },
    { src: exploat_img, text: 'Ввод в эксплуатацию инженерных объектов', link: '/engineering/exploat' },
    { src: door_img, text: 'Реставрация дверей', link: '/restore/doorrestore'},
    { src: window_img, text: 'Реставрация окон', link: '/restore/windowrestore' }

];



const Service: React.FC<any> = ({imageInfo}) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseOver = () => {
        setIsHovered(true);
    };

    const handleMouseOut = () => {
        setIsHovered(false);
    };
    return (
        <Link to={imageInfo.link}
            className={style.designCard}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            <div className={style.imageContainer}>
                <img src={imageInfo.src}/>
            </div>
            <h3 className={`${style.text} ${isHovered ? style.hovered : ''}`}>
                {imageInfo.text}
            </h3>
        </Link>
    );
};

export default Service;