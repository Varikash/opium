import React from "react";
import style from './Masters.module.css';
import Image from "next/image";
import { aboutText } from "@/constants/texts";

export default function Masters() {
    return(
        <section
            className={style.main}
        >
            <h2 className={style.header}>{aboutText.ru.section.masters.header}</h2>
            <p className={style.text}>Познакомьтесь с нашей командой <span className={style.decor}>Заботливых</span> экспертов</p>
            <ul className={style.list}>
                <li className={style.listItem}>
                    <div className={style.card}>
                        <Image
                            src="/images/Elena.jpeg"
                            width={321}
                            height={460}
                            alt='Elena'
                            className={style.image}
                        />
                        <div className={style.overlay}>
                            <div className={style.line}></div>
                            <p className={style.description}>{aboutText.ru.section.masters.elena.about}</p>
                        </div>
                    </div>
                    <p className={style.cardTitle}>{aboutText.ru.section.masters.elena.name}</p>
                    <span className={style.subTitle}>{aboutText.ru.section.masters.elena.specialization}</span>
                </li>
                <li className={style.listItem}>
                    <div className={style.card}>
                        <Image
                            src="/images/Anastasia.jpeg"
                            width={321}
                            height={460}
                            alt='Anastasia'
                            className={style.image}
                        />
                        <div className={style.overlay}>
                            <div className={style.line}></div>
                            <p className={style.description}>{aboutText.ru.section.masters.anastasia.about}</p>
                        </div>
                    </div>
                    <p className={style.cardTitle}>{aboutText.ru.section.masters.anastasia.name}</p>
                    <span className={style.subTitle}>{aboutText.ru.section.masters.anastasia.specialization}</span>
                </li>
                <li className={style.listItem}>
                    <div className={style.card}>
                        <Image
                            src="/images/Antonina.jpeg"
                            width={321}
                            height={460}
                            alt='Antonina'
                            className={style.image}
                        />
                        <div className={style.overlay}>
                            <div className={style.line}></div>
                            <p className={style.description}>{aboutText.ru.section.masters.antonina.about}</p>
                        </div>
                    </div>
                    <p className={style.cardTitle}>{aboutText.ru.section.masters.antonina.name}</p>
                    <span className={style.subTitle}>{aboutText.ru.section.masters.antonina.specialization}</span>
                </li>
                <li className={style.listItem}>
                    <div className={style.card}>
                        <Image
                            src="/images/Alla.jpeg"
                            width={321}
                            height={460}
                            alt='Alla'
                            className={style.image}
                        />
                        <div className={style.overlay}>
                            <div className={style.line}></div>
                            <p className={style.description}>{aboutText.ru.section.masters.alla.about}</p>
                        </div>
                    </div>
                    <p className={style.cardTitle}>{aboutText.ru.section.masters.alla.name}</p>
                    <span className={style.subTitle}>{aboutText.ru.section.masters.alla.specialization}</span>
                </li>
            </ul>

        </section>
    )
}