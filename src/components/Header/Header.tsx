'use client';

import React, { useRef, useState, useEffect } from "react";
import style from './Header.module.css'
import Image from "next/image";
import Menu from "@/components/Menu/Menu";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
    // Получаем текущий язык из контекста
    const { language } = useLanguage();

    // Тексты для разных языков
    const headerTexts = {
        ru: {
            sinceYear: "c 2017 года",
            your: "Твоя",
            dose: "Доза",
            beauty: "Красоты",
            inHeart: "в самом сердце",
            city: "города"
        },
        ro: {
            sinceYear: "din 2017",
            your: "Doza ta",
            dose: "de",
            beauty: "Frumusețe",
            inHeart: "în inima",
            city: "orașului"
        }
    };

    // Выбираем текст в зависимости от языка
    const text = headerTexts[language];

    const buttonRef = useRef<HTMLDivElement>(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    const handleClick = () => {
        if (buttonRef.current instanceof HTMLDivElement) {
            buttonRef.current.classList.toggle(style.active);
        }

        setMenuOpen(prev => !prev);
    }

    const closeMenu = () => {
        if (buttonRef.current instanceof HTMLDivElement) {
            buttonRef.current.classList.toggle(style.active);
        }
        setMenuOpen(false);
    }

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 480);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Формируем классы в зависимости от языка
    const titleClass = `${style.title} ${language === 'ro' ? style.titleRo : ''}`;
    const titleFirstClass = `${style.titleFirst} ${language === 'ro' ? style.titleFirstRo : ''}`;
    const titleDecoreClass = `${style.titleDecore} ${language === 'ro' ? style.titleDecoreRo : ''}`;
    const subTitleDecoreClass = `${style.subTitleDecore} ${language === 'ro' ? style.subTitleDecoreRo : ''}`;
    const titleSecondClass = `${style.titleSecond} ${language === 'ro' ? style.titleSecondRo : ''}`;
    const subtitleSecondClass = `${style.subtitleSecond} ${language === 'ro' ? style.subtitleSecondRo : ''}`;

    return (
        <>
            <header className={style.header}>
                <video
                    className={style.backgroundVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/video/header.webm" type="video/webm" />
                    <source src="/video/header.mp4" type="video/mp4" />
                </video>
                <div className={style.layer}></div>
                <nav className={style.navbar}>
                    <Image
                        src={isSmallScreen ? "/images/logo-mini.png" : "/images/logo.png"}
                        alt="logo"
                        width={isSmallScreen ? 56 : 156}
                        height={isSmallScreen ? 81 : 90}
                    />
                    <p className={`${style.headerText} ${menuOpen ? style.hidden : ''}`}>{text.sinceYear}</p>
                    <div
                        className={style.hamburger}
                        ref={buttonRef}
                        onClick={handleClick}
                        role="button"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </nav>
                <h1 className={titleClass}>
                    <span className={titleFirstClass}>{text.your}</span>
                    <span className={titleDecoreClass}>
                        <span className={subTitleDecoreClass}>{text.dose}</span> {text.beauty}
                    </span>
                    <span className={titleSecondClass}>
                        {text.inHeart} <span className={subtitleSecondClass}>{text.city}</span>
                    </span>
                </h1>
                <div className={style.line}>
                    <p className={`${style.lineText}`}>{text.sinceYear}</p>
                </div>
                {menuOpen && (
                    <Menu onClose={closeMenu} />
                )}
            </header>
        </>
    );
}