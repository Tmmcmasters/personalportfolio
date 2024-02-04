import React from "react";
import { Card, CardBody, CardFooter, CardHeader, Divider } from "@nextui-org/react";

export default function Home() {
  return (
    <div className=" flex flex-col justify-center items-center bg-background ">
      <div className="flex flex-col justify-center items-center bg-opacity-40  h-fit w-full pl-10 pr-10 pt-12 pb-12 gap-5 shadow-lg">
        <h1 className="text-5xl lg:text-9xl  font-bold text-foreground self-start transition-all duration-200">Hi,<br></br> I'm Timothy</h1>
        <p className="text-xl lg:text-3xl transition-all duration-200 self-end  w-2/3 lg:w-3/5 text-foreground">-- A Software Developer who is commited to pushing tech forward...</p>
      </div>
      <div className="flex flex-row bg-secondary-400 h-[500px] w-full transition-all duration-200 shadow-lg">

      </div>
      <div className="w-28 h-28">

      </div>
      <Card>
        <CardBody>
          asdfkl;jjkl;asdfkl;j
        </CardBody>
      </Card>
    </div>
  );
}
