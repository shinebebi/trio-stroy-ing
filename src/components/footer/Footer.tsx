import React from 'react';
import styles from './footer.module.css'
import geo from './geo.png'
import mail from './mail.png'
import tel from './tel.png'
import tg from './tg.png'
import vk from './vk.png'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.menu}>
                <a href="#about">о компании</a>
                <a href="#services">услуги</a>
                <a href="#">проекты</a>
                <a href="#contact">контакты</a>
            </div>
            <div className={styles.socialIconsImg}>
                <img className={styles.socIcon} src={vk} alt="vk"/>
                <img className={styles.socIcon} src={tg} alt="tg"/>
            </div>
            <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                    <img className={styles.tegIcon} src={tel} alt="Phone"/>
                    <p>+7 (903) 016-55-55</p>
                </div>
                <div className={styles.contactItem}>
                    <img className={styles.tegIcon} src={mail} alt="Mail"/>
                    <p>triostroying@yandex.ru</p>
                </div>
                <div className={styles.contactItem}>
                    <img className={styles.tegIcon} src={geo} alt="Address"/>
                    <p>115093 г. Москва, вн.тер.г. муниципальный округ Замоскворечье
                        ул. Большая Серпуховская, д. 14/13, стр. 1, офис 16</p>
                </div>
            </div>

        </div>
    );
}

export default Footer;