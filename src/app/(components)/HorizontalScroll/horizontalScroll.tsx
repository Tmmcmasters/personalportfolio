'use client'

import { Card, CardBody, CardFooter, CardHeader, Image } from "@nextui-org/react"
import { motion, useScroll, useTransform } from "framer-motion"
import StarBankLogo from '/public/star-financial-bank.svg'
import React from "react"

export default function HorizontalSection() {
    const container = React.useRef(null)
    const { scrollYProgress } = useScroll({
        target: container,
    })

    const transformX = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"])

    return (
        <div ref={container} className="w-full h-[600vh]  relative ">
            <motion.div
                style={{ x: transformX }}
                className="w-[600vw] h-[100vh] bg-gradient-to-r from-primary-500 via-warning-300 to-secondary-500 sticky top-0 flex flex-row justify-start pl-[45vw] items-center gap-5
            ">
                <Card className="py-4" classNames={{
                    base: 'bg-background bg-opacity-20 backdrop-blur-md h-[60vh] w-[80vw] max-w-[50rem] ',
                }} >
                    <CardHeader className=" flex-row items-center justify-between align-middle">
                        <h1 className="text-3xl lg:text-5xl  font-bold">
                            STAR Bank
                            
                        </h1>

                                <Image
                                    src={StarBankLogo.src}
                                    alt="Star Bank Logo"
                                    width={100}
                                    height={100}
                                    />
                    </CardHeader>

                    <CardBody className="">
                        <p className="text-2xl">
                            
                        </p>
                    </CardBody>
                    <CardFooter className="backdrop-blur-md rounded-lg">
                    
                    </CardFooter>
                </Card>


            </motion.div>

        </div>
    )
}