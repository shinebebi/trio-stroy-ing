import React, { useEffect, useState}  from 'react';
import style from './facts.module.css';
interface Fact {
    number: string;
    text: string;
}

interface Props {
    title: string;
    facts: Fact[];
}
export const factsData: Fact[] = [
    { number: "30+", text: 'объектов возведено' },
    { number: "c 2013", text: 'на рынке' },
    { number: "350+", text: 'квалифицированных\nсотрудников' },
];
const Facts: React.FC<Props> = ({ title, facts }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);

    const handleScroll = () => {
        setIsVisible(true);
    };
    const handleScroll2 = () => {
        setIsVisible2(true);
    };
    return (
            <div className={style.factsContainer} id="about">
                <h2 className={style.title}>{title}</h2>
                <p className={`${style.fadeIn2} ${isVisible2 && style.show} ${style.info}`} onScroll={handleScroll2}>
                    "Трио Строй Инжиниринг" - надежный партнер в сфере строительства и инжиниринга. Наш опыт, ответственность и компетентность являются основой для успешного завершения каждого проекта. Мы специализируемся на <b>комплексных работах по управлению строительством</b> и предлагаем широкий спектр строительно-монтажных услуг в промышленном и гражданском строительстве.<br></br>
                    <br></br>
                    Благодаря собственным профессиональным бригадам и строгому контролю качества, мы гарантируем высокое качество выполнения строительных проектов. Наша компания осуществляет функции <b>заказчика, подрядчика и технического надзора</b>, обеспечивая полный цикл строительства от проектирования до сдачи объекта в эксплуатацию.<br></br>
                    <br></br>
                    Мы стремимся к постоянному совершенствованию, следуя инновационным подходам и современным технологиям в строительстве. С нами ваш проект будет реализован в срок и в соответствии с высокими стандартами качества. Доверьте свои строительные задачи профессионалам с опытом и страстью к своему делу - компании "Трио Строй Инжиниринг".
                </p>
            </div>

    );
}

export default Facts;