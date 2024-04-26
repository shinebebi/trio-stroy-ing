import React, { useState } from 'react';
import style from './contact.module.css';
import cross from './cross_icon.png'
import { useMask } from '@react-input/mask';

const Contact = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({ Name: '', Phone: '', Message: '' });
    const inputRef = useMask({ mask: "8 (___) ___-__-__", replacement: { _: /\d/ } });

    // @ts-ignore
    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // @ts-ignore
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const formEl = document.getElementById('mesForm')
        // @ts-ignore
        const formData = new FormData(formEl)

        fetch('https://script.google.com/macros/s/AKfycbzeoEN7-b4iYhQoCYRghXCzyzACXbthL56dnKOW-HtmcELBjKh3LXkqgY4WBBu91P9C/exec', {
            method: 'POST',
            body: formData,
        })
            .then(response => {
                setFormData({ Name: '', Phone: '', Message: '' })
            })
            .catch(error => console.error('Произошла ошибка при отправке данных в Google Таблицу', error));
    };


    return (
        <div className={style.contactContainer} id="contact">
            <div className={style.contactHeader}>Контакты</div>
            <div className={style.contactInfoTable}>
                <div className={style.contactInfo}>
                    <div className={style.address}>г. Москва, Большая Серпуховская, дом 14/13, стр. 1, офис 16</div>
                    <div className={style.telEmail}>
                        <div>
                            <p className={style.name}>Телефон</p>
                            <p>+7 (903) 016-55-55</p>
                        </div>
                        <div>
                            <p className={style.name}>Email</p>
                            <p>triostroying@yandex.ru</p>
                        </div>
                    </div>
                    <button className={style.sendMessageBtn} onClick={() => setIsOpen(true)}>Отправить сообщение</button>
                </div>
                <div className={style.map}>
                    <iframe
                        title="Yanex Map"
                        src="https://yandex.ru/map-widget/v1/?ll=37.624309%2C55.727891&mode=whatshere&whatshere%5Bpoint%5D=37.624310%2C55.727891&whatshere%5Bzoom%5D=17&z=17"
                        width="500"
                        height="450"
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
            {isOpen && (
                <div className={style.popup}>
                    <div className={style.popupInner}>
                        <button className={style.closeBtn} onClick={() => {setIsOpen(false);setFormData({ Name: '', Phone: '', Message: '' });}}>
                            <img src={cross}/>
                        </button>
                        <h2 className={style.h2}>Отправить сообщение</h2>
                        <form onSubmit={handleSubmit} className={style.form} id="mesForm">
                            <input type="text" className={style.input} name="Name" placeholder="Имя" value={formData.Name} onChange={handleFormChange} required />
                            <input ref={inputRef} type="tel" name="Phone" className={style.input} placeholder="Телефон" value={formData.Phone} onChange={handleFormChange} required />
                            <textarea name="Message" className={style.textarea} placeholder="Сообщение" value={formData.Message} onChange={handleFormChange} required></textarea>
                            <button type="submit" className={style.button}>Отправить</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Contact;