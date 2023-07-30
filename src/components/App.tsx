import "./styles.css";
import { Renderer } from "./Renderer";
import React from "react";


const TestImage = () => {
  const src = "https://e-shuushuu.net/images/2023-07-30-1098931.jpeg"
  const options = {
    headers: {
      "Accept" : "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
      "Access-Control-Allow-Origin": "*"
    }
  }
  const [image, setImage] = React.useState<string>("")

  const getImage = async () => {
    const response = await fetch(src, options)
    const blob = await response.blob()
    const url = URL.createObjectURL(blob)
    setImage(url);
  }

  getImage()

  const newThing = image;

  return <img src={newThing} />

}


export const App = () => {
  return (
    <>
      <TestImage />
      <Renderer />
    </>
  );
};
