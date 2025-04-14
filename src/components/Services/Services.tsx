'use client';

import React, { useState, useRef, useEffect } from "react";
import style from './Services.module.css';
import Accordion from "@/components/Accordion/Accordion";
import Makeup from "@/components/Makeup/Makeup";
import Brows from "@/components/Brows/Brows";
import Nails from "@/components/Nails/Nails";
import Hair from "@/components/Hair/Hair";
import Treatment from "@/components/Treatment/Treatment";
import { aboutText } from "@/constants/texts";

export default function Services() {
    const [openAccordion, setOpenAccordion] = useState<number | null>(null);
    const accordionRefs = useRef<(HTMLDivElement | null)[]>([]);

    // Эффект для прокрутки к открытому аккордеону
    useEffect(() => {
        if (openAccordion !== null && accordionRefs.current[openAccordion]) {
            // Прокручиваем к открытому аккордеону
            setTimeout(() => {
                accordionRefs.current[openAccordion]?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 10);
        }
    }, [openAccordion]);

    const handleToggle = (index: number) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    return (
        <section className={style.services}>
            <h2 className={style.header}>{aboutText.ru.section.services.header}</h2>

            <div ref={(el) => { accordionRefs.current[0] = el; }}>
                <Accordion
                    title={aboutText.ru.section.services.accordion_1.title}
                    isOpen={openAccordion === 0}
                    onToggle={() => handleToggle(0)}
                >
                    <Makeup />
                </Accordion>
            </div>

            <div ref={(el) => { accordionRefs.current[1] = el; }}>
                <Accordion
                    title={aboutText.ru.section.services.accordion_2.title}
                    isOpen={openAccordion === 1}
                    onToggle={() => handleToggle(1)}
                >
                    <Brows/>
                </Accordion>
            </div>

            <div ref={(el) => { accordionRefs.current[2] = el; }}>
                <Accordion
                    title={aboutText.ru.section.services.accordion_3.title}
                    isOpen={openAccordion === 2}
                    onToggle={() => handleToggle(2)}
                >
                    <Nails/>
                </Accordion>
            </div>

            <div ref={(el) => { accordionRefs.current[3] = el; }}>
                <Accordion
                    title={aboutText.ru.section.services.accordion_4.title}
                    isOpen={openAccordion === 3}
                    onToggle={() => handleToggle(3)}
                >
                    <Hair />
                </Accordion>
            </div>

            <div ref={(el) => { accordionRefs.current[4] = el; }}>
                <Accordion
                    title={aboutText.ru.section.services.accordion_5.title}
                    isOpen={openAccordion === 4}
                    onToggle={() => handleToggle(4)}
                >
                    <Treatment />
                </Accordion>
            </div>
        </section>
    );
}