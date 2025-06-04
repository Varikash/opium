'use client';

import React, { useRef } from 'react';
import style from './Testimonials.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import type { NavigationOptions } from 'swiper/types';
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Testimonials() {
    const prevBtnRef = useRef(null);
    const nextBtnRef = useRef(null);
    const { language } = useLanguage();

    // Тексты для разных языков
    const testimonialTexts = {
        ru: {
            sectionName: "Отзывы",
            title: "Ваша обратная связь помогает нам становиться",
            highlight: "Лучше",
            nextArrowAlt: "Далее",
            testimonials: [
                { name: "Мария", review: "Отличный салон! Очень довольна работой мастеров." },
                { name: "Анна", review: "Профессиональный подход и внимание к деталям. Всегда отличный результат!" },
                { name: "Дана", review: "Мастера в салоне работают на высшем уровне. Я в восторге от результата!" },
                { name: "София", review: "Прекрасная атмосфера и качественный сервис. Обязательно вернусь снова!" },
                { name: "Алина", review: "Очень понравилась работа косметолога. Получила именно то, что хотела." },
                { name: "Ирина", review: "Регулярно посещаю этот салон и всегда довольна результатом." },
                { name: "Екатерина", review: "Спасибо за профессионализм! Мой новый образ превзошел все ожидания." },
                { name: "Юлия", review: "Лучший уход за волосами, который я когда-либо получала." },
                { name: "Наталья", review: "Замечательные специалисты и прекрасное отношение к клиентам." },
            ]
        },
        ro: {
            sectionName: "Recenzii",
            title: "Feedback-ul dvs. ne ajută să devenim",
            highlight: "Mai buni",
            nextArrowAlt: "Următorul",
            testimonials: [
                { name: "Maria", review: "Salon excelent! Sunt foarte mulțumită de munca specialiștilor." },
                { name: "Ana", review: "Abordare profesională și atenție la detalii. Întotdeauna un rezultat excelent!" },
                { name: "Dana", review: "Specialiștii din salon lucrează la cel mai înalt nivel. Sunt încântată de rezultat!" },
                { name: "Sofia", review: "Atmosferă plăcută și servicii de calitate. Voi reveni cu siguranță!" },
                { name: "Alina", review: "Mi-a plăcut foarte mult munca cosmetologului. Am primit exact ceea ce am dorit." },
                { name: "Irina", review: "Vizitez regulat acest salon și sunt întotdeauna mulțumită de rezultat." },
                { name: "Ecaterina", review: "Mulțumesc pentru profesionalism! Noul meu look a depășit toate așteptările." },
                { name: "Iulia", review: "Cel mai bun tratament pentru păr pe care l-am primit vreodată." },
                { name: "Natalia", review: "Specialiști minunați și atitudine excelentă față de clienți." },
            ]
        }
    };

    // Выбираем текст на основе текущего языка
    const text = testimonialTexts[language];

    // Изображения для слайдов
    const slideImages = [
        "/images/work4.jpg",
        "/images/work1.jpg",
        "/images/work2.jpg",
        "/images/work3.jpg",
        "/images/treatment.webp",
        "/images/hair.jpg",
        "/images/work5.jpg",
        "/images/slide2.jpg",
        "/images/slide1.jpg"
    ];

    return (
        <section className={style.main} id="reviews">
            <div className={style.header}>
                <span className={style.sectionName}>{text.sectionName}</span>
                <h2 className={style.title}>{text.title} <br/> <span className={style.decor}>{text.highlight}</span></h2>
            </div>
            <div className={style.swiper}>
                <div className={style.arrows}>
                    <button ref={prevBtnRef} className={style.arrowPrev}>
                        <Image
                            src="/images/arrow-left-testimonials.svg"
                            alt="Back"
                            width={30}
                            height={30}
                        />
                    </button>
                    <button ref={nextBtnRef} className={style.arrowNext}>
                        <Image
                            src="/images/arrow-right-testimonials.svg"
                            alt={text.nextArrowAlt}
                            width={30}
                            height={30}
                        />
                    </button>
                </div>
                <div className={style.slider}>
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={10}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        initialSlide={0}
                        loop={true}
                        navigation={{
                            prevEl: prevBtnRef.current,
                            nextEl: nextBtnRef.current,
                        }}
                        onInit={(swiper: SwiperType) => {
                            const currentNav = (swiper.params.navigation || {}) as Partial<NavigationOptions>;
                            swiper.params.navigation = {
                                ...currentNav,
                                prevEl: prevBtnRef.current,
                                nextEl: nextBtnRef.current,
                            } as NavigationOptions;
                            swiper.navigation.init();
                            swiper.navigation.update();
                        }}
                        className={style.mySwiper}
                    >
                        {/* Динамическое создание слайдов на основе данных */}
                        {text.testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index} className={style.testimonialSlide}>
                                <div
                                    className={style.testimonialCard}
                                    style={{ backgroundImage: `url("${slideImages[index]}")` }}
                                >
                                    <div className={style.testimonialWrapper}></div>
                                    <div className={style.userInfo}>
                                        <div className={style.avatar}>
                                            <Image
                                                src={`/images/avatar${index + 1}.jpg`}
                                                alt={`Аватар ${testimonial.name}`}
                                                width={42}
                                                height={42}
                                            />
                                        </div>
                                        <h3 className={style.userName}>{testimonial.name}</h3>
                                    </div>
                                    <p className={style.review}>{testimonial.review}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}