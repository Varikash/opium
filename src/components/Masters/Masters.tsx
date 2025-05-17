'use client';

import React, { useState, useEffect } from "react";
import style from './Masters.module.css';
import Image from "next/image";
import { aboutText } from "@/constants/texts";
import { useLanguage } from "@/context/LanguageContext";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Импорт стилей Swiper
import "swiper/css";
import "swiper/css/pagination";

export default function Masters() {
    // Получение текущего языка через контекст
    const { language } = useLanguage();

    // Тексты для кнопок в зависимости от языка
    const buttonTexts = {
        ru: {
            more: "Подробнее",
            close: "Закрыть",
            teamText: "Познакомьтесь с нашей командой",
            caring: "Заботливых",
            experts: "экспертов"
        },
        ro: {
            more: "Mai mult",
            close: "Închide",
            teamText: "Cunoaște echipa noastră de",
            caring: "Grijulii",
            experts: "experți"
        }
    };

    // Выбираем текст в зависимости от языка
    const text = buttonTexts[language];

    // Флаг для определения мобильного размера экрана
    const [isMobile, setIsMobile] = useState<boolean>(false);
    // Флаг для определения тач-устройства
    const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);
    // Индекс активной карточки
    const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);

    // Отслеживаем изменение ширины окна, чтобы переключаться на карусель при нужном размере
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1256);
        };

        handleResize(); // Устанавливаем начальное значение
        window.addEventListener('resize', handleResize);

        // Проверка типа устройства
        const touchMatch = window.matchMedia('(pointer: coarse)');
        setIsTouchDevice(touchMatch.matches);
        const touchHandler = (e: MediaQueryListEvent): void => {
            setIsTouchDevice(e.matches);
        };
        touchMatch.addEventListener('change', touchHandler);

        // Очистка обоих слушателей событий
        return () => {
            window.removeEventListener('resize', handleResize);
            touchMatch.removeEventListener('change', touchHandler);
        };
    }, []);

    // Обработчики для кнопок с типизацией
    const handleMoreButtonClick = (index: number): void => {
        setActiveCardIndex(index);
    };

    const handleCloseButtonClick = (): void => {
        setActiveCardIndex(null);
    };

    // Получаем данные мастеров из текущего языка
    const mastersTextData = aboutText[language].section.masters;

    // Собираем данные для мастеров в единый массив для удобства перебора
    const mastersData = [
        {
            image: '/images/Elena.jpeg',
            alt: mastersTextData.elena.name,
            about: mastersTextData.elena.about,
            name: mastersTextData.elena.name,
            specialization: mastersTextData.elena.specialization,
        },
        {
            image: '/images/Anastasia.jpeg',
            alt: mastersTextData.anastasia.name,
            about: mastersTextData.anastasia.about,
            name: mastersTextData.anastasia.name,
            specialization: mastersTextData.anastasia.specialization,
        },
        {
            image: '/images/Antonina.jpeg',
            alt: mastersTextData.antonina.name,
            about: mastersTextData.antonina.about,
            name: mastersTextData.antonina.name,
            specialization: mastersTextData.antonina.specialization,
        },
        {
            image: '/images/Alla.jpeg',
            alt: mastersTextData.alla.name,
            about: mastersTextData.alla.about,
            name: mastersTextData.alla.name,
            specialization: mastersTextData.alla.specialization,
        },
    ];

    return(
        <section className={style.main}>
            <h2 className={style.header}>{mastersTextData.header}</h2>
            <p className={style.text}>
                {text.teamText} <span className={style.decor}>{text.caring}</span> {text.experts}
            </p>
            {isMobile ? (
                <Swiper
                    modules={[Pagination]}
                    grabCursor={true}
                    allowTouchMove={true}
                    spaceBetween={1}
                    slidesPerView={'auto'}
                    loop={true}
                    className={style.swiper}
                >
                    {mastersData.map((master, index: number) => (
                        <SwiperSlide key={index} className={style.cardSlide}>
                            <div className={style.listItem}>
                                <div className={style.card}>
                                    <div className={style.imageContainer}>
                                        <Image
                                            src={master.image}
                                            width={321}
                                            height={460}
                                            alt={master.alt}
                                            className={`${style.image} ${activeCardIndex === index ? style.imageHidden : ''}`}
                                        />
                                        {isTouchDevice && activeCardIndex !== index && (
                                            <button
                                                className={style.moreButton}
                                                onClick={() => handleMoreButtonClick(index)}
                                                aria-label={text.more}
                                            >
                                                <span className={style.moreButtonText}>{text.more}</span>
                                            </button>
                                        )}
                                    </div>
                                    <div className={`${style.overlay} ${activeCardIndex === index ? style.overlayVisible : ''}`}>
                                        <div className={style.line}></div>
                                        <p className={style.description}>{master.about}</p>
                                        {activeCardIndex === index && (
                                            <button
                                                className={style.closeButton}
                                                onClick={handleCloseButtonClick}
                                            >
                                                {text.close}
                                            </button>
                                        )}
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
                    {mastersData.map((master, index) => (
                        <li key={index} className={style.listItem}>
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
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}