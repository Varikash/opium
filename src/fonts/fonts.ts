import { Inter } from 'next/font/google';
import { Great_Vibes } from "next/font/google";
import localFont from 'next/font/local';

// Подключение локального шрифта
export const myCustomFont = localFont({
    src: [
        {
            path: '../../public/fonts/1balmoralletplain10.ttf',
            weight: '400',
            style: 'normal',
        },
    ],
    variable: '--font-my-custom', // переменная CSS для использования
    display: 'swap',
});

// Опционально - подключение Google шрифтов
export const inter = Inter({
    subsets: ['latin', 'cyrillic'],
    display: 'swap',
    variable: '--font-inter',
});


export const greatVibes = Great_Vibes({
    weight: '400',
    subsets: ['cyrillic', 'cyrillic-ext'],
    variable: '--font-great-vibes',
    display: 'swap',
});