'use client';

import React from "react";
import style from './About.module.css'
import { aboutText } from "@/constants/texts";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
    // Получаем текущий язык из контекста
    const { language } = useLanguage();

    // Тексты для разных языков
    const aboutTexts = {
        ru: {
            beautyPlace: "Место, где",
            beauty: "Красота",
            becomesArt: "становится искусством, а уход за любимой собой превращается в",
            realPleasure: "Настоящее Удовольствие"
        },
        ro: {
            beautyPlace: "Un loc unde",
            beauty: "Frumusețea",
            becomesArt: "devine artă, iar îngrijirea de sine se transformă într-o",
            realPleasure: "Plăcere Autentică"
        }
    };

    // Выбираем текст в зависимости от языка
    const text = aboutTexts[language];

    return (
        <section className={style.main}>
            <div className={style.founder}>
                <div className={style.founderPhoto}>
                    <Image
                        src="/images/founder.png"
                        width={229}
                        height={285}
                        alt="Founder"
                        className={style.founderImage}
                    />
                </div>
                <div className={style.founderDetails}>
                    <p className={style.founderName}>{aboutText[language].founder_name}</p>
                    <p>{aboutText[language].founder}</p>
                </div>
            </div>
            <div className={style.team}>
                <Image
                    src="/images/Team.png"
                    width={634}
                    height={702}
                    alt="Team"
                    className={style.teamImage}
                />
                <h2 className={style.header}>{aboutText[language].header}</h2>
                <p className={style.teamText}>
                    {text.beautyPlace} <span className={`${style.decor}`}>{text.beauty}</span> {text.becomesArt} <span className={`${style.decor} ${style.decorRed}`}>{text.realPleasure}</span>
                </p>
            </div>
        </section>
    )
}