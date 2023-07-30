import { Container, Text } from "@pixi/react"
import { TextStyle } from "pixi.js"
import {mockImages} from "./services/mock-images"
import {generateCollage} from "./algos/collage"
import { Image } from "./Image"

export const MainWrapper = () => {

  //Generate Image Components Here

  //A. Justified Algo:
    //1. Get Max Width of Container
    //2. Set an established height for all images in row
    //3. Loop and get images until their cumulative width goes past max width
    //4. Reize image heights to be established height.
    //5. Move on to next row and repeat
  //B. Collage Algo:
    //1. Start at top left corner
    //2. Get a random image
    //3. Find 2 more images to append to bottom and right
    //3.1 Ensure that these images do not collide with another image (if so, abort)
    //4. Recurse onto these two images

  //TODO:
  //1. Configure Image Acquisition Service
  //2. Configure Algorithm
  //3. Run Algorithm with Service
  
  const getImages = mockImages;
  const algo = generateCollage;

  const images = algo(getImages)
  
  return (
    <Container>
      {images.map((image) => {
        console.log("IMAGE:", image)
        return image;
      })
      }
    </Container>
  )
}
