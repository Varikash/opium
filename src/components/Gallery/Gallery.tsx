'use client';

import React from "react";
import style from './Gallery.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from "next/image";
import {aboutText} from "@/constants/texts";
import type { Swiper as SwiperType } from 'swiper';
import type { NavigationOptions } from 'swiper/types';

const slides = [
    {
        image: '/images/slide1.jpg',
        procedure: aboutText.ru.section.gallery.slide_one.procedure,
        master: aboutText.ru.section.gallery.slide_one.master,
    },
    {
        image: '/images/slide2.jpeg',
        procedure: aboutText.ru.section.gallery.slide_two.procedure,
        master: aboutText.ru.section.gallery.slide_two.master,
    },
    {
        image: '/images/slide3.jpg',
        procedure: aboutText.ru.section.gallery.slide_three.procedure,
        master: aboutText.ru.section.gallery.slide_three.master,
    },
    {
        image: '/images/slide4.jpg',
        procedure: aboutText.ru.section.gallery.slide_four.procedure,
        master: aboutText.ru.section.gallery.slide_four.master,
    },
    {
        image: '/images/slide2.jpg',
        procedure: aboutText.ru.section.gallery.slide_five.procedure,
        master: aboutText.ru.section.gallery.slide_five.master,
    },
];

export default function GalleryCarousel() {
    const nextBtnRef = React.useRef<HTMLButtonElement>(null);

    return (
        <div className={style.carouselWrapper}>
            <div className={style.galleryOverlay}>
                Галерея
            </div>

            <button ref={nextBtnRef} className={style.customNextBtn}>
                <Image
                    src="/images/arrow-right.svg"
                    alt="Следующий слайд"
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
                    // Используем безопасный подход без spread-оператора
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
                                <span className={style.procedure}>Процедура</span>
                                <h2 className={style.title}>{slide.procedure}</h2>
                                <p className={style.master}>Мастер: {slide.master}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

