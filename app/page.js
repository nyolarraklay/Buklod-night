"use client";
import { useRef } from "react";
import Headers from "../components/Header";
import FrontPage from "@/components/FrontPage";
import Delegates from "@/components/Delegates";
import Events from "@/components/Events";
import Gallery from "@/components/Gallery";
import About from "@/components/About";

export default function HomePage() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);

  const scrollToSection = (section) => {
    const refs = {
      home: section1Ref,
      delegates: section2Ref,
      events: section3Ref,
      gallery: section4Ref,
      about: section5Ref,
    };
    const sectionTop = refs[section]?.current?.offsetTop || 0;
    window.scrollTo({ top: sectionTop - 50, behavior: "smooth" });
  };

  return (
    <div>
      <Headers scrollToSection={scrollToSection} />

      <div className="flex flex-col justify-between">
        <div ref={section1Ref}>
          <FrontPage />
        </div>
        <div ref={section2Ref}>
          <Delegates />
        </div>
        <div ref={section3Ref}>
          <Events />
          <div ref={section4Ref}>
            <Gallery />
          </div>
          <div ref={section5Ref} className="bg-gray-100">
            <About />
          </div>
        </div>
      </div>
    </div>
  );
}
