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
import { useScroll, useTransform, motion } from "framer-motion"
import FianceAndI from "./fianceAndI"

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
            src: TSLogo.src,
            scale: scale6,
            alt: "typescript logo",
            top: "top-[-25vh]",
            left: "left-[25vh]",
        },
        {
            src: DotnetImage.src,
            scale: scale5,
            alt: "dotnet logo",
            top: "top-[5vh]",
            left: "left-[40vh]",
        },
        {
            src: HTMLLogo.src,
            scale: scale8,
            alt: "HTML logo",
            top: "top-[25vh]",
            left: "left-[15vh]",
        },
        {
            src: TailwindLogo.src,
            scale: scale9,
            alt: "Tailwind logo",
            top: "top-[-20vh]",
            left: "left-[-30vh]",
        },
        {
            src: CssLogo.src,
            scale: scale8,
            alt: "CSS logo",
            top: "top-[28vh]",
            left: "left-[-20vh]",
        },
        {
            src: CSharpLogo.src,
            scale: scale5,
            alt: "C# logo",
            top: "top-[5vh]",
            left: "left-[-40vh]",
        },
        {
            src: SqlServerLogo.src,
            scale: scale6,
            alt: "SQL Server logo",
            top: "top-[-35vh]",
            left: "left-[-5vh]",
        }
    ]

    return (
        <div ref={container} className={`h-[300vh] relative `}>
            <div className={`sticky top-0 h-[100vh] bg-background overflow-hidden`}>
                <motion.div style={{ scale: scale4 }}  className={`w-full h-full absolute top-0 flex justify-center items-center`}>
                    <div className={`w-[25vw] h-[25vw] relative flex justify-center items-center`}>

                        <FianceAndI />
                    </div>
                </motion.div>
                {
                    pictures.map(({ src, scale, alt, top, left }, index) => {
                        return (
                            <motion.div key={index} style={{ scale: scale }} className={`w-full h-full absolute  flex justify-center items-center`}>
                                <div className={`w-[25vw] h-[25vw] relative flex justify-center items-center ${top} ${left}`}>
                                    <Image
                                        as={NextImage}
                                        src={src}
                                        alt={alt}
                                        width={150}
                                        height={150}
                                        placeholder="blur"
                                        className="fill-foreground stroke-foreground "
                                        blurDataURL={src}
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