import React from "react";
import style from './MainBody.module.css'

interface MainBodyProps {
    children: React.ReactNode;
}


export default function MainBody ({children}: MainBodyProps) {
    return (
        <main className={style.main}>
            {children}
        </main>
    )
}