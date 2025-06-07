'use client';

import Head from 'next/head';
import { useLanguage } from '@/context/LanguageContext';

export default function SeoHead() {
    const { language } = useLanguage();

    const meta = {
        ru: {
            title: 'Салон красоты в сердце города — Opium',
            description: 'Услуги косметологии, макияжа, ногтей и бровей с 2017 года. Забота, качество и стиль.',
        },
        ro: {
            title: 'Salon de frumusețe în inima orașului — Opium',
            description: 'Servicii de cosmetică, machiaj, unghii și sprâncene din 2017. Îngrijire, calitate și stil.',
        },
    };

    const current = meta[language];

    return (
        <Head>
            <title>{current.title}</title>
            <meta name="description" content={current.description} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="robots" content="index, follow" />

            {/* Open Graph */}
            <meta property="og:title" content={current.title} />
            <meta property="og:description" content={current.description} />
            <meta property="og:image" content="https://beauty-opium.md/preview.png" />
            <meta property="og:url" content="https://beauty-opium.md/" />
            <meta property="og:type" content="website" />
            <meta property="og:locale" content={language === 'ru' ? 'ru_RU' : 'ro_RO'} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={current.title} />
            <meta name="twitter:description" content={current.description} />
            <meta name="twitter:image" content="https://beauty-opium.md/preview.png" />
        </Head>
    );
}