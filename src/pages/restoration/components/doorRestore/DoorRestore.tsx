import React from 'react';
import style from './doorRestore.module.css';
import Header from '../../../../components/header/Header';
import facade_img from '../../facade.jpg'
import check_img from '../check.png'
import door1 from './doorImg/door1.jpeg'
import door2 from './doorImg/door2.jpeg'
import door3 from './doorImg/door3.jpeg'
import door4 from './doorImg/door4.jpeg'
import door5 from './doorImg/door5.jpeg'
// @ts-ignore

const itemsWhy = [
    {
        text: "устранение перекосов и ошибок при монтаже дверной коробки",
    },
    {
        text: "устранение всех царапин, загрязнений, пятен, отверстий, сколов, трещин, рассыхания, прожогов, снятие старого лакокрасочного покрытия, возвращение дереву натуральной структуры, шлифовка",
    },
    {
        text: "замена фрагментов дверей, дверных петель, шпингалетов, замков",
    },
    {
        text: "нанесение лакокрасочного покрытия, художественная покраска",
    },
    {
        text: "создание спецэффектов состаривания",
    },
    {
        text: "обновление поврежденных витражей",
    },
    {
        text: "изготовление отдельных деталей",
    },
];

const itemsHow = [
    {
        text: "на поверхности заметны сколы, трещины, царапины, нарушена целостность покрытия",
    },
    {
        text: "на фоне отделки выделяются неэстетичные пятна, область филенок имеет трещины",
    },
    {
        text: "поверхность потемнела, потерян внешний вид из-за испорченной обшивки",
    },
    {
        text: "если повреждены стеклянные и зеркальные вставки, другие декоративные элементы",
    },
    {
        text: "сделать свою дверь поистине уникальной и эксклюзивной",
    },
];

const reasons = [
    'Высокое качество материалов и исполнения. Прямые поставки от немецких производителей и мастера с 30-летним опытом работы, позволяет оказывать высококачественные услуги',
    'Соблюдение утвержденных сроков предоставления готового изделия заказчику. Практикуется взаимозаменяемость и командная работа для ускорения всех процессов',
    'Использование в процессе реставрации самых современных технологий, оборудования и материалов, специальных приемов окраски и полировки',
    'Официальный договор. В нем указан перечень оказываемых услуг, цена, гарантии и сроки, мы заботимся о спокойствии клиентов',
    'На наши работы и изделия действует пожизненная гарантия',
];

const pricePoints = [
    'Изначальное состояние двери, необходимый объем работ, количество и цена материалов, которые необходимо потратить на восстановление или улучшение внешнего вида дверного полотна и косяков',
    'Указываемые клиентом сроки так же отражаются в цене',
    'Цена рассчитывается в индивидуальном порядке. Нужно, оставить заявку на выезд мастера, очень Важно, чтобы мастер лично осмотрел дверь и дал окончательное заключение'
]



