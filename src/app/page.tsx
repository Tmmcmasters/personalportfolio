"use client"

import React, { useEffect } from "react";
import { Card, CardBody, CardFooter, CardHeader, Divider } from "@nextui-org/react";
import ZoomParallax from "./(components)/ZoomParallax/zoomparallax";
import Lenis from "@studio-freight/lenis/types";
import HeroSection from "./(components)/heroSection";
import HorizontalSection from "./(components)/HorizontalScroll/horizontalScroll";

export default function Home() {



  return (
    <div className=" flex flex-col justify-center items-center bg-background  overflow-x-clip">
      <HeroSection />
      <div className="w-full h-full">
        <ZoomParallax />
      </div>
      <HorizontalSection />
      <div className="w-full h-[50vh] bg-green-400">

      </div>
    </div>
  );
}
