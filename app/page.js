"use client";
import Headers from "../components/Header";
import FrontPage from "@/components/FrontPage";
import Delegates from "@/components/Delegates";
import Events from "@/components/Events";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import SmoothScroll from "@/components/SmoothScroll";

export default function HomePage() {
  return (
    <>
      <Headers />

      <FrontPage />

      <Delegates />

      <Events />

      <Gallery />

      <About />
    </>
  );
}
