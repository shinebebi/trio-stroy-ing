import React, { useState, useEffect } from 'react';
// @ts-ignore
import Header from '../../components/header/Header'
import head from './productionImg/head.jpg'
import style from './production.module.css'
import prod2 from './productionImg/production-1.jpg'
import prod1 from './productionImg/production-2.jpg'
import prod3 from './productionImg/production-3.jpg'
import prod4 from './productionImg/production-4.jpg'
import prod5 from './productionImg/production-5.jpg'
import prod6 from './productionImg/production-6.jpg'
import material1 from './productionImg/material-1.jpg'
import material2 from './productionImg/material-2.jpg'
import material3 from './productionImg/material-3.jpg'
import material4 from './productionImg/material-4.jpg'
import material5 from './productionImg/material-5.jpg'
import material6 from './productionImg/material-6.jpg'
import branding1 from './productionImg/branding-1.jpg'
import branding2 from './productionImg/branding-2.jpg'
import branding3 from './productionImg/branding-3.jpg'
import branding4 from './productionImg/branding-4.jpg'



const materialData = [
    {
        img: material1,
        header: 'Тик',
        text: "Тиковое дерево считается элитным строительным материалом и не пользовалось бы устойчивым спросом, если бы все его преимущества сводились бы только к благородной текстуре и цветовой гамме.",
    },
    {
        img: material2,
        header: 'Орех',
        text: "Благодаря своей гибкой структуре ореховое дерево можно обрабатывать как на станках, так и вручную, без ущерба для материала.",
    },
    {
        img: material3,
        header: 'Меранти',
        text: "Древесина меранти легкая, проявляет стабильность к кручению и влажным условиям, обладает высокими теплоизоляционными свойствами.",
    },
    {
        img: material4,
        header: 'Сосна',
        text: "Сосна – самый универсальный материал для изготовления окон. Для нашего производства мы используем высококачественную Сибирскую сосну.",
    },
    {
        img: material5,
        header: 'Лиственница',
        text: "Иркутская лиственница широко распространена \n" +
            "в производстве евроокон со стеклопакетами.",
    },
    {
        img: material6,
        header: 'Дуб',
        text: "Мы работаем с различными породами древесины, но наибольшей популярностью пользуется изготовление изделий из дуба.",
    },
];


const Production = () => {
    return (
        <section className={style.section}>
            <Header/>
            <div className={style.container}>
                <div className={style.main}>
                    <img  src={head} className={style.img} alt="prod" />
                    <div className={style.textBox4}>
                        <div className={style.title}>
                            <h1 className={style.h1}>НАШЕ ПРОИЗВОДСТВО</h1>
                        </div>
                    </div>
                </div>
                <div className={style.infoContainer}>
                    <div className={style.p1}><p>Работа с деревом требует высокого мастерства. Не все этапы производства деревянных изделий можно автоматизировать. Особенно, когда речь идет об эксклюзивных проектах. Большую часть технологических операций наши столяры выполняют вручную, придерживаясь традиционных, выверенных веками принципов ручной обработки древесины. В процессе изготовления оконных и дверных блоков наши специалисты точно следуют проектному решению учитывая плотность, структуру и тип распила дерева. Они тщательно вырезают и обрабатывают каждую деталь конструкции.</p></div>
                    <div className={style.prod1}><img src={prod1} className={style.img}/></div>
                    <div className={style.prod2}><img src={prod2} className={style.img}/></div>
                    <div className={style.prod3}><img src={prod3} className={style.img}/></div>
                    <div className={style.prod4}><img src={prod4} className={style.img}/></div>
                    <div className={style.prod5}><img src={prod5} className={style.img}/></div>
                    <div className={style.p2}><p>Один из ключевых этапов производства деревянных конструкций – проектирование. На начальной стадии мы согласовываем с заказчиком дизайн окон и дверей, а также предпочтительный вид древесины, из которого они будут изготовлены. Затем к работе подключаются наши инженеры – они разрабатывают конструктивные элементы изделий, рассчитывают нагрузки и сверяют их с прочностными параметрами дерева. Заключительная и основная стадия – реализация проектных решений на производстве.</p></div>
                    <div className={style.p3}><p>Для изготовления нестандартных элементов окон и дверей мы приобретаем уникальную оснастку для станков. Выполняем прецизионную резку и сборку деталей конструкции, осуществляем филигранную финишную отделку деревянных поверхностей. Защитно-декоративные покрытия наносим в вакуумных камерах. Комплектуем оконные и дверные блоки фурнитурой премиального класса. Каким бы сложным ни был проект, наши клиенты всегда получают окна, двери и мебель наивысшего качества.</p></div>
                    <div className={style.prod6}><img src={prod6} className={style.img}/></div>
                </div>
                <div className={style.materialContainer}>
                    <h2 className={style.h2}>Материалы</h2>
                    <p className={style.materialText}>Работа с ценными породами древесины требует высокого мастерства. Большую часть технологических операций наши столяры выполняют вручную, придерживаясь традиционных, выверенных веками принципов ручной обработки дерева.</p>
                    <div className={style.materialBox}>
                        {materialData.map((item, index) => (
                            <div key={index} className={style.materialItem}>
                                <div className={style.materialImg}><img src={item.img} className={style.img} /></div>
                                <h3 className={style.materialTitle}>{item.header}</h3>
                                <p style={{padding: '10px'}}>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={style.materialContainer} style={{backgroundColor: '#f2f2f2', width: '100%', overflow: 'hidden', marginBottom: '0'}}>
                    <h2 className={style.h2}>Брендинг деревянных изделий</h2>
                    <p className={style.materialText}>При изготовлении стлярных изделий для бутиков, ресторанов, салонов, мы оказываем услугу брендирования.</p>
                    <div className={style.brandContainer}>
                        <div className={style.brand1}><img src={branding1} className={style.img}/></div>
                        <div className={style.brand2}><img src={branding2} className={style.img}/></div>
                        <div className={style.brand3}><img src={branding3} className={style.img}/></div>
                        <div className={style.brand4}><img src={branding4} className={style.img}/></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Production;