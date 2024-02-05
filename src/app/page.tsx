"use client"

import React, { useEffect, useRef } from "react";
import { Card, CardBody, CardFooter, CardHeader, Divider } from "@nextui-org/react";
import ZoomParallax from "./(components)/ZoomParallax/zoomparallax";
import Lenis from "@studio-freight/lenis/types";
import HeroSection from "./(components)/heroSection";
import HorizontalSection from "./(components)/HorizontalScroll/horizontalScroll";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

export default function Home() {

  const container = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  const loadIn = useRef(null)
  const isInView = useInView(loadIn, { once: false })


  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 10])
  const scale2 = useTransform(scrollYProgress, [0, 1], [1, 15])
  const scale3 = useTransform(scrollYProgress, [0, 1], [1, 20])
  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 25])
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 30])
  const scaleBlack = useTransform(scrollYProgress, [.8, 1], [0, 45])
  const scaleDarkGrey = useTransform(scrollYProgress, [.7, 1], [0, 50])
  
  const scaleTwo = useTransform(scrollYProgress, [.1, 1], [1, 25])
  const scaleTwo1 = useTransform(scrollYProgress, [.2, 1], [1, 30])
  const scaleTwo2 = useTransform(scrollYProgress, [.3, 1], [1, 35])
  const scaleTwo3 = useTransform(scrollYProgress, [.4, 1], [1, 40])
  const scaleTwo4 = useTransform(scrollYProgress, [.5, 1], [1, 45])
  const opacityScale = useTransform(scrollYProgress, [0, 1], [0, 1])
  

  const color = [
    {
      color: 'bg-red-400',
      shadowColor: 'shadow-red-400',
      width: 'w-[18vw]',
      height: 'h-[18vw]',
      scale: scale5
    },
    {
      color: 'bg-blue-400',
      shadowColor: 'shadow-blue-400',
      width: 'w-[17vw]',
      height: 'h-[15vw]',
      scale: scale4
    },
    {
      color: 'bg-green-400',
      shadowColor: 'shadow-green-400',
      width: 'w-[15vw]',
      height: 'h-[16vw]',
      scale: scale3
    },
    {
      color: 'bg-purple-400',
      shadowColor: 'shadow-purple-400',
      width: 'w-[15vw]',
      height: 'h-[15vw]',
      scale: scale2
    },
    {
      color: 'bg-pink-400',
      shadowColor: 'shadow-pink-400',
      width: 'w-[12vw]',
      height: 'h-[12vw]',
      scale: scale1
    },
    {
      color: 'bg-yellow-400',
      shadowColor: 'shadow-yellow-400',
      width: 'w-[10vw]',
      height: 'h-[10vw]',
      scale: scale5
    },
    {
      color: 'bg-orange-400',
      shadowColor: 'shadow-orange-400',
      width: 'w-[5vw]',
      height: 'h-[5vw]',
      scale: scaleTwo4
    },
    {
      color: 'bg-red-500',
      shadowColor: 'shadow-red-500',
      width: 'w-[5vw]',
      height: 'h-[5vw]',
      scale: scaleTwo4
    },
    {
      color: 'bg-blue-500',
      shadowColor: 'shadow-blue-500',
      width: 'w-[5vw]',
      height: 'h-[5vw]',
      scale: scaleTwo3
    },
    {
      color: 'bg-red-500',
      shadowColor: 'shadow-red-500',
      width: 'w-[5vw]',
      height: 'h-[5vw]',
      scale: scaleTwo1
    },
    {
      color: 'bg-purple-500',
      shadowColor: 'shadow-purple-500',
      width: 'w-[5vw]',
      height: 'h-[5vw]',
      scale: scaleTwo
    },
    {
      color: 'bg-gray-950',
      shadowColor: 'shadow-black/50',
      width: 'w-[5vw]',
      height: 'h-[5vw]',
      scale: scaleDarkGrey
    },
    {
      color: 'bg-black',
      shadowColor: 'shadow-black/50',
      width: 'w-[5vw]',
      height: 'h-[5vw]',
      scale: scaleBlack
    }
  ]

  return (
    <div className=" flex flex-col justify-center items-center bg-background  overflow-x-clip">
      <HeroSection />
      <div className="w-full h-full">
        <ZoomParallax />
      </div>
      <HorizontalSection />
      <div className="w-full h-full">
        <div ref={container} className="h-[500vh] relative " id="contact">
          <div className="sticky top-0 h-[100vh] bg-background overflow-hidden flex justify-center items-center ">
            {
              color.map((item, index) => (
                <motion.div 
                ref={loadIn}

              className={`${item.color} ${item.width} ${item.height} absolute flex  shadow-sm rounded-full
              ${item.shadowColor}
              `}
              key={index}
              style={{
                scale: item.scale,
                opacity: isInView ? opacityScale : 0,
                transition: 'opacity .2s cubic-bezier(0.17, 0.55, 0.55, 1), '
              }}
            >
            </motion.div>
              ))
            }
            
          </div>
        </div>
      </div>
      <div className="h-[100vh] w-full bg-black">

      </div>
    </div>
  );
}
