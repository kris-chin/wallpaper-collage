import { Sprite } from "@pixi/react"

//Hello there

export type ImageProps = {
  x: number;
  y: number;
  image: any;
}

export const Image = (props: ImageProps) => {
  const { x, y, image } = props;

  //TODO: how to fix CORS for this
  //Turns out: the vision of bypassing CORS client-side from a file will never work. headers must be sent from a server
  return (
    <Sprite
      x={x} y={y}
      image={image}
    />
  )
}
