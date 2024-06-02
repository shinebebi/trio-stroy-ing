import React, { useState, useEffect } from 'react';
import './imageWithText.css'
import back_img from './back.jpg'

const ImageWithText = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            // @ts-ignore
            const elementTop = document.getElementById('image-with-text').offsetTop;
            const windowHeight = window.innerHeight;

            if (scrollTop + windowHeight >= elementTop) {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="image-with-text" id="image-with-text">
            <img src={back_img} alt="Image" className="image" />
            <div className={`text ${isVisible ? 'visible' : ''}`}>
                <h2>БЕЗУПРЕЧНОЕ КАЧЕСТВО</h2>
                <p className="text-box">
                    Мастера компании соблюдают отраслевые нормы и специальные требования,
                    указанные в проектной документации. Дизайнеры осуществляют авторский
                    технический надзор за выполнением работ на всех этапах строительных
                    операций. Контроль проводят в режиме онлайн. Сотрудники внимательно следят
                    за новыми тенденциями в отрасли, систематически повышают квалификацию для
                    воплощения эксклюзивных проектов. Опыт американских и европейских
                    коллег быстро перенимают и внедряют в соответствии со специфическими
                    климатическими условиями и региональными особенностями эксплуатации.
                    Уникальные элементы декора, которые созданы мастерами компании, украшают
                    Большой театр, дом Пашкова и храм Василия Блаженного. В список
                    постоянных заказчиков компании входит Государственная дума, Московская
                    Патриархия, Российское историческое общество, Петровский путевой
                    дворец.
                </p>
            </div>
        </div>
    );
};

export default ImageWithText;
