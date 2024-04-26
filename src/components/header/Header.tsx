import React from 'react';
import style from './header.module.css';
import logo from './logo.jpg'
import phone_icon from './phone_icon.jpg'
const scrollToElement = () => {
    const element = document.getElementById('myElement');
    // @ts-ignore
    element.scrollIntoView({ behavior: "smooth" }); // Для плавной прокрутки
}
function Header () {
    return (

        <header className={style.header}>

            <img  className={style.logo} src={logo} alt="Логотип" />

            <nav className={style.ul}>
                <ul className={style.ul}>
                    <li><a href="#about" className={style.link}> о компании</a></li>
                    <li><a href="#services" className={style.link}>услуги</a></li>
                    <li><a href="#projects" className={style.link}>проекты</a></li>
                    <li><a href="#contact" className={style.link}>контакты</a></li>
                </ul>
            </nav>
            <div className={style.contact}>
                <img src={phone_icon} alt="иконка телефона" />
                <button onClick={scrollToElement}>Подать заявку</button>
            </div>
        </header>
    );
};

export default Header;
