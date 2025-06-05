'use client';

import React from "react";
import style from './Gallery.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from "next/image";
import { aboutText } from "@/constants/texts";
import type { Swiper as SwiperType } from 'swiper';
import type { NavigationOptions } from 'swiper/types';
import { useLanguage } from "@/context/LanguageContext";

export default function GalleryCarousel() {
    const nextBtnRef = React.useRef<HTMLButtonElement>(null);
    const { language } = useLanguage();

    // Тексты для разных языков
    const galleryTexts = {
        ru: {
            galleryTitle: "Галерея",
            procedureLabel: "Процедура",
            masterLabel: "Мастер"
        },
        ro: {
            galleryTitle: "Galerie",
            procedureLabel: "Procedură",
            masterLabel: "Specialist"
        }
    };

    // Выбираем текст в зависимости от текущего языка
    const text = galleryTexts[language];

    // Динамически создаем массив слайдов в зависимости от текущего языка
    const slides = [
        {
            image: '/images/slide1.jpg',
            procedure: aboutText[language].section.gallery.slide_one.procedure,
            master: aboutText[language].section.gallery.slide_one.master,
        },
        {
            image: '/images/manicure.jpg',
            procedure: aboutText[language].section.gallery.slide_two.procedure,
            master: aboutText[language].section.gallery.slide_two.master,
        },
        {
            image: '/images/makeup.jpg',
            procedure: aboutText[language].section.gallery.slide_three.procedure,
            master: aboutText[language].section.gallery.slide_three.master,
        },
        {
            image: '/images/haircare.jpg',
            procedure: aboutText[language].section.gallery.slide_four.procedure,
            master: aboutText[language].section.gallery.slide_four.master,
        },
        {
            image: '/images/haircut.jpg',
            procedure: aboutText[language].section.gallery.slide_five.procedure,
            master: aboutText[language].section.gallery.slide_five.master,
        },
    ];

    return (
        <div className={style.carouselWrapper} id="gallery">
            <div className={style.galleryOverlay}>
                {text.galleryTitle}
            </div>

            <button ref={nextBtnRef} className={style.customNextBtn}>
                <Image
                    src="/images/arrow-right.svg"
                    alt={language === 'ru' ? "Следующий слайд" : "Slide următorul"}
                    width={73}
                    height={73}
                />
            </button>

            <Swiper
                modules={[Navigation]}
                navigation={{
                    nextEl: '.swiper-button-next',
                }}
                onInit={(swiper: SwiperType) => {
                    const currentNav = (swiper.params.navigation || {}) as Partial<NavigationOptions>;
                    swiper.params.navigation = {
                        ...currentNav,
                        nextEl: nextBtnRef.current
                    } as NavigationOptions;

                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
                loop={true}
            >
                {slides.map((slide, idx) => (
                    <SwiperSlide key={idx}>
                        <div
                            className={style.slide}
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            <div className={style.slideInfo}>
                                <span className={style.procedure}>{text.procedureLabel}</span>
                                <h2 className={style.title}>{slide.procedure}</h2>
                                <p className={style.master}>{text.masterLabel}: {slide.master}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}