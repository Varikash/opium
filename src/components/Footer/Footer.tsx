'use client';

import React from "react";
import style from './Footer.module.css';
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
    // Получаем текущий язык и функцию установки языка из контекста
    const { language, setLanguage } = useLanguage();

    // Текст для различных языков - добавляем перевод для "Ждём вас"
    const footerText = {
        ru: {
            waiting: "Ждём вас",
            contacts: "Контакты",
            weekdays: "Понедельник - Воскресенье:",
            hours: "9:00 - 21:00"
        },
        ro: {
            waiting: "Vă așteptăm",
            contacts: "Contacte",
            weekdays: "Luni - Duminică:",
            hours: "9:00 - 21:00"
        }
    };

    // Выбираем текст на основе текущего языка
    const text = footerText[language];

    return (
        <section className={style.footer} id="footer">
            {/* Добавляем перевод для "Ждём вас" */}
            <h1 className={style.title}>{text.waiting}</h1>
            <div className={style.container}>
                <p className={style.description}>{text.contacts}</p>
                <div className={style.contacts}>
                    <div className={style.contact}>
                        <div className={style.email}>
                            <span className={style.redTitle}>Email</span>
                            <p className={style.textInfo}>opiumsupport@gmail.com</p>
                        </div>
                        <div className={style.phone}>
                            <span className={style.redTitle}>Phone</span>
                            <p className={style.textInfo}>+373123456</p>
                        </div>
                        <div className={style.social}>
                            <span className={style.redTitle}>Social</span>
                            <ul className={style.list}>
                                <li className={`${style.textInfo} ${style.listItem}`}><a href="">Instagram</a></li>
                                <li className={`${style.textInfo} ${style.listItem}`}><a href="">Facebook</a></li>
                                <li className={`${style.textInfo} ${style.listItem}`}><a href="">TikTok</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.office}>
                        <span className={style.redTitle}>Office</span>
                        <div className={style.officeText}>
                            <p className={style.textInfo}>16, Renașterii Naționale Boulevard, MD-2024, Chișinău</p>
                            <div>
                                <p className={style.textInfo}>{text.weekdays}</p>
                                <p className={style.textInfo}>{text.hours}</p>
                            </div>
                            <p className={style.textInfo}>
                                47.0385° E,<br/>
                                28.8538° N
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.bottomContainer}>
                <div className={style.bottomLine}></div>
                <div className={style.bottomContent}>
                    <div className={style.language}>
                        <button
                            className={`${style.button} ${language === 'ro' ? style.active : ''}`}
                            onClick={() => setLanguage('ro')}
                        >
                            RO
                        </button>
                        <button
                            className={`${style.button} ${language === 'ru' ? style.active : ''}`}
                            onClick={() => setLanguage('ru')}
                        >
                            RU
                        </button>
                    </div>
                    <div className={style.rights}>
                        <span className={style.bottomRights}>© {new Date().getFullYear()} Opium – All rights reserved</span>
                    </div>
                </div>
            </div>
        </section>
    );
}