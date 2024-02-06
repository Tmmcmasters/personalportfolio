"use client"

import { Card, CardBody, CardFooter, CardHeader, Divider } from "@nextui-org/react";
import ZoomParallax from "./(components)/ZoomParallax/zoomparallax";
import Lenis from "@studio-freight/lenis/types";
import HeroSection from "./(components)/heroSection";
import HorizontalSection from "./(components)/HorizontalScroll/horizontalScroll";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import ColorParallax from "./(components)/ColorParallax/colorparallax";
import ContactMe from "./(components)/contactme";

export default function Home() {

  

  return (
    <div className=" flex flex-col justify-center items-center bg-background  overflow-x-clip " id="home">
      <HeroSection />
      <div className="w-full h-full">
        <ZoomParallax />
      </div>
      <HorizontalSection />
      <div className="w-full h-full">
        <ColorParallax />
      </div>
      <div className="h-[100vh] w-full bg-black" id="contact">
        <ContactMe />
      </div>
    </div>
  );
}
