import React from 'react';
import styles from './clients.module.css';
import mipstroy from './mipstroy.png';
import mosing from './mosing.png';
import mosstroy from './mosstroy.png';
import mostotrest from './mostotrest.png';
import mostotryad81 from './mostotryad81.png';
import oknadom from './oknadom.png';

const Clients = () => {
    const logos=[{ src: mipstroy, alt: 'mipstroy' },
    { src: mosstroy, alt: 'mosstroy' },
    { src: mostotrest, alt: 'mostotrest' },
    { src: mostotryad81, alt: 'mostotryad81' },
    { src: mosing, alt: 'mosing' },
    { src: oknadom, alt: 'oknadom' }]
    return (
        <div className={styles.container}>
            <h2 className={styles.header}>Наши клиенты</h2>
            <div className={styles.logoContainer}>
                {logos.map((logo, index) => (
                    <div className={styles.logo} key={index}>
                        <img src={logo.src} alt={logo.alt} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Clients;