'use client';

import React from 'react';
import style from './Menu.module.css';
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Menu({ onClose }: { onClose: () => void }) {
    const { language, setLanguage } = useLanguage();

    const handleClick = () => {
        document.body.style.overflow = '';
        onClose();
    };

    const menuTexts = {
        ru: {
            home: "Главная",
            about: "О салоне",
            masters: "Мастера",
            services: "Услуги",
            gallery: "Галерея",
            reviews: "Отзывы",
            contacts: "Контакты",
            langLabel: "Выбор языка",
            socialLabel: "Социальные сети",
            videoLabel: "Видео о салоне",
            videoTitle: "Видео о салоне"
        },
        ro: {
            home: "Principală",
            about: "Despre salon",
            masters: "Meșteri",
            services: "Servicii",
            gallery: "Galerie",
            reviews: "Recenzii",
            contacts: "Contacte",
            langLabel: "Selectare limbă",
            socialLabel: "Rețele sociale",
            videoLabel: "Video despre salon",
            videoTitle: "Video despre salon"
        }
    };

    const text = menuTexts[language];

    return (

        <div className={style.menu}>
          <div className={style.scrollWrapper}>
          <nav aria-label={language === 'ru' ? "Основная навигация" : "Navigare principală"} className={style.nav}>
            <ul className={style.navList}>
              <li><Link href="/" onClick={handleClick}>{text.home}</Link></li>
              <li><Link href="#about" onClick={handleClick}>{text.about}</Link></li>
              <li><Link href="#masters" onClick={handleClick}>{text.masters}</Link></li>
              <li><Link href="#services" onClick={handleClick}>{text.services}</Link></li>
            </ul>
            <ul className={style.navList}>
              <li><Link href="#gallery" onClick={handleClick}>{text.gallery}</Link></li>
              <li><Link href="#reviews" onClick={handleClick}>{text.reviews}</Link></li>
              <li><Link href="#footer" onClick={handleClick}>{text.contacts}</Link></li>
            </ul>
          </nav>
          <div className={style.separator} role="separator" aria-hidden="true"></div>
          <div className={style.extras}>
            <div className={style.holder}>
                <div className={style.langSwitch} aria-label="Выбор языка">
                    <span
                        lang="ro"
                        className={`${style.button} ${language === 'ro' ? style.active : ''}`}
                        onClick={() => setLanguage('ro')}>Ro</span> · <span
                        lang="ru"
                        aria-current="true"
                        onClick={() => setLanguage('ru')}
                        className={`${style.button} ${language === 'ru' ? style.active : ''}`}
                    >
                        Ru
                    </span>
                </div>
                <div className={style.social} aria-label="Социальные сети">
                    <Link href="#" onClick={handleClick}>Instagram</Link>
                    <Link href="#" onClick={handleClick}>Facebook</Link>
                    <Link href="#" onClick={handleClick}>TikTok</Link>
                </div>
            </div>
            <div className={style.video} aria-label="Видео о салоне">
              <iframe
                width="405"
                height="262"
                src="https://www.youtube.com/embed/AwoZ2DIDgqQ"
                title="Видео о салоне"
                allowFullScreen
              />
            </div>
          </div>
          </div>
        </div>
    )
}