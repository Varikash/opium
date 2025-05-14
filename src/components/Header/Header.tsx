'use client';

import React, { useRef, useState, useEffect } from "react";
import style from './Header.module.css'
import Image from "next/image";


export default function Header() {

    const buttonRef = useRef<HTMLDivElement>(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    const handleClick = () => {
        if (buttonRef.current instanceof HTMLDivElement) {
            buttonRef.current.classList.toggle(style.active);
        }

        setMenuOpen(prev => !prev);
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
                    <p className={`${style.headerText} ${menuOpen ? style.hidden : ''}`}>c 2017 года</p>
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
                    <h1 className={style.title}>
                        <span className={style.titleFirst}>Твоя</span>
                        <span className={style.titleDecore}><span className={style.subTitleDecore}>Доза</span> Красоты</span>
                        <span className={style.titleSecond}>в самом сердце <span className={style.subtitleSecond}>города</span></span>
                    </h1>
                <div className={style.line}>
                    <p className={`${style.lineText}`}>c 2017 года</p>
                </div>
                {menuOpen && (
                    <div className={style.menu}>

                    </div>
                )}
            </header>
        </>
    );
}


