import React from "react";
import LoaderTulip from "@/components/LoaderTulip/LoaderTulip";
import Header from "@/components/Header/Header";
import MainBody from "@/components/MainBody/MainBody";
import About from "@/components/About/About";
import Masters from "@/components/Masters/Masters";


export default function Home() {
  return (
    <>
      <LoaderTulip />
      <Header />
      <MainBody>
        <About />
        <Masters />
      </MainBody>
    </>
  );
}
