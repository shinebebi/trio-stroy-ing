import React, { useState, useEffect } from 'react';
// @ts-ignore
import Project, { projInfo } from '../../components/project/Project'
import Header from '../../components/header/Header'
import style from './projects.module.css'






const Projects = () => {
    return (
        <section>
            <Header/>
            <div className={style.container}>
                <h1 className={style.h1}>Проекты</h1>
                <div className={style.cardBox}>
                    {projInfo.map((proj: any, index:number) => (
                        <Project projInfo={proj} key={index}/>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;