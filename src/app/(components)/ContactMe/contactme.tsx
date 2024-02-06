"use client"

import { Button, Card, CardBody, CardHeader, Input, Textarea } from "@nextui-org/react"
import { useRef, useState } from "react"
import { CreateContact } from "./contactmeserver"


export default function ContactMe() {

    const [EmailInvalid, setEmailInvalid] = useState<boolean>(false)
    const [EmailErrorMessage, setEmailErrorMessage] = useState<string>("")
    const [FirstNameInvalid, setFirstNameInvalid] = useState<boolean>(false)
    const [FirstNameErrorMessage, setFirstNameErrorMessage] = useState<string>("")

    interface formData {
        email: string
        firstName: string
        lastName: string | undefined | null
        company: string | undefined | null
        phoneNumber: string | undefined | null
        message: string | undefined | null
    }

    const [formData, setFormData] = useState<formData>({
        email: "",
        firstName: "",
        lastName: "",
        company: "",
        phoneNumber: "",
        message: "",
    })


    const [SubmitLoading, setSubmitLoading] = useState<boolean>(false)


    function handleSubmit() {
        console.log(formData)
        setSubmitLoading(true)
        setEmailErrorMessage("")
        setFirstNameErrorMessage("")
        setEmailInvalid(false)
        setFirstNameInvalid(false)
        let invalid = false;
        if (formData.firstName === "") {
            setFirstNameInvalid(true)
            setFirstNameErrorMessage("First Name is required")
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setEmailInvalid(true)
            setEmailErrorMessage("Invalid email address")
        }
        if (invalid) {
            setSubmitLoading(false)
            return
        }

        const result = CreateContact(formData)
        result.catch((error) => {

            setSubmitLoading(false)
            return
        })
        result.then((data) => {
            
            setSubmitLoading(false)
            return
        })


    }

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
                    <CardBody className="flex flex-col justify-start items-center w-full gap-5">
                        <Input label="Email" variant="bordered" type="email" isRequired isInvalid={EmailInvalid} errorMessage={EmailErrorMessage} onValueChange={(e) => setFormData({ ...formData, email: e })} />
                        <div className="flex justify-between items-center gap-5 w-full">
                            <Input label="First Name" type="text" variant="bordered" isRequired isInvalid={FirstNameInvalid} errorMessage={FirstNameErrorMessage} onValueChange={(e) => setFormData({ ...formData, firstName: e })} />
                            <Input label="Last Name" type="text" variant="bordered" onValueChange={(e) => setFormData({ ...formData, lastName: e })} />
                        </div>
                        <div className="flex justify-between items-center gap-5 w-full">
                            <Input label="Company" type="text" variant="bordered" onValueChange={(e) => setFormData({ ...formData, company: e })} />
                            <Input label="Phone Number" type="telephone" variant="bordered" onValueChange={(e) => setFormData({ ...formData, phoneNumber: e })} />
                        </div>
                        <Textarea label="Message" type="text" variant="bordered" description="I do not share any of your information with anyone. For privacy reasons, I do not share my personal information on this site. Please feel to reach out to me through here or through other means like LinkedIn." onValueChange={(e) => setFormData({ ...formData, message: e })} />
                        <div className="w-full mt-5 ">
                            <Button className="w-full" isLoading={SubmitLoading} variant="solid" size="lg" color="default" onClick={handleSubmit}>Submit</Button>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}