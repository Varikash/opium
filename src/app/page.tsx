import React from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  const meta = {
    ru: {
      title: 'Салон красоты в сердце города — Opium',
      description: 'Услуги косметологии, макияжа, ногтей и бровей с 2017 года. Забота, качество и стиль.',
      locale: 'ru_RU',
    },
    ro: {
      title: 'Salon de frumusețe în inima orașului — Opium',
      description: 'Servicii de cosmetică, machiaj, unghii și sprâncene din 2017. Îngrijire, calitate și stil.',
      locale: 'ro_RO',
    },
  };

  const language: 'ru' | 'ro' = 'ru'; // можно заменить на динамический выбор

  const current = meta[language];

  return {
    title: current.title,
    description: current.description,
    alternates: {
      canonical: 'https://www.beauty-opium.md/',
    },
    openGraph: {
      title: current.title,
      description: current.description,
      url: 'https://www.beauty-opium.md/',
      images: ['https://www.beauty-opium.md/preview.png'],
      locale: current.locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: current.title,
      description: current.description,
      images: ['https://www.beauty-opium.md/preview.png'],
    },
    robots: {
      index: true,
      follow: true,
    },
    metadataBase: new URL('https://www.beauty-opium.md'),
  };
};
import LoaderTulip from "@/components/LoaderTulip/LoaderTulip";
import Header from "@/components/Header/Header";
import MainBody from "@/components/MainBody/MainBody";
import About from "@/components/About/About";
import Masters from "@/components/Masters/Masters";
import Services from "@/components/Services/Services";
import Gallery from "@/components/Gallery/Gallery";
import Testimonials from "@/components/Testimonials/Testimonials";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <LanguageProvider>
      <LoaderTulip />
      <Header />
      <MainBody>
        <About />
        <Masters />
        <Services />
      </MainBody>
      <Gallery />
      <Testimonials />
      <Footer />
    </LanguageProvider>
  );
}
