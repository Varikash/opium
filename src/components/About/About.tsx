import React from "react";
import style from './About.module.css'
import { aboutText } from "@/constants/texts";
import Image from "next/image";

export default function About() {
    return (
        <section className={style.main}>
            <div className={style.founder}>
                <div className={style.founderPhoto}>
                    <Image
                        src="/images/founder.png"
                        width={229}
                        height={285}
                        alt="Founder"
                    />
                </div>
               <div className={style.founderDetails}>
                   <p>{aboutText.ru.founder}</p>
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
                <h2 className={style.header}>{aboutText.ru.header}</h2>
                <p className={style.teamText}>
                   Место, где <span className={`${style.decor}`}>Красота</span> становится искусством, а уход за любимой собой превращается в <span className={`${style.decor} ${style.decorRed}`}>Настоящее Удовольствие</span>.
                </p>
            </div>
        </section>
    )
}