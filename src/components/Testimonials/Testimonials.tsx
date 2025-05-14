'use client';

import React, { useRef } from 'react';
import style from './Testimonials.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import type { NavigationOptions } from 'swiper/types';
import Image from "next/image";


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



export default function Testimonials () {

    const prevBtnRef = useRef(null);
    const nextBtnRef = useRef(null);

    return (
        <section className={style.main}>
            <div className={style.header}>
                <span className={style.sectionName}>Отзывы</span>
                <h2 className={style.title}>Ваша обратная связь помогает <br/> нам становиться <span className={style.decor}>Лучше</span></h2>
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
                            alt="Далее"
                            width={30}
                            height={30}
                        />
                    </button>
                </div>
                <div className={style.slider}>
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={10}
                        slidesPerView={'auto'}
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
                        {/* Примеры слайдов */}
                        {/* Карточка 1 */}
                        <SwiperSlide className={style.testimonialSlide}>
                            <div
                                className={style.testimonialCard}
                                style={{ backgroundImage: 'url("/images/slide4.jpg")'}}
                            >
                                <div className={style.testimonialWrapper}></div>
                                <div className={style.userInfo}>
                                    <div className={style.avatar}>
                                        <Image
                                            src="/images/avatar1.jpg"
                                            alt="Аватар Марии"
                                            width={42}
                                            height={42}
                                        />
                                    </div>
                                    <h3 className={style.userName}>Мария</h3>
                                </div>
                                <p className={style.review}>Отличный салон! Очень довольна работой мастеров.</p>
                            </div>
                        </SwiperSlide>

                        {/* Карточка 2 */}
                        <SwiperSlide className={style.testimonialSlide}>
                            <div
                                className={style.testimonialCard}
                                style={{ backgroundImage: 'url("/images/slide1.jpg")'}}
                            >
                                <div className={style.userInfo}>
                                    <div className={style.avatar}>
                                        <Image
                                            src="/images/avatar2.jpg"
                                            alt="Аватар Анны"
                                            width={42}
                                            height={42}
                                        />
                                    </div>
                                    <h3 className={style.userName}>Анна</h3>
                                </div>
                                <p className={style.review}>Профессиональный подход и внимание к деталям. Всегда отличный результат!</p>
                            </div>
                        </SwiperSlide>

                        {/* Карточка 3 */}
                        <SwiperSlide className={style.testimonialSlide}>
                            <div
                                className={style.testimonialCard}
                                style={{ backgroundImage: 'url("/images/slide2.jpg")'}}
                            >
                                <div className={style.userInfo}>
                                    <div className={style.avatar}>
                                        <Image
                                            src="/images/avatar3.jpg"
                                            alt="Аватар Елены"
                                            width={42}
                                            height={42}
                                        />
                                    </div>
                                    <h3 className={style.userName}>Елена</h3>
                                </div>
                                <p className={style.review}>Мастера в салоне работают на высшем уровне. Я в восторге от результата!</p>
                            </div>
                        </SwiperSlide>

                        {/* Карточка 4 */}
                        <SwiperSlide className={style.testimonialSlide}>
                            <div
                                className={style.testimonialCard}
                                style={{ backgroundImage: 'url("/images/slide3.jpg")'}}
                            >
                                <div className={style.userInfo}>
                                    <div className={style.avatar}>
                                        <Image
                                            src="/images/avatar4.jpg"
                                            alt="Аватар Софии"
                                            width={42}
                                            height={42}
                                        />
                                    </div>
                                    <h3 className={style.userName}>София</h3>
                                </div>
                                <p className={style.review}>Прекрасная атмосфера и качественный сервис. Обязательно вернусь снова!</p>
                            </div>
                        </SwiperSlide>

                        {/* Карточка 5 */}
                        <SwiperSlide className={style.testimonialSlide}>
                            <div
                                className={style.testimonialCard}
                                style={{ backgroundImage: 'url("/images/treatment.webp")'}}
                            >
                                <div className={style.userInfo}>
                                    <div className={style.avatar}>
                                        <Image
                                            src="/images/avatar5.jpg"
                                            alt="Аватар Алины"
                                            width={42}
                                            height={42}
                                        />
                                    </div>
                                    <h3 className={style.userName}>Алина</h3>
                                </div>
                                <p className={style.review}>Очень понравилась работа стилиста. Получила именно то, что хотела.</p>
                            </div>
                        </SwiperSlide>

                        {/* Карточка 6 */}
                        <SwiperSlide className={style.testimonialSlide}>
                            <div
                                className={style.testimonialCard}
                                style={{ backgroundImage: 'url("/images/hair.jpg")'}}
                            >
                                <div className={style.userInfo}>
                                    <div className={style.avatar}>
                                        <Image
                                            src="/images/avatar6.jpg"
                                            alt="Аватар Ирины"
                                            width={42}
                                            height={42}
                                        />
                                    </div>
                                    <h3 className={style.userName}>Ирина</h3>
                                </div>
                                <p className={style.review}>Регулярно посещаю этот салон и всегда довольна результатом.</p>
                            </div>
                        </SwiperSlide>

                        {/* Карточка 7 */}
                        <SwiperSlide className={style.testimonialSlide}>
                            <div
                                className={style.testimonialCard}
                                style={{ backgroundImage: 'url("/images/slide4.jpg")'}}
                            >
                                <div className={style.userInfo}>
                                    <div className={style.avatar}>
                                        <Image
                                            src="/images/avatar7.jpg"
                                            alt="Аватар Екатерины"
                                            width={42}
                                            height={42}
                                        />
                                    </div>
                                    <h3 className={style.userName}>Екатерина</h3>
                                </div>
                                <p className={style.review}>Спасибо за профессионализм! Мой новый образ превзошел все ожидания.</p>
                            </div>
                        </SwiperSlide>

                        {/* Карточка 8 */}
                        <SwiperSlide className={style.testimonialSlide}>
                            <div
                                className={style.testimonialCard}
                                style={{ backgroundImage: 'url("/images/slide2.jpg")'}}
                            >
                                <div className={style.userInfo}>
                                    <div className={style.avatar}>
                                        <Image
                                            src="/images/avatar8.jpg"
                                            alt="Аватар Юлии"
                                            width={42}
                                            height={42}
                                        />
                                    </div>
                                    <h3 className={style.userName}>Юлия</h3>
                                </div>
                                <p className={style.review}>Лучший уход за волосами, который я когда-либо получала.</p>
                            </div>
                        </SwiperSlide>

                        {/* Карточка 9 */}
                        <SwiperSlide className={style.testimonialSlide}>
                            <div
                                className={style.testimonialCard}
                                style={{ backgroundImage: 'url("/images/treatment.webp")'}}
                            >
                                <div className={style.userInfo}>
                                    <div className={style.avatar}>
                                        <Image
                                            src="/images/avatar9.jpg"
                                            alt="Аватар Натальи"
                                            width={42}
                                            height={42}
                                        />
                                    </div>
                                    <h3 className={style.userName}>Наталья</h3>
                                </div>
                                <p className={style.review}>Замечательные специалисты и прекрасное отношение к клиентам.</p>
                            </div>
                        </SwiperSlide>

                        {/* Карточка 10 */}
                        <SwiperSlide className={style.testimonialSlide}>
                            <div
                                className={style.testimonialCard}
                                style={{ backgroundImage: 'url("/images/slide1.jpg")'}}
                            >
                                <div className={style.userInfo}>
                                    <div className={style.avatar}>
                                        <Image
                                            src="/images/avatar10.jpg"
                                            alt="Аватар Ольги"
                                            width={42}
                                            height={42}
                                        />
                                    </div>
                                    <h3 className={style.userName}>Ольга</h3>
                                </div>
                                <p className={style.review}>Рекомендую всем! Здесь помогли решить мою проблему с волосами.</p>
                            </div>
                        </SwiperSlide>
                        {/* Добавьте остальные слайды по необходимости */}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}