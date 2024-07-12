import React, { useState, useEffect } from 'react';
// @ts-ignore
import Header from '../../../components/header/Header'
import style from './doorManufacturing.module.css'
import doo1 from './doorManufacturingImg/doo1.jpg'
import doo2 from './doorManufacturingImg/doo2.jpg'
import doo3 from './doorManufacturingImg/doo3.jpg'
import doo4 from './doorManufacturingImg/doo4.jpg'
import doo5 from './doorManufacturingImg/doo5.jpg'

const dooImg = [ doo1, doo2, doo3, doo4, doo5
]



const DoorManufactoring = () => {
    return (
        <section>
            <Header/>
            <div className={style.container}>
                <h1 className={style.h1}>Изготовлениие дверей</h1>
                <p className={style.p}>Мы изготавливаем деревянные входные группы, наружные и внутренние дверные блоки по индивидуальным сечениям, преимущественно для объектов культурного наследия</p>
                <div className={style.cardBox}>
                    {dooImg.map((proj: any, index:number) => (
                        <div key={index} className={style.itemBox}><img className={style.img} src={proj}/></div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DoorManufactoring;