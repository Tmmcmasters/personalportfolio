"use client"

import { Button, Card, CardBody, CardHeader, Image, Input, Link, Textarea, Tooltip } from "@nextui-org/react"
import { useRef, useState } from "react"
import { CreateContact } from "./contactmeserver"
import toast from "react-hot-toast"
import { motion } from "framer-motion";
import GithubLogo from '/public/github-mark.svg'
import LinkedInLogo from '/public/LI-In-Bug.png'

export default function ContactMe() {

    const [EmailInvalid, setEmailInvalid] = useState<boolean>(false)
    const [EmailErrorMessage, setEmailErrorMessage] = useState<string>("")
    const [FirstNameInvalid, setFirstNameInvalid] = useState<boolean>(false)
    const [FirstNameErrorMessage, setFirstNameErrorMessage] = useState<string>("")

    const [submitDisabled, setSubmitDisabled] = useState<boolean>(false)

    const [phoneNumberInput, setPhoneNumberInput] = useState<string>("")

    const ref = useRef<HTMLDivElement>(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const ROTATION_RANGE = 8;
    const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;
    
    const handleMouseMove = (e: any) => {
        if (!ref.current ) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

        const rY = mouseX / width - HALF_ROTATION_RANGE;
        const rX = mouseY / height - HALF_ROTATION_RANGE;

        setRotateX(rX);
        setRotateY(rY);
    }

    const handleMouseLeave = () => {
        if (!ref.current ) return;

        setRotateX(0);
        setRotateY(0);
    }

    const handleInput = (e: any) => {
        const formattedPhoneNumber = formatPhoneNumber(e.target.value);
        setPhoneNumberInput(formattedPhoneNumber);
    }

    function formatPhoneNumber(value: string) {

        if (!value) {
            return value;
        }
        const phoneNumber = value.replace(/[^\d]/g, "");
        const phoneNumberLength = phoneNumber.length;
        if (phoneNumberLength < 4) {
            return phoneNumber;
        }
        if (phoneNumberLength < 7) {
            return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
        }
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
    }

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
            invalid = true
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setEmailInvalid(true)
            setEmailErrorMessage("Invalid email address")
            invalid = true
        }

        if (invalid) {
            setSubmitLoading(false)
            return
        }

        const result = CreateContact(formData)
        result.catch((error) => {
            toast.error(error.message)
            setSubmitLoading(false)
            return
        })
        result.then((data) => {
            toast.success("Successfully sent message! \n Thank you! \n I will get back to you as soon as possible")
            setSubmitLoading(false)
            setFormData({
                email: "",
                firstName: "",
                lastName: "",
                company: "",
                phoneNumber: "",
                message: "",
            })
            setSubmitDisabled(true)
            return
        })


    }

    return (
        <div className="flex flex-col text-foreground px-10 my-24 gap-12" data-theme="dark">
            <h1 className="text-5xl h-20 self-center">Thank you for visiting!</h1>
            <div className="flex flex-col justify-center items-center " >
                <motion.div
                    ref={ref}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        transformStyle: "preserve-3d",
                    }}
                    animate={{
                        rotateX: rotateX,
                        rotateY: rotateY,
                    }}
                    className="w-fit h-fit flex justify-center items-center"
                    >
                <Card style={
                    {
                        transform: "translateZ(100px)",
                        transformStyle: "preserve-3d",
                    }
                } 
                className="h-fit w-[90vw] max-w-[500px] bg-black border-1 border-foreground-200 shadow-2xl shadow-foreground-500/20" isBlurred>
                    <CardHeader
                        className="flex justify-between items-center"
                    >
                        <h1 className="text-2xl font-semibold">
                            Contact Me:
                        </h1>
                        <div className="flex justify-center items-center gap-4">
                        <Tooltip closeDelay={100} content="Go to the Github" className="text-foreground sticky">
                                        <Button variant="faded"  className="!bg-white !border-0" as={Link} href="https://github.com/Tmmcmasters/" target="_blank" aria-label="Timothy's Github">
                                            <Image
                                                src={GithubLogo.src}
                                                alt="Github Logo"
                                                removeWrapper
                                                isBlurred
                                                className="w-9 h-9"
                                            />
                                        </Button>
                                    </Tooltip>
                                    <Tooltip closeDelay={100} content="Go to the LinkedIn" className="text-foreground sticky">
                                        <Button  className="bg-transparent !border-0" as={Link} href="https://www.linkedin.com/in/timothy-mcmasters/" target="_blank"  aria-label="Timothy's LinkedIn">
                                            <Image
                                                src={LinkedInLogo.src}
                                                alt="Linkedin Logo"
                                                removeWrapper
                                                isBlurred
                                                className="w-11 h-9 rounded-none"
                                            />
                                        </Button>
                                    </Tooltip>
                        </div>
                    </CardHeader>
                    <CardBody className="flex flex-col justify-start items-center w-full gap-5">
                        <Input
                        
                        label="Email" variant="bordered" type="email" isRequired isInvalid={EmailInvalid} errorMessage={EmailErrorMessage} onValueChange={(e) => {
                            setFormData({ ...formData, email: e })
                            if (e != "") {
                                setEmailInvalid(false)
                                setEmailErrorMessage("")
                            }
                        }} />
                        <div className="flex justify-between items-center gap-5 w-full">
                            <Input label="First Name" type="text" variant="bordered" isRequired isInvalid={FirstNameInvalid} errorMessage={FirstNameErrorMessage} onValueChange={(e) =>{
                                setFormData({ ...formData, firstName: e })
                                if (e != "") {
                                    setFirstNameInvalid(false)
                                    setFirstNameErrorMessage("")
                                }
                             }} />
                            <Input label="Last Name" type="text" variant="bordered" onValueChange={(e) => setFormData({ ...formData, lastName: e })} />
                        </div>
                        <div className="flex justify-between items-center gap-5 w-full">
                            <Input label="Company" type="text" variant="bordered" onValueChange={(e) => setFormData({ ...formData, company: e })} />
                            <Input label="Phone Number" type="text" variant="bordered"
                                onChange={(e) => {
                                    handleInput(e);
                                    setFormData({ ...formData, phoneNumber: phoneNumberInput });

                                }} value={phoneNumberInput} />
                        </div>
                        <Textarea label="Message" type="text" variant="bordered" description="I do not share any of your information with anyone. For privacy reasons, I do not share my personal information on this site. Please feel to reach out to me through here or through other means like LinkedIn." onValueChange={(e) => setFormData({ ...formData, message: e })} />
                        <div className="w-full mt-5 ">
                            <Button className="w-full" disabled={submitDisabled} isLoading={SubmitLoading} variant="solid" size="lg" color="default"   onPressEnd={handleSubmit}>Submit</Button>
                        </div>
                    </CardBody>
                </Card>
                </motion.div>
            </div>
        </div>
    )
}