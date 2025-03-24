'use client';

import React, { useRef } from "react";
import style from './Header.module.css'
import Image from "next/image";


export default function Header() {

    const buttonRef = useRef<HTMLDivElement>(null);

    const handleClick = () => {
        if (buttonRef.current instanceof HTMLDivElement) {
            buttonRef.current.classList.toggle(style.active);
        }
    }

  return (
          <header className={style.header}>
              <video className={style.backgroundVideo} autoPlay={true} muted={true} loop={true} playsInline={true}>
                  <source src="/video/header.mp4" type="video/mp4" />
              </video>
              <div className={style.layer}></div>
              <nav className={style.navbar}>
                  <Image
                      src="/images/logo.png"
                      alt={'logo'}
                      width={156}
                      height={90}
                  />
                  <p className={style.headerText}>c 2017 года</p>
                  <div className={style.hamburger} ref={buttonRef} onClick={handleClick} role={'button'}>
                      <span></span>
                      <span></span>
                      <span></span>
                  </div>
              </nav>
              <h1 className={style.title}>
                  <span className={style.titleFirst}>Твоя</span>
                  <span className={`${style.titleDecore}`}>Доза Красоты</span>
                  <span className={style.titleSecond}>в самом сердце города</span>
              </h1>
              <div className={style.line}></div>
          </header>

  );
}


