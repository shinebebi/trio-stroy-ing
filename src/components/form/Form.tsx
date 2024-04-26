import React, { useState } from 'react';
import style from './form.module.css'; // Подключаем файл стилей
import back from './back.png';
import { useMask } from '@react-input/mask';

const Form: React.FC = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [agree, setAgree] = useState(false);
    const placeholder = '+7 (___) ___-__-__';
    const inputRef = useMask({ mask: "8 (___) ___-__-__", replacement: { _: /\d/ } });


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (agree) {
            const formEl = document.querySelector('form')
            // @ts-ignore
            const formData = new FormData(formEl)
            console.log(phone)

            fetch('https://script.google.com/macros/s/AKfycbzeoEN7-b4iYhQoCYRghXCzyzACXbthL56dnKOW-HtmcELBjKh3LXkqgY4WBBu91P9C/exec', {
                method: 'POST',
                body: formData,
            })
                .then(response => {
                    setName('')
                    setPhone('')
                    setAgree(false)
                })
                .catch(error => console.error('Произошла ошибка при отправке данных в Google Таблицу', error));

        } else {
            alert('Для отправки формы нужно согласиться на обработку персональных данных.');
        }
    };

    return (
        <div className={style.formContainer} style={{ backgroundImage: `url(${back})`}} id="myElement">
            <div>
                <h2 className={style.title}>Отправить заявку</h2>
                <p className={style.text}>Свяжемся с вами в ближайшие 10 минут, чтобы разобраться в деталях ваших задач, подобрать наилучший вариант решения и составить план работ. Мы готовы ответить на все интересующие вас вопросы и предоставить информацию о текущих специальных предложениях. Оставайтесь на связи, будем рады помочь!</p>
            </div>

            <form onSubmit={handleSubmit} className={style.form}>
                <div className={style.formRow}>
                    <input placeholder='Имя' className={style.input} name="Name" type="text"  value={name} onChange={(e) => setName(e.target.value)} required/>
                </div>
                <div className={style.formRow}>
                    <input ref={inputRef} value={phone} placeholder="Телефон" className={style.input} name="Phone"  title="Введите номер телефона в формате +7 (XXX) XXX-XX-XX" onChange={(e) => setPhone(e.target.value)} required/>
                </div>
                <div className={style.formRow}>
                    <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
                    <label>Согласен на обработку персональных данных</label>
                </div>

                <button className={style.button} type="submit">Отправить</button>
            </form>
        </div>
    );
};

export default Form;