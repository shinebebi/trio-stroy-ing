import React from 'react';
import style from './furnitureRestore.module.css';
import Header from '../../../../components/header/Header';
import check_img from '../check.png'
import furniture1 from './furnitureImg/furniture1.jpg'
import furniture2 from './furnitureImg/furniture2.jpeg'
import furniture3 from './furnitureImg/furniture3.jpeg'
import furniture4 from './furnitureImg/furniture4.jpeg'
import furniture5 from './furnitureImg/furniture5.jpeg'
// @ts-ignore

const reasonItems = [
    'возможность использовать качественные безопасные для здоровья материалы (краски, лаки, клеи,) для преобразования внешнего вида мебели',
    'возможность обновить экстерьер мебели, тем самым внести в интерьер помещения нотки новизны',
    'сделать свою мебель поистине уникальной и эксклюзивной, не продавая старинную мебель за бесценок, а придав ей по-настоящему величественный вид и сделав её подлинным украшением интерьера.'
]

const whatItems = [
    'потертости и множество мелких царапин',
    'потеря бывшего лоска',
    'появление трещин на древесной поверхности, а также глубоких царапин',
    'различные повреждения лакового покрытия',
    'наличие сколов',
    'вздутие, отклейка шпона'
]

const howItems = [
    "замену треснувших и прогнивших деревянных деталей;",
    'выточку фигурных элементов и профильных деталей: балясин, ножек, наличников и цоколей фасадов;',
    'замену фурнитуры: ручек, дверных петель и замков, опор, направляющих выдвижных ящиков;',
    'снятие и нанесение защитно-декоративного покрытия, грунтовку и патинирование древесины;',
    'ремонт клееных шиповых соединений;',
    'реставрацию поврежденного шпона;',
    'замену стеклянных и филенчатых вставок на фасадах;',
    'доработку функциональности изделий по требованию заказчика (установку магнитных фиксаторов, врезку замков на фасадах, переоборудование отсеков хранения).'
]

const whyItems = [
    "Высокое качество материалов и исполнения – прямые поставки от немецких производителей и мастера с 30-летним опытом работы, позволяет оказывать высококачественные услуги",
    "Соблюдение утвержденных сроков предоставления готового изделия заказчику – практикуется взаимозаменяемость и командная работа для ускорения всех процессов",
    "Использование в процессе реставрации самых современных технологий, оборудования и материалов, специальных приемов окраски и полировки",
    "Официальный договор – в нем указан перечень оказываемых услуг, цена, гарантии и сроки, мы заботимся о спокойствии клиентов",
    "На наши работы и изделия действует пожизненная гарантия"
]

const FurnitureRestore = () => {
    return (
        <section className={style.section}>
            <Header/>
            <div className={style.main}>
                <img src={furniture1} className={style.img} alt="Реставрация мебели" />
                <div className={style.textBox4}>
                    <div className={style.title}>
                        <h1 className={style.h1}>РЕСТАВРАЦИЯ МЕБЕЛИ</h1>
                        <h1 className={style.h1}>ИЗ МАССИВА</h1>
                    </div>
                    <div className={style.text}>
                        <p className={style.p2}>
                            Мебель, отслужившая сроком более 50 лет, обретает большую
                            ценность становясь антиквариатом. Профессионалы ТриоСтройИнжиниринг
                            обладают соответсвующий высокой квалификацией по сохранению
                            и восстановлению деревянных изделий. Уход за массивом дерева
                            позволит сохранить геометрию и эстетический вид изделий. Знание
                            основ и тонкостей мебельного производства, непревзойденный
                            тридцатилетний опыт специалистов нашей компании, чувство дерева
                            на интуитивном уровне, позволяет нам реставрировать произведения
                            мебельного искусства.
                        </p>
                    </div>
                </div>
            </div>
            <div className={style.container}>
                <div className={style.imageContainer}>
                    <img src={furniture2} className={style.img}/>
                </div>
                <div className={style.textBox2}>
                    <div className={style.title2}>
                        <h2 className={style.h2}>Зачем реставрировать мебель, если можно купить новую?</h2>
                    </div>
                    <p className={style.p}>
                        Кроме того, что реставрация мебели более доступный экономически способ преобразить интерьер в  помещении, она обладает целым рядом других преимуществ, таких как:
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
                        <h2 className={style.h2}>ПРИЗНАКИ ТОГО, ЧТО МЕБЕЛЬ ИЗ ДЕРЕВА НУЖДАЕТСЯ В РЕСТАВРАЦИИ</h2>
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
                    <img src={furniture3} className={style.img}/>
                </div>
            </div>
            <div className={style.container}>
                <div className={style.imageContainer}>
                    <img src={furniture4} className={style.img}/>
                </div>
                <div className={style.textBox2}>
                    <div className={style.title2}>
                        <h2 className={style.h2}>Какие этапы включает в себя реставрация?</h2>
                    </div>
                    <p className={style.p}>
                        Процесс реставрации предметов мебели достаточно трудоемкий, и для его выполнения требуются особые знания и умения. Наша команда не знает сложностей в работе. Специалистам Окна Дом подсилу любые задачи. Основные этапы реставрации старинной деревянной мебели включают в себя осмотр, разборку и очистку от лака и бытовой грязи, восстановление поврежденных элементов, удаление трещин и сколов, полировку и сборку, а так же:
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
                        <h2 className={style.h2}>Почему заказать реставрацию мебели из массива лучше у нас?</h2>
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
                    <img src={furniture5} className={style.img}/>
                </div>
            </div>
        </section>
    );
};

export default FurnitureRestore;