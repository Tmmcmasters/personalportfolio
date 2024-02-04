import React from "react"
import { Image } from "@nextui-org/react"
import  CurveArrow  from "/public/arrow.svg"
import FianceAndIImage from "/public/fiance-and-i.jpg"
import NextImage from "next/image"

export default function FianceAndI() {
    return (
        <div >
            
            <Image
                            src={FianceAndIImage.src}
                            alt="Picture of my fiance and I"
                            width={300}
                            height={300}
                            placeholder="blur"
                            isBlurred
                        >
                            
                        </Image>
        </div>
    )
}