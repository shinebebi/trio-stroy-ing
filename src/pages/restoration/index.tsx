import React from 'react';
import style from './index.module.css';
import Header from '../../components/header/Header';
import Slider, {imagesRestore} from '../../components/slider/Slider'
import Footer from '../../components/footer/Footer'
import Contact from '../../components/contact/Contact'
import Form from '../../components/form/Form'
// @ts-ignore
import Description from './components/description/Description'

const Restoration = () => {
    return (
        <section className={style.section}>
            <Header/>
            <Slider images={imagesRestore}/>
            <Description/>

        </section>
    );
};

export default Restoration;