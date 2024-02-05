'use client'

import { Badge, Button, Card, CardBody, CardFooter, CardHeader, Image, Link, Tooltip } from "@nextui-org/react"
import { motion, useScroll, useTransform } from "framer-motion"
import StarBankLogo from '/public/star-financial-bank.svg'
import CSharpLogo from '/public/csharp.svg'
import DotnetImage from "/public/dotnet-logo.svg"
import SqlServerLogo from '/public/sqlServer.svg'
import HTMLLogo from '/public/HTML5_Logo.svg'
import BoostrapLogo from '/public/bootstrap-logo.svg'
import GithubLogo from '/public/github-mark.svg'
import QwikDaisyHomePage from '/public/QwikDaisyHomePage.png'
import QwikLogo from 'public/qwik-logo.svg'
import TailwindLogo from '/public/tailwind.svg'
import DaisyUILogo from '/public/daisyui.svg'



import React from "react"

export default function HorizontalSection() {
    const container = React.useRef(null)
    const { scrollYProgress } = useScroll({
        target: container,
    })

    const transformX = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"])

    return (
        <div ref={container} className="w-full h-[400vh]  relative ">
            <motion.div
                style={{ x: transformX }}
                className="w-[400vh] h-[100vh]   sticky top-0 bg-gradient-to-r from-black to-violet-950   flex flex-row justify-start pl-[25vw] items-center gap-96
                
            ">


                <Card className="w-96 bg-white bg-opacity-5 border-1 border-white text-white min-h-[60vh]"  >
                    <CardHeader className="flex flex-row justify-between items-center">
                        <div className="flex flex-col">
                            <h1 className="text-3xl">STAR Bank</h1>
                            <h2>Intern - Associate Developer</h2>
                        </div>
                        <h2>May 2023 <br></br>- Present</h2>

                    </CardHeader>
                    <CardBody>
                        <div className="w-90 h-44 brightness-110">
                            <a href="https://www.starfinancial.com/" target="_blank">
                                <Tooltip content="Go to STAR Bank's Website" className="text-foreground">

                                    <Image
                                        src={StarBankLogo.src}
                                        alt="Star Bank Logo"
                                        removeWrapper
                                        isBlurred
                                        className="border-1 border-white p-2 border-opacity-0 hover:border-opacity-100 
                                !transition-all !duration-250
                                "
                                    />
                                </Tooltip>
                            </a>
                        </div>
                        <p>- Developed and maintained full stack ASP.NET Core MVC web applications and their associated Web APIs.
                            <br></br>- Participated in requirements gathering, prototyping, database design,  development, and testing.
                            <br></br>- Utilized MS SQL Server for database management primarily through stored procedures.
                        </p>
                    </CardBody>
                    <CardFooter className="flex flex-row justify-around items-center">
                        <Image
                            src={CSharpLogo.src}
                            alt="C# Logo"
                            removeWrapper
                            isBlurred
                            className="w-10 h-10"
                        />
                        <Image
                            src={DotnetImage.src}
                            alt="Dotnet Logo"
                            removeWrapper
                            isBlurred
                            className="w-10 h-10"
                        />
                        <Image
                            src={SqlServerLogo.src}
                            alt="SQL Server Logo"
                            removeWrapper
                            isBlurred
                            className="w-10 h-10"
                        />
                        <Image
                            src={HTMLLogo.src}
                            alt="HTML Logo"
                            removeWrapper
                            isBlurred
                            className="w-10 h-10"
                        />
                        <Image
                            src={BoostrapLogo.src}
                            alt="Boostrap Logo"
                            removeWrapper
                            isBlurred
                            className="w-12 h-10"
                        />
                    </CardFooter>
                </Card>

                <Badge content="In Progress" color="warning" variant="solid" className="border-0 -translate-y-9">
                    <Card className="w-96 bg-secondary bg-opacity-5 border-1 border-secondary text-secondary-foreground min-h-[60vh]">
                        <CardHeader className="flex flex-row justify-between items-center ">
                            <h1 className="text-3xl  bg-gradient-to-r from-purple-500   to-[#FE9A03]  text-transparent bg-clip-text font-bold">qwikdaisy</h1>
                            <Tooltip content="Go to the Github" className="text-foreground">
                                <Button isIconOnly variant="solid" color="default" as={Link} href="https://github.com/Tmmcmasters/DaisyQwik" target="_blank" aria-label="Github">
                                    <Image
                                        src={GithubLogo.src}
                                        alt="Github Logo"
                                        removeWrapper
                                        isBlurred
                                        className="w-9 h-9"
                                    />
                                </Button>
                            </Tooltip>
                        </CardHeader>
                        <CardBody>
                            <div className="w-90 ">
                                <a href="https://qwikdaisy.netlify.app/" target="_blank">
                                    <Tooltip content="Go to qwikdaisy's Home Page" className="text-foreground">
                                    <Image
                                        src={QwikDaisyHomePage.src}
                                        alt="Qwik Daisy Home Page"
                                        removeWrapper
                                        isBlurred
                                        className="border-1 border-secondary border-opacity-0 hover:border-opacity-100"
                                    />
                                    </Tooltip>
                                </a>
                            </div>
                            <p>- A UI Library based off of Daisy UI for the Qwik Web Framework </p>
                            <p>- Currently in active development and potentially working with contributors of the Qwik Web Framework</p>
                        </CardBody>
                        <CardFooter className="flex flex-row justify-around items-center">

                            <Image
                                src={QwikLogo.src}
                                alt="Qwik Logo"
                                removeWrapper
                                isBlurred
                                className="w-10 h-10"
                            />
                            <Image 
                                src={TailwindLogo.src}
                                alt="Tailwind Logo"
                                removeWrapper
                                isBlurred
                                className="w-10 h-10"
                            />
                            <Image 
                                src={HTMLLogo.src}
                                alt="HTML Logo"
                                removeWrapper
                                isBlurred
                                className="w-10 h-10"
                            />
                            <Image 
                                src={DaisyUILogo.src}
                                alt="Daisy UI Logo"
                                removeWrapper
                                isBlurred
                                className="w-10 h-10"
                            />
                        </CardFooter>
                    </Card>
                </Badge>



            </motion.div>

        </div>
    )
}