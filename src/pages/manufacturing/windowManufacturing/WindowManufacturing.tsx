import React, { useState, useEffect } from 'react';
// @ts-ignore
import Header from '../../../components/header/Header'
import style from './windowManufacturing.module.css'
import windows1 from './windowManufactoringImg/windows1.jpg'
import windows2 from './windowManufactoringImg/windows2.jpg'
import windows3 from './windowManufactoringImg/windows3.jpg'


const windowsImg = [
    {title: 'ОКНА ПРЕМИУМ КЛАССА', img: windows1},
    {title: 'ИСТОРИЧЕСКИЕ ОКНА', img: windows2},
    {title: 'ДЕРЕВЯННЫЕ И ДЕРЕВО-АЛЮМИНИЕВЫЕ ЕВРООКНА', img: windows3}

]



const WindowManufactoring = () => {
    return (
        <section>
            <Header/>
            <div className={style.container}>
                <h1 className={style.h1}>Изготовлениие окон</h1>
                <div className={style.cardBox}>
                    {windowsImg.map((proj: any, index:number) => (
                        <div className={style.itemBox}>
                            <div key={index} className={style.imageContainer}><img className={style.img} src={proj.img}/></div>
                            <h3>{proj.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WindowManufactoring;