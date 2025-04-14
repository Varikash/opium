'use client';
import React from "react";
import style from './Footer.module.css';

export default function Footer() {
    return (
        <section className={style.footer}>
            <h1 className={style.title}>Ждём вас</h1>
            <div className={style.container}>
                <p className={style.description}>Контакты</p>
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
                                <p className={style.textInfo}>Luni - Vineri:</p>
                                <p className={style.textInfo}>9:00 - 18:00</p>
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
                        <button className={style.button}>RO</button>
                        <button className={style.button}>RU</button>
                    </div>
                    <div className={style.rights}>
                        <span className={style.buttomRights}>© {new Date().getFullYear()} Opium – All rights reserved</span>
                    </div>
                </div>
            </div>
        </section>
    )
}