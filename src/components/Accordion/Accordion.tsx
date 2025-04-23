
'use client';
import React, { useRef, useEffect } from 'react';
import Image from "next/image";
import style from './Accordion.module.css';

type AccordionProps = {
    title: string;
    children: React.ReactNode;
    isOpen: boolean;
    onToggle: () => void;
};

export default function Accordion({ title, children, isOpen, onToggle }: AccordionProps) {
    const contentRef = useRef<HTMLDivElement>(null);

    // Обработка открытия/закрытия аккордеона
    useEffect(() => {
        const content = contentRef.current;
        if (!content) return;

        if (isOpen) {
            // Анимируем открытие контента
            content.style.transition = 'max-height 0.5s ease';
            content.style.maxHeight = `${content.scrollHeight}px`;
        } else {
            // Анимируем закрытие контента
            content.style.transition = 'max-height 0.3s ease';
            content.style.maxHeight = '0px';
        }
    }, [isOpen]);

    return (
        <div className={style.accordion}>
            <div className={style.header} onClick={onToggle}>
                <h2 className={isOpen ? style.titleOpened : style.title}>{title}</h2>
                <span className={style.desktopOnly}> <span className={style.icon}>{isOpen ? '—' : ''}</span> </span>
                <span className={style.mobileOnly}> <span className={style.icon}>{isOpen ? '—' : <Image src={'/images/plus.png'} alt={'plus'} width={56} height={56}/>}</span> </span>
            </div>
            <div ref={contentRef} className={isOpen? style.contentOpened : style.content}>
                {children}
            </div>
        </div>
    );
}