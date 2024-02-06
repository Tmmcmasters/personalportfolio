"use client"

import { Button, Card, CardBody, CardHeader, Input, Textarea } from "@nextui-org/react"
import { useState } from "react"


export default function ContactMe() {

    const [EmailInvalid, setEmailInvalid] = useState<boolean>(false)
    const [EmailErrorMessage, setEmailErrorMessage] = useState<string>("")
    const [FirstNameInvalid, setFirstNameInvalid] = useState<boolean>(false)
    const [FirstNameErrorMessage, setFirstNameErrorMessage] = useState<string>("")

    const [SubmitLoading, setSubmitLoading] = useState<boolean>(false)
    

    return (
        <div className="flex flex-col text-white px-10 my-24 gap-12">
            <h1 className="text-5xl">Thank you for visiting!</h1>
            <div className="flex flex-col justify-center items-center">
                <Card className="h-fit w-[90vw] max-w-[500px] bg-black border-1  text-white" isBlurred>
                    <CardHeader>
                        <h1 className="text-2xl font-semibold">
                            Contact Me:
                        </h1>
                    </CardHeader>
                    <form >
                        <CardBody className="flex flex-col justify-start items-center w-full gap-5">
                            <Input label="Email" variant="bordered"  type="email"  isRequired isInvalid={EmailInvalid} errorMessage={EmailErrorMessage}/>
                            <div className="flex justify-between items-center gap-5 w-full">
                            <Input label="First Name" type="text" variant="bordered" isRequired  isInvalid={FirstNameInvalid} errorMessage={FirstNameErrorMessage}/>
                            <Input label="Last Name" type="text" variant="bordered"  />
                            </div>
                            <div className="flex justify-between items-center gap-5 w-full">
                            <Input label="Company" type="text" variant="bordered" />
                            <Input label="Phone Number" type="telephone" variant="bordered"  />
                            </div>
                            <Textarea label="Message" type="text" variant="bordered" description="I do not share any of your information with anyone. For privacy reasons, I do not share my personal information on this site. Please feel to reach out to me through here or through other means like LinkedIn."/>
                            <div className="w-full mt-5 ">
                            <Button type="submit" className="w-full" isLoading={SubmitLoading} variant="solid" size="lg" color="default" >Submit</Button>
                            </div>
                        </CardBody>
                    </form>
                </Card>
            </div>
        </div>
    )
}