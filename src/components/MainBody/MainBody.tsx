'use client';

import React from "react";
import Image from "next/image";
import style from './MainBody.module.css'

interface MainBodyProps {
    children: React.ReactNode;
}

export default function MainBody ({children}: MainBodyProps) {
    return (
        <main className={style.main}>
            {children}
            <div className={style.backgroundVector}>
                <Image
                    src="/images/huve-vector.png"
                    alt="декор"
                    width={1200}
                    height={1300}
                    priority
                />
            </div>
        </main>
    )
}