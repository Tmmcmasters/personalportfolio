import React from "react"
import { Image } from "@nextui-org/react"
import  CurveArrow  from "/public/arrow.svg"
import FianceAndIImage from "/public/fiance-and-i.jpg"
import NextImage from "next/image"

export default function FianceAndI() {
    return (
        <div >
            <Image 
                                src={CurveArrow.src}
                                alt="Arrow pointing to me"
                                width={65}
                                height={65}
                                placeholder="blur"
                                className=" fill-background stroke-foreground absolute rotate-[20deg] translate-x-[9vh] translate-y-[.5rem]  z-20"
                            />
            <Image
                            as={NextImage}
                            src={FianceAndIImage.src}
                            alt="Picture of my fiance and I"
                            width={300}
                            height={300}
                            
                            placeholder="blur"
                            blurDataURL={FianceAndIImage.src}
                            isBlurred
                        >
                            
                        </Image>
        </div>
    )
}