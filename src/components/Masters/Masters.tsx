'use client';

import React, { useState, useEffect } from "react";
import style from './Masters.module.css';
import Image from "next/image";
import { aboutText } from "@/constants/texts";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Импорт стилей Swiper
import "swiper/css";
import "swiper/css/pagination";

export default function Masters() {

    // Флаг, отвечающий за отображение карусели для экранов с шириной <= 1256px
    const [isMobile, setIsMobile] = useState(false);

    // Отслеживаем изменение ширины окна, чтобы переключаться на карусель при нужном размере
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1256);
        };

        handleResize(); // Устанавливаем начальное значение
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    // Собираем данные для мастеров в единый массив для удобства перебора
    const mastersData = [
        {
            image: '/images/Elena.jpeg',
            alt: 'Elena',
            about: aboutText.ru.section.masters.elena.about,
            name: aboutText.ru.section.masters.elena.name,
            specialization: aboutText.ru.section.masters.elena.specialization,
        },
        {
            image: '/images/Anastasia.jpeg',
            alt: 'Anastasia',
            about: aboutText.ru.section.masters.anastasia.about,
            name: aboutText.ru.section.masters.anastasia.name,
            specialization: aboutText.ru.section.masters.anastasia.specialization,
        },
        {
            image: '/images/Antonina.jpeg',
            alt: 'Antonina',
            about: aboutText.ru.section.masters.antonina.about,
            name: aboutText.ru.section.masters.antonina.name,
            specialization: aboutText.ru.section.masters.antonina.specialization,
        },
        {
            image: '/images/Alla.jpeg',
            alt: 'Alla',
            about: aboutText.ru.section.masters.alla.about,
            name: aboutText.ru.section.masters.alla.name,
            specialization: aboutText.ru.section.masters.alla.specialization,
        },
    ];



    return(
        <section
            className={style.main}
        >
            <h2 className={style.header}>{aboutText.ru.section.masters.header}</h2>
            <p className={style.text}>Познакомьтесь с нашей командой <span className={style.decor}>Заботливых</span> экспертов</p>
            {isMobile ? (
                    <Swiper
                        modules={[Pagination]}
                        grabCursor={true}
                        allowTouchMove={true}
                        spaceBetween={1}
                        slidesPerView={'auto'}
                        loop={true}
                        className={style.swiper} // При желании можно добавить собственные стили для Swiper
                    >
                        {mastersData.map((master, index) => (
                            <SwiperSlide key={index} className={style.cardSlide}>
                                <div className={style.listItem}>
                                    <div className={style.card}>
                                        <Image
                                            src={master.image}
                                            width={321}
                                            height={460}
                                            alt={master.alt}
                                            className={style.image}
                                        />
                                        <div className={style.overlay}>
                                            <div className={style.line}></div>
                                            <p className={style.description}>{master.about}</p>
                                        </div>
                                    </div>
                                    <p className={style.cardTitle}>{master.name}</p>
                                    <span className={style.subTitle}>{master.specialization}</span>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
            <ul className={style.list}>
                <li className={style.listItem}>
                    <div className={style.card}>
                        <Image
                            src="/images/Elena.jpeg"
                            width={321}
                            height={460}
                            alt='Elena'
                            className={style.image}
                        />
                        <div className={style.overlay}>
                            <div className={style.line}></div>
                            <p className={style.description}>{aboutText.ru.section.masters.elena.about}</p>
                        </div>
                    </div>
                    <p className={style.cardTitle}>{aboutText.ru.section.masters.elena.name}</p>
                    <span className={style.subTitle}>{aboutText.ru.section.masters.elena.specialization}</span>
                </li>
                <li className={style.listItem}>
                    <div className={style.card}>
                        <Image
                            src="/images/Anastasia.jpeg"
                            width={321}
                            height={460}
                            alt='Anastasia'
                            className={style.image}
                        />
                        <div className={style.overlay}>
                            <div className={style.line}></div>
                            <p className={style.description}>{aboutText.ru.section.masters.anastasia.about}</p>
                        </div>
                    </div>
                    <p className={style.cardTitle}>{aboutText.ru.section.masters.anastasia.name}</p>
                    <span className={style.subTitle}>{aboutText.ru.section.masters.anastasia.specialization}</span>
                </li>
                <li className={style.listItem}>
                    <div className={style.card}>
                        <Image
                            src="/images/Antonina.jpeg"
                            width={321}
                            height={460}
                            alt='Antonina'
                            className={style.image}
                        />
                        <div className={style.overlay}>
                            <div className={style.line}></div>
                            <p className={style.description}>{aboutText.ru.section.masters.antonina.about}</p>
                        </div>
                    </div>
                    <p className={style.cardTitle}>{aboutText.ru.section.masters.antonina.name}</p>
                    <span className={style.subTitle}>{aboutText.ru.section.masters.antonina.specialization}</span>
                </li>
                <li className={style.listItem}>
                    <div className={style.card}>
                        <Image
                            src="/images/Alla.jpeg"
                            width={321}
                            height={460}
                            alt='Alla'
                            className={style.image}
                        />
                        <div className={style.overlay}>
                            <div className={style.line}></div>
                            <p className={style.description}>{aboutText.ru.section.masters.alla.about}</p>
                        </div>
                    </div>
                    <p className={style.cardTitle}>{aboutText.ru.section.masters.alla.name}</p>
                    <span className={style.subTitle}>{aboutText.ru.section.masters.alla.specialization}</span>
                </li>
            </ul>
                )}
        </section>
    )
}