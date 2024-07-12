import React, {useState} from 'react';
import style from './header.module.css';
import logo from './logo.png'
import phone_icon from './phone_icon.jpg'
import menu_icon from './menu.svg'
import cross from '../contact/cross_icon.png'
import {  Link } from "react-router-dom";

const scrollToElement = () => {
    const element = document.getElementById('myElement');
    // @ts-ignore
    element.scrollIntoView({ behavior: "smooth" }); // Для плавной прокрутки
}


function Header () {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const [showDropdown, setShowDropdown] = useState(false);
    const [showDropdownDoor, setShowDropdownDoor] = useState(false);
    const [showDropdownWindow, setShowDropdownWindow] = useState(false);

    const handleMouseDoor = () => {
        showDropdownDoor ? setShowDropdownDoor(false) : setShowDropdownDoor(true);
    };
    const handleMouseWindow = () => {
        showDropdownWindow ? setShowDropdownWindow(false) : setShowDropdownWindow(true);
    };


    const handleMouseEnter = () => {
        setShowDropdown(true);
    };

    const handleMouseLeave = () => {
        setShowDropdown(false);
    };
    return (
        <header className={style.header}>
            {menuOpen && (
                <section className={style.menuSection}>
                    <div className={style.menuHeader}>
                        <img  className={style.logo} src={logo} alt="Логотип" />
                        <button className={style.closeBtn} onClick={() => {setMenuOpen(false);}}>
                            <img src={cross}/>
                        </button>
                    </div>
                    <ul className={style.menuList}>
                        <li><a href="#about" className={style.link}>О компании</a></li>
                        <li><a href="#services" className={style.link}>Услуги</a></li>
                        <li><a href="#projects" className={style.link}>Проекты</a></li>
                        <li><a href="#contact" className={style.link}>Контакты</a></li>
                    </ul>
                    <button onClick={scrollToElement}>Подать заявку</button>
                </section>
            )}
            <button className={style.menuBtn} onClick={toggleMenu}>
                <img className={style.menuIcon} src={menu_icon} alt="menue icon"/>
            </button>
            <div className={style.logoContainer}>
                <img  className={style.logo} src={logo} alt="Логотип" />
            </div>



            <nav className={style.menu}>
                <ul className={style.ulUl}>
                    <li><Link to="/" className={style.link}> о компании</Link></li>
                    <li><Link to="/services" className={style.link}>услуги</Link></li>
                    <li><Link to="/projects" className={style.link}>проекты</Link></li>
                    <li><a href="#contact" className={style.link}>контакты</a></li>
                    <li className={style.menuItem} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <div className="menu-text">строительство</div>
                        {showDropdown && (
                            <div className={style.dropdown}>
                                <Link className={style.link} to="/restore">реставрация</Link>
                                <Link className={style.link} to="/ing-systems">инжинерные системы</Link>
                            </div>
                        )}
                    </li>
                    <li className={style.menuItem} onMouseEnter={handleMouseDoor} onMouseLeave={handleMouseDoor}>
                    <div className="menu-text">двери</div>
                    {showDropdownDoor && (
                        <div className={style.dropdown}>
                            <Link className={style.link} to="/restore/doorrestore">реставрация дверей</Link>
                            <Link className={style.link} to="/doormanufactoring">изготовление дверей</Link>
                        </div>
                    )}
                    </li>
                    <li className={style.menuItem} onMouseEnter={handleMouseWindow} onMouseLeave={handleMouseWindow}>
                        <div className="menu-text">окна</div>
                        {showDropdownWindow && (
                            <div className={style.dropdown}>
                                <Link className={style.link} to="/restore/windowrestore">реставрация окон</Link>
                                <Link className={style.link} to="/windowmanufactoring">изготовление окон</Link>
                            </div>
                        )}
                    </li>
                    <li><Link to="/production" className={style.link}>производство</Link></li>
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
