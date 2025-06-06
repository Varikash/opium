'use client';

import React, { useMemo } from 'react';
import style from './Brows.module.css';
import Image from "next/image";
import {aboutText} from "@/constants/texts";
import ServiceLine from "@/components/ServiceLine/ServiceLine";
import { useLanguage } from "@/context/LanguageContext"

export default function Brows() {
    const { language } = useLanguage();

    const services = aboutText[language].section.services.accordion_2.services;

    const servicesWithUUID = useMemo(() => {
        return services.map(service => ({
            ...service,
            uuid: typeof crypto !== 'undefined' && 'randomUUID' in crypto
                ? crypto.randomUUID()
                : Math.random().toString(36).substring(2, 10)
        }));
    }, [services]);


    return (
        <div className={style.container}>
            <div className={style.about}>
                <Image
                    alt='makeup'
                    src={'/images/brows.jpg'}
                    width={180}
                    height={225}
                    className={style.image}
                />
                <p className={style.description}>{aboutText[language].section.services.accordion_2.description}</p>
                <p className={style.note}>{aboutText[language].section.services.serviceText}</p>
            </div>
            <div className={style.price}>
                {servicesWithUUID.map(service => (
                    <ServiceLine
                        key={service.uuid}
                        name={service.name}
                        price={service.price}
                    />
                ))}

            </div>
        </div>
    )
}