import React, { useState, useEffect } from 'react';
import img1 from './projectImg/img1.jpeg'
import img2 from './projectImg/img2.jpeg'
import img3 from './projectImg/img3.jpeg'
import img4 from './projectImg/img4.jpeg'
import img5 from './projectImg/img5.jpeg'
import img6 from './projectImg/img6.jpeg'
import img7 from './projectImg/img7.jpeg'
import img8 from './projectImg/img8.jpeg'
import img9 from './projectImg/img9.jpeg'
import img10 from './projectImg/img10.jpeg'
import img11 from './projectImg/img11.jpeg'
import style from './project.module.css'
import { Link } from "react-router-dom";

export type ProjType = {
    src: string;
    text: string;
    link: string,
    header: string
};

export const projInfo: ProjType[] = [
    { src: img1, text: '', link: '/projects', header: 'Географическое общество' },
    { src: img2, text: '', link: '/projects', header: 'Храм Василия Блаженного' },
    { src: img3, text: '', link: '/projects', header: '"Елисеевкий" рынок' },
    { src: img4, text: '', link: '/projects', header: 'Российское военно-историческое общество'},
    { src: img5, text: '', link: '/projects', header: 'Ресторан «Салюмерия / Salumeria»'},
    { src: img6, text: '', link: '/projects', header: 'Дом Пашкова'},
    { src: img7, text: '', link: '/projects', header: 'Частный дом'},
    { src: img8, text: '', link: '/projects', header: 'Частный интерьер в центре Москвы'},
    { src: img9, text: '', link: '/projects', header: 'Большой театр'},
    { src: img10, text: '', link: '/projects', header: 'Школа Современной Пьесы'},
    { src: img11, text: '', link: '/projects', header: 'Российское Историческое Общество'}

];



const Project: React.FC<any> = ({projInfo}) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseOver = () => {
        setIsHovered(true);
    };

    const handleMouseOut = () => {
        setIsHovered(false);
    };
    return (
        <Link to={projInfo.link}
              className={style.designCard}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
        >
            <div className={style.imageContainer}>
                <img src={projInfo.src}/>
            </div>
            <div>
                <h3 className={`${style.text} ${isHovered ? style.hovered : ''}`}>
                    {projInfo.header}
                </h3>
            </div>
        </Link>
    );
};

export default Project;