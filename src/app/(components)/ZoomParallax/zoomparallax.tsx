'use client'

import React from "react"
import { Image } from "@nextui-org/react"
import NextImage from "next/image"
import DotnetImage from "/public/dotnet-logo.svg"
import TSLogo from "/public/ts-logo-256.svg"
import HTMLLogo from '/public/HTML5_Logo.svg'
import TailwindLogo from '/public/tailwind.svg'
import CssLogo from '/public/css.svg'
import CSharpLogo from '/public/csharp.svg'
import SqlServerLogo from '/public/sqlServer.svg'
import BoostrapLogo from '/public/bootstrap-logo.svg'
import QwikLogo from 'public/qwik-logo.svg'
import NextLogo from 'public/next.svg'
import FianceAndIImage from "/public/fiance-and-i.jpg"

import { useScroll, useTransform, motion } from "framer-motion"

export default function ZoomParallax() {

    const container = React.useRef(null)
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4])
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5])
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6])
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8])
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9])

    const pictures = [
        {
            src: FianceAndIImage.src,
            scale: scale4,
            alt: "my fiance and I",
            top: null,
            left: null,
            width: 300,
            height: 300
        },
        {
            src: TSLogo.src,
            scale: scale6,
            alt: "typescript logo",
            top: "top-[-25vh]",
            left: "left-[20vw]",
            width: 150,
            height: 150
        },
        {
            src: DotnetImage.src,
            scale: scale5,
            alt: "dotnet logo",
            top: "top-[5vh]",
            left: "left-[30vw]",
            width: 100,
            height: 100
        },
        {
            src: HTMLLogo.src,
            scale: scale8,
            alt: "HTML logo",
            top: "top-[25vh]",
            left: "left-[15vw]",
            width: 100,
            height: 100
        },
        {
            src: TailwindLogo.src,
            scale: scale9,
            alt: "Tailwind logo",
            top: "top-[-20vh]",
            left: "left-[-20vw]",
            width: 100,
            height: 100
        },
        {
            src: CssLogo.src,
            scale: scale8,
            alt: "CSS logo",
            top: "top-[28vh]",
            left: "left-[-18vw]",
            width: 100,
            height: 100
        },
        {
            src: CSharpLogo.src,
            scale: scale5,
            alt: "C# logo",
            top: "top-[5vh]",
            left: "left-[-30vw]",
            width: 100,
            height: 100
        },
        {
            src: SqlServerLogo.src,
            scale: scale6,
            alt: "SQL Server logo",
            top: "top-[-35vh]",
            left: "left-[-5vw]",
            width: 100,
            height: 100
        },
        {
            src: BoostrapLogo.src,
            scale: scale9,
            alt: "Boostrap logo",
            top: "top-[25vh]",
            left: "left-[40rem]",
            width: 100,
            height: 100
        },
        {
            src: QwikLogo.src,
            scale: scale9,
            alt: "Qwik logo",
            top: "top-[-28vh]",
            left: "left-[-40rem]",
            width: 100,
            height: 100
        },
        {
            src: NextLogo.src,
            scale: scale9,
            alt: "Next.js logo",
            top: "top-[-28vh]",
            left: "left-[45rem]",
            width: 180,
            height: 180,
        }
    ]

    return (
        <div ref={container} className={`h-[300vh] relative `}>
            <div className={`sticky top-0 h-[100vh] bg-background overflow-hidden`}>
                
                {
                    pictures.map(({ src, scale, alt, top, left, width, height }, index) => {
                        return (
                            <motion.div key={index} style={{ scale: scale }} className={`w-full h-full absolute  flex justify-center items-center`}>
                                <div className={` relative flex justify-center items-center ${top} ${left} w-[25vw] h-[25vw]`}>
                                    <Image
                                        src={src}
                                        alt={alt}
                                        width={width}
                                        height={height}
                                        className="fill-foreground stroke-foreground "
                                        isBlurred
                                    />
                                </div>
                            </motion.div>
                        )
                    })
                }

            </div>
        </div>
    )
}