import React from 'react';
import style from './windowRestore.module.css';
import Header from '../../../../components/header/Header';
import facade_img from '../../facade.jpg'
import check_img from '../check.png'
import window1 from './windowImg/window1.jpeg'
import window2 from './windowImg/window2.jpeg'
import window3 from './windowImg/window3.jpeg'
import window4 from './windowImg/window4.jpeg'
// @ts-ignore

const reasonItems = [
    "основной фактор – экономия денежных средств, ведь в этом случае Вам не придётся платить за установку новых деревянных окон, которые однозначно обойдутся Вам недёшево. Реставрация тоже может обойтись в немалую сумму, но она в любом случае не будет такой же дорогой, как покупка новой оконной конструкции;",
    "благодаря обновлению оконной конструкции с помощью реставрации Вы сможете увеличить срок эксплуатации старых деревянных окон на 10-20 лет;",
    "после реставрации Ваши окна приобретут респектабельный внешний вид и будут хорошо вписываться в интерьер всего помещения."
]

const whatItems = [
    "Сломанная фурнитура",
    "Плохие возможности окна для проникновения воздуха и света",
    "Слабая звукоизоляция",
    "Плохая сохраняемость тепла",
    "Приобретенные со временем дефекты (трещины, сколы)",
    "Провисание элементов (фрамуг или форточки)",
    "Устаревание покрытия (лака или краски)",
    "Изношенное состояние уплотнителя",
    "Дефекты с отливами или вовсе их отсутствие"
]

const howItems = [
    "Предварительный осмотр, очистку всех составляющих окна, снятие створок с петель.",
    "Очистку от старой краски, лака или шпатлевки",
    "Восстановление геометрии деревянных конструкций",
    "Замену изношенной фурнитуры",
    "Обработку противогрибковыми веществами",
    "Утепление при необходимости",
    "Шпатлевку возможных щелей, устранение неровностей",
    "Нанесение нового слоя краски или лака в несколько слоев",
    "Дополнительную герметизацию при необходимости",
    "Сбор, монтаж и установку обновленного деревянного окна"

]

const whyItems = [
    "Высокое качество материалов и исполнения – прямые поставки от немецких производителей и мастера с 30-летним опытом работы, позволяет оказывать высококачественные услуги",
    "Соблюдение утвержденных сроков предоставления готового изделия заказчику – практикуется взаимозаменяемость и командная работа для ускорения всех процессов",
    "Использование в процессе реставрации самых современных технологий, оборудования и материалов, специальных приемов окраски и полировки",
    "Официальный договор – в нем указан перечень оказываемых услуг, цена, гарантии и сроки, мы заботимся о спокойствии клиентов",
    "На наши работы и изделия действует пожизненная гарантия"
]

const WindowRestore = () => {
    return (
        <section className={style.section}>
            <Header/>
            <div className={style.container3}>
                <div className={style.textBox}>
                    <div className={style.title}>
                        <h1 className={style.h1}>РЕСТАВРАЦИЯ И РЕМОНТ ДЕРЕВЯННЫХ ОКОН</h1>
                    </div>
                    <div className={style.text}>
                        <p>Реставрация деревянных окон —  решение, которое позволит сэкономить существенную сумму денег. Можно сделать своевременную качественную реставрацию и забыть об этом на многие годы.  В нашей компании работают сотрудники с непревзойденным опытом и профессиональзом более 30 лет. Обратившись к нам Вы гарантированно получите безупречно
                        </p>
                    </div>
                </div>
            </div>
            <div className={style.container}>
                <div className={style.imageContainer}>
                    <img src={window1} className={style.img}/>
                </div>
                <div className={style.textBox2}>
                    <div className={style.title2}>
                        <h2 className={style.h2}>Зачем реставрировать окна, если можно купить новые?</h2>
                    </div>
                    <p className={style.p}>
                        Если Ваши деревянные окна начали сдавать, и Вы заметили, что их эксплуатационные характеристики значительно ухудшились – воспользуйтесь услугой реставрации! Это более выгодно, чем ставить новые, и вот почему:
                    </p>
                    <ul className={style.ul}>
                        {reasonItems.map((item, index) => (
                            <li key={index} className={style.li}>
                                <img src={check_img} className={style.icon} />
                                <span className={style.liItem}>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={style.container}>
                <div className={style.textBox2}>
                    <div className={style.title2}>
                        <h2 className={style.h2}>Что приводит к необходимости реставрации деревянных окон?</h2>
                    </div>
                    <ul className={style.ul}>
                        {whatItems.map((item, index) => (
                            <li key={index} className={style.li}>
                                <img src={check_img} className={style.icon} />
                                <span className={style.liItem}>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={style.imageContainer}>
                    <img src={window2} className={style.img}/>
                </div>
            </div>
            <div className={style.container2}>
                <div className={style.imageContainer}>
                    <img src={window3} className={style.img}/>
                </div>
                <div className={style.textBox2}>
                    <div className={style.title2}>
                        <h2 className={style.h2}>Сколько длится реставрация и какие этапы включает в себя?</h2>
                    </div>
                    <p className={style.p}>
                        Восстановление деревянных окон и балконных конструкций зависит от степени изношенности и используемых материалов и, конечно, количества окон. Мелкую реставрацию можно произвести за несколько дней, более сложные работы могут продлиться до 5-10 дней: пока высохнут материалы и вещества и окно пройдет «тестирование».
                    </p>
                    <p className={style.p}>
                        Самая простая реставрация деревянных окон может носить профилактический характер и включать:
                    </p>
                    <ul className={style.ul}>
                        {howItems.map((item, index) => (
                            <li key={index} className={style.li}>
                                <img src={check_img} className={style.icon} />
                                <span className={style.liItem}>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={style.container}>
                <div className={style.textBox2}>
                    <div className={style.title2}>
                        <h2 className={style.h2}>Почему заказать реставрацию окон из массива лучше у нас?</h2>
                    </div>
                    <p className={style.p}>
                        Мастера ТриоСтройИнжиниринг – настоящие профессионалы своего дела, которым под силу преобразить любой внешний вид Ваших дверей, вернуть ем былую красоту и свойства, за которые Вы их цените. Каждая мелочь имеет значение, поэтому мы профессионально и ответственно относимся к любому заказу, при этом соблюдаем технологические стандарты и максимально быстро выполняем все заявки.
                    </p>
                    <ul className={style.ul}>
                        {whyItems.map((item, index) => (
                            <li key={index} className={style.li}>
                                <img src={check_img} className={style.icon} />
                                <span className={style.liItem}>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={style.imageContainer}>
                    <img src={window4} className={style.img}/>
                </div>
            </div>
        </section>
    );
};

export default WindowRestore;