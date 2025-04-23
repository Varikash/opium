'use client';

import React, { useMemo } from 'react';
import style from './Nails.module.css';
import Image from "next/image";
import {aboutText} from "@/constants/texts";
import ServiceLine from "@/components/ServiceLine/ServiceLine";

export default function Nails() {
    const services = aboutText.ru.section.services.accordion_3.services;

    const servicesWithUUID = useMemo(() => {
        return services.map(service => ({
            ...service,
            uuid: typeof crypto !== 'undefined' && 'randomUUID' in crypto
                ? crypto.randomUUID()
                : Math.random().toString(36).substring(2, 10)
        }));
    }, []);

    return (
        <div className={style.container}>
            <div className={style.about}>
                <Image
                    alt='makeup'
                    src={'/images/nails.webp'}
                    width={255}
                    height={205}
                    className={style.image}
                />
                <p className={style.description}>{aboutText.ru.section.services.accordion_3.description}</p>
                <p className={style.note}>Все цены указаны в леях.</p>
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