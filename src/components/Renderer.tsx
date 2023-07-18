import { Stage, Container, Text } from '@pixi/react'

export const Renderer = () => {

  //The vision is to have this be our main component to handle all of our PIXI related logic
  //The logic itself will be stored within /core

  return (
    <Stage>
      <Container x={400} y={330}>
        <Text text="yo" anchor={{x:0.5, y: 0.5}}/>
      </Container>
    </Stage>
  )
}
