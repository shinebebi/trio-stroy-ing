import React, { useState, useEffect } from 'react';
import img1 from './projectImg/img1.jpeg'
import img2 from './projectImg/img2.jpeg'
import img3 from './projectImg/img3.jpeg'
import img4 from './projectImg/img4.jpeg'
import style from './project.module.css'
import { Link } from "react-router-dom";

export type ProjType = {
    src: string;
    text: string;
    link: string,
    header: string
};

export const projInfo: ProjType[] = [
    { src: img1, text: '', link: '', header: 'Географическое общество' },
    { src: img2, text: '', link: '', header: 'Храм Василия Блаженного' },
    { src: img3, text: '', link: '', header: '"Елисеевкий" рынок' },
    { src: img4, text: '', link: '', header: 'Российское военно-историческое обзество'},

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
        <Link to='/'
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