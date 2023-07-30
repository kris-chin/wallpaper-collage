import { Stage } from "@pixi/react";
import {MainWrapper} from "../core/MainWrapper";

export const Renderer = () => {
  //The vision is to have this be our main component to handle all of our PIXI related logic
  //The logic itself will be stored within /core

  //TODO: detect live resizes and resize the canvas element accordingly
  const width = window.innerWidth;
  const height = window.innerHeight;

  return (
    <Stage width={width} height={height}>
      <MainWrapper/>
    </Stage>
  );
};
