import React from "react";
import { Card, CardBody, CardFooter, CardHeader, Divider } from "@nextui-org/react";

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center">
        
    </div>

    <div className=" flex justify-center items-center">
    <Card>
      <CardHeader>
        <p className="text-large text-defualt-800 font-bold">Card Header</p>
      </CardHeader>
      <Divider />
      <CardBody>
        <p className="text-medium text-default-800">Card Body</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <p className="text-small text-default-500">Card Footer</p>
      </CardFooter>
    </Card>
    </div>
  );
}
