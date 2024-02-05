import { motion, useInView } from "framer-motion"
import { useRef } from "react"


export default function HeroSection() {

    const loadIn = useRef(null)
    const isInView = useInView(loadIn, { once: false })
    
    

    return (
        <div className="flex flex-col justify-center items-center bg-opacity-40  h-fit w-full pl-10 pr-10 pt-12 pb-12 gap-5 shadow-lg">
            <motion.h1
             ref={loadIn}
             style={
                { opacity: isInView ? 1 : 0 ,
                    transition: 'all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s',
                    transform: isInView ? "translateX(0)" : "translateX(-30%)"
                }
            }
             className="text-5xl lg:text-9xl  font-bold text-foreground self-start transition-all duration-200">Hi,<br></br> I'm Timothy</motion.h1>
            <motion.p 
            ref={loadIn}
            style={
                {
                    opacity: isInView ? 1 : 0 ,
                    transition: 'all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s',
                    transform: isInView ? "translateX(0)" : "translateX(30%)"
                }
            }
            className="text-xl lg:text-3xl transition-all duration-200 self-end  w-2/3 lg:w-3/5 text-foreground">-- A Software Developer who is commited to making a difference...</motion.p>
        </div>
    )
}