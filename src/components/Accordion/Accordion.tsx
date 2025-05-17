'use client';
import React, { useRef, useEffect, useState } from 'react';
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
    const [contentHeight, setContentHeight] = useState<number>(0);

    // Измеряем высоту контента при монтировании и при изменении дочерних элементов
    useEffect(() => {
        const updateContentHeight = () => {
            if (contentRef.current) {
                const scrollHeight = contentRef.current.scrollHeight;
                setContentHeight(scrollHeight);
            }
        };

        // Обновляем высоту при изменении состояния isOpen
        if (isOpen) {
            updateContentHeight();

            // Устанавливаем обработчик изменения размера для динамического контента
            window.addEventListener('resize', updateContentHeight);

            // Отложенное обновление для контента, который может рендериться с задержкой
            const timer = setTimeout(updateContentHeight, 50);

            return () => {
                window.removeEventListener('resize', updateContentHeight);
                clearTimeout(timer);
            };
        }
    }, [isOpen, children]);

    // Обработка открытия/закрытия аккордеона
    useEffect(() => {
        const content = contentRef.current;
        if (!content) return;

        if (isOpen) {
            // Анимируем открытие контента
            content.style.transition = 'max-height 0.5s ease, padding-top 0.5s ease';
            content.style.maxHeight = `${contentHeight}px`;
            content.style.paddingTop = '30px';
        } else {
            // Анимируем закрытие контента
            content.style.transition = 'max-height 0.3s ease, padding-top 0.3s ease';
            content.style.maxHeight = '0px';
            content.style.paddingTop = '0px';
        }
    }, [isOpen, contentHeight]);

    return (
        <div className={style.accordion}>
            <div className={style.header} onClick={onToggle}>
                <h2 className={isOpen ? style.titleOpened : style.title}>{title}</h2>
                <span className={style.desktopOnly}>
                    <span className={style.icon}>{isOpen ? '—' : ''}</span>
                </span>
                <span className={style.mobileOnly}>
                    <span className={style.icon}>
                        {isOpen ? '—' : <Image src={'/images/plus.png'} alt={'plus'} width={56} height={56}/>}
                    </span>
                </span>
            </div>
            <div ref={contentRef} className={style.content}>
                {children}
            </div>
        </div>
    );
}