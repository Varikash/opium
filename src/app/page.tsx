import React from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import SeoHead from "@/components/SeoHead/SeoHead";
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
      <SeoHead />
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