const DoorRestore = () => {
    return (
        <section className={style.section}>
            <Header/>
            <div className={style.container}>
                <div className={style.textBox}>
                    <div className={style.title}>
                        <h1 className={style.h1}>РЕСТАВРАЦИЯ</h1>
                        <h1 className={style.h1}>ДВЕРЕЙ ИЗ</h1>
                        <h1 className={style.h1}>МАССИВА</h1>
                    </div>
                    <div className={style.text}>
                        <p>Ремонт двери — это особый процесс, который должен выполняться
                            исключительно опытными специалистами. Чтобы качественно
                            выполнить восстановление двери, мастеру необходимо обладать
                            большой теоретической базой, навыками и опытом. Профессионалы
                            ТриоСтройИнжиниринг обладают соответсвующий высокой квалификацией по
                            сохранению и восстановлению деревянных изделий. В практике
                            применяются материалы и оборудование, сертифицированные
                            специально для этих целей. Знание основ и тонкостей мебельного
                            производства, непревзойденный тридцатилетний опыт специалистов
                            нашей компании, чувство дерева на интуитивном уровне, позволяет
                            нам реставрировать произведения мебельного искусства.
                        </p>
                    </div>
                </div>
                <div className={style.imageContainer}>
                    <img className={style.img} src={door5}/>
                </div>
            </div>

            <div className={style.container2}>
                <div className={style.imageContainer3}>
                    <img className={style.img} src={door2}/>
                </div>
                <div className={style.textBox2}>
                    <div className={style.title2}>
                        <h2 className={style.h2}>ЗАЧЕМ РЕСТАВРИРОВАТЬ ДВЕРЬ, ЕСЛИ МОЖНО КУПИТЬ НОВУЮ?</h2>
                    </div>
                    <p className={style.text}>
                        Реставрация дверей — процесс менее затратный, чем покупка новой двери, и поможет дольше сохранить изделия в исходном состоянии. Не спешите избавляться от неё; а доверьтесь настоящим профессионалам с опытом работы более 30 лет. Мы сделаем Ваши двери поистине уникальными и эксклюзивными, придадим им по-настоящему величественный вид и улучшим их функциональные качества.
                    </p>
                </div>
            </div>

            <div className={style.container}>
                <div className={style.textBox2}>
                    <div className={style.title2}>
                        <h2 className={style.h2}>ПРИЗНАКИ ТОГО, ЧТО ДВЕРИ ИЗ МАССИВА НУЖДАЮТСЯ В РЕСТАВРАЦИИ</h2>
                    </div>
                    <ul className={style.ul}>
                        {itemsHow.map((item, index) => (
                            <li key={index} className={style.li}>
                                <img src={check_img} className={style.icon} />
                                <span className={style.liItem}>{item.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={style.imageContainer}>
                    <img src={door3} className={style.img}/>
                </div>
            </div>
            <div className={style.container}>
                <div className={style.imageContainer}>
                    <img src={door4}  className={style.img}/>
                </div>
                <div className={style.textBox2}>
                    <div className={style.title2}>
                        <h2 className={style.h2}>Какие этапы включает в себя реставрация?</h2>
                    </div>
                    <p className={style.p}>
                        Процесс реставрации дверей достаточно трудоемкий, и для его выполнения требуются особые знания и умения. Наша команда не знает сложностей в работе. Специалистам Окна Дом под силу любые задачи. Основные этапы реставрации старинной деревянной мебели включают в себя осмотр, разборку и очистку от лака и бытовой грязи, восстановление поврежденных элементов, удаление трещин и сколов, полировку и сборку, а так же:
                    </p>
                    <ul className={style.ul}>
                        {itemsWhy.map((item, index) => (
                            <li key={index} className={style.li}>
                                <img src={check_img} className={style.icon} />
                                <span className={style.liItem}>{item.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={style.container}>
                <div className={style.textBox2}>
                    <div className={style.title2}>
                        <h2 className={style.h2}>Почему заказать реставрацию дверей из массива лучше у нас?</h2>
                    </div>
                    <p className={style.p}>
                        Мастера ТриоСтройИнжиниринг – настоящие профессионалы своего дела, которым под силу преобразить любой внешний вид Ваших дверей, вернуть ем былую красоту и свойства, за которые Вы их цените. Каждая мелочь имеет значение, поэтому мы профессионально и ответственно относимся к любому заказу, при этом соблюдаем технологические стандарты и максимально быстро выполняем все заявки.
                    </p>
                    <ul className={style.ul}>
                        {reasons.map((item, index) => (
                            <li key={index} className={style.li}>
                                <img src={check_img} className={style.icon} />
                                <span className={style.liItem}>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={style.imageContainer}>
                    <img src={door1} className={style.img}/>
                </div>
            </div>
            <div className={style.container2}>
                <div className={style.textBox3}>
                    <div className={style.title2}>
                        <h2 className={style.h2}>Стоимость реставрационных работ</h2>
                    </div>
                    <p className={style.p}>
                        Стоимость реставрационных работ измеряется не одним параметром, а несколькими:
                    </p>
                    <ul className={style.ul}>
                        {pricePoints.map((item, index) => (
                            <li key={index} className={style.li}>
                                <img src={check_img} className={style.icon} />
                                <span className={style.liItem}>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default DoorRestore;