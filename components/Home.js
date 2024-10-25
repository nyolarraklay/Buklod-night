"use client";

import { useState, useEffect } from "react";
import Header from "./Header";
import FrontPage from "./FrontPage";
import Events from "./Events";
import About from "./About";
import Delegates from "./Delegates";
import Gallery from "./Gallery";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
  }, []);

  if (!isLoading) return null;

  return (
    <>
      <Header />
      <FrontPage />
      <Delegates />
      <Events />
      <About />
      <Gallery />
    </>
  );
}
