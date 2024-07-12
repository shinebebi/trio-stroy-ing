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
                    История нашего предприятия начинается с далекого 1992-го года. Предполагалось, что предприятие будет предоставлять услуги по дизайну интерьера. Нам поступало очень много заказов на художественные кованые решётки (в 90’е они были очень популярным и необходимым дополнением фасада дома) и деревянные изделия (окна, двери, мебель). В то время мы ещё ничего не производили самостоятельно, создавали эскизы, искали исполнителей и участвовали в производстве изделий, отслеживая качество.<br></br>
                    <br></br>
                    Так было на протяжении нескольких лет. У нашего предприятия сложилась определённая репутация и по рекомендациям люди снова и снова приходили к нам. С производством решёток в те года проблем не возникало, их умели делать качественно и красиво. Что касается деревянных изделий, мы тратили много времени в поиске достойного производителя.<br></br>
                    <br></br>
                    Первый шаг к решению этой проблемы заключался в том, что мы стали покупать готовые деревянные профили, стеклопакеты, фурнитуру и заканчивали изделие самостоятельно. Это было началом долгой и плодотворной работы.<br></br>
                    <br></br>
                    Все заработанные деньги мы вкладывали в развитие и закупку оборудования. К 2000-му году у нас полностью была сформирована команда, и мы вышли на производство полного цикла. Качество наших изделий было в несколько раз выше, повсеместного, наша репутация росла быстрее, чем мы справлялись с заказами. Окна с божьей коровкой стали узнаваемы.<br></br>
                    <br></br>
                    Мы начали участвовать в тендерах на реставрацию объектов архитектурного наследия и неоднократно побеждали. Наше производство росло. Росли опыт и возможности.<br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <b className={style.endText}>МЫ ГОРДЫ СВОЕЙ ИСТОРИЕЙ, СВОИМ ПРОИЗВОДСТВОМ И СВОИМИ ИЗДЕЛИЯМИ!</b>
                </p>
            </div>

    );
}

export default Facts;