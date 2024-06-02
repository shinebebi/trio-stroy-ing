import React, { useState, useEffect } from 'react';
// @ts-ignore
import Service, {imagesService} from '../../components/service/Service'
import Header from '../../components/header/Header'
import style from './services.module.css'

export type ImageType = {
    src: string;
    text: string;
    link: string
};




const Services = () => {
    return (
        <section>
            <Header/>
            <div className={style.container}>
                <h1 className={style.h1}>Услуги</h1>
                <p className={style.p}>Мы придаем первостепенное значение высокому качеству выполняемых работ и строго следуем установленным срокам. Наша команда детально изучает все требования и пожелания клиентов, предоставляя персонализированные решения, которые в полной мере соответствуют их ожиданиям.</p>
                <div className={style.cardBox}>
                    {imagesService.map((image: any, index:number) => (
                            <Service imageInfo={image} key={index}/>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;