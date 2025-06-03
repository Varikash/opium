'use client';

import React, { useMemo } from 'react';
import style from './Consmetology.module.css';
import Image from "next/image";
import {aboutText} from "@/constants/texts";
import ServiceLine from "@/components/ServiceLine/ServiceLine";
import { useLanguage } from "@/context/LanguageContext";

export default function Cosmetology() {
    const { language } = useLanguage();

    const services = aboutText[language].section.services.accordion_6.services;

    const serviceListWithId = useMemo(() => {
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
                    src={'/images/cosmetology.jpg'}
                    alt={'cosmetology'}
                    className={style.image}
                    width={230}
                    height={270}
                />
                <p className={style.description}>{aboutText[language].section.services.accordion_6.description}</p>
                <p className={style.note}>{aboutText[language].section.services.serviceText}</p>
            </div>
            <div className={style.price}>
                {serviceListWithId.map(service => (
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