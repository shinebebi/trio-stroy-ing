import React from 'react';
import  style from './description.module.css'
import img3 from '../../special3.jpg'
import facade_img from '../../facade.jpg'
import ImageWithText from '../imageWithText/ImageWithText'

const Description = () => {
    return (
        <section className={style.container}>
            <div className={style.restoration}>
                <div className={style.restorationContainer}>
                    <div className={style.restorationText}>
                        <h2>ОСОБЫЕ ПРЕИМУЩЕСТВА</h2>
                        <p>
                            Эффективная реализация комплексного строительства возможна благодаря слаженной работе всех участников процесса.
                        </p>
                        <p>
                            Команды находятся в постоянной координации, что позволяет быстро решать возникающие вопросы. Дизайнеры, инженеры и мастера предоставляют полный спектр услуг, обеспечивая выполнение самых амбициозных проектов. Сотрудники берут на себя все задачи, начиная от подготовки документации и заканчивая вывозом строительного мусора. Менеджеры самостоятельно справляются с любыми проблемами, освобождая заказчика от необходимости вмешиваться. Участвовать ему нужно лишь на финальной стадии, когда оцениваются результаты и объект вводится в эксплуатацию.
                        </p>
                    </div>
                    <div className={style.restorationImage}>
                        <img
                            src={img3}
                            alt="Restoration"
                        />
                    </div>
                </div>
            </div>
            <ImageWithText/>
            <div className={style.restoration}>
                <div className={style.restorationContainer}>
                    <div className={style.restorationImage}>
                        <img
                            src={facade_img}
                            alt="facade"
                        />
                    </div>
                    <div className={style.restorationText}>
                        <h2>ИНДИВИДУАЛЬНЫЙ ПОДХОД</h2>
                        <p>
                            Мастера компании соблюдают отраслевые нормы и специальные требования,
                            указанные в проектной документации. Дизайнеры осуществляют авторский
                            технический надзор за выполнением работ на всех этапах строительных
                            операций. Контроль проводят в режиме онлайн. Сотрудники внимательно следят за
                            новыми тенденциями в отрасли, систематически повышают квалификацию для
                            воплощения эксклюзивных проектов. Опыт американских и европейских коллег
                            быстро перенимают и внедряют в соответствии со специфическими
                            климатическими условиями и региональными особенностями эксплуатации.
                            Уникальные элементы декора, которые созданы мастерами компании, украшают
                            Большой театр, дом Пашкова и храм Василия Блаженного. В список
                            постоянных заказчиков компании входит Государственная дума, Московская
                            Патриархия, Российское историческое общество, Петровский путевой дворец.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Description