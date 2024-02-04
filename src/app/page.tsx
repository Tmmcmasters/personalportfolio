"use client"

import React, { useEffect } from "react";
import { Card, CardBody, CardFooter, CardHeader, Divider } from "@nextui-org/react";
import ZoomParallax from "./(components)/ZoomParallax/zoomparallax";
import Lenis from "@studio-freight/lenis/types";
import HeroSection from "./(components)/heroSection";

export default function Home() {



  return (
    <div className=" flex flex-col justify-center items-center bg-background ">
      <HeroSection />
      <div className="w-full h-full">
        <ZoomParallax />
      </div>
      <div className="w-full h-[100vh] bg-primary-200">
          
      </div>

    </div>
  );
}
