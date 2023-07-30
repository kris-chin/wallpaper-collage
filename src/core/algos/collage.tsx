import { Image } from "../Image";

//Generates images in a collage order
//Returns an array of <Image>s with certain x and y cooridnates that match a collage
export const generateCollage = (getImages: () => any[]) => {
  const images = getImages();
  //1. Start at top left corner
  //2. Get a random image
  //3. Find 2 more images to append to bottom and right
  //3.1 Ensure that these images do not collide with another image (if so, abort)
  //4. Recurse onto these two images

  //TODO: fix CORS error when plugging in href as imagesource
  return images.map((href) => {
    return <Image x={0} y={0} image={href} />;
  });
};
