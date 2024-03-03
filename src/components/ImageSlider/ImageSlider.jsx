import { Slide } from "react-slideshow-image";
import { Box, Image } from "@chakra-ui/react";
import "./ImageSlider.css";
import "react-slideshow-image/dist/styles.css";

export const ImageSlider = ({ imageList }) => {
  const renderImages = () => {
    return imageList.map((imageLink) => {
      return (
        <Image
          key={imageLink}
          src={imageLink}
          boxShadow={"xl"}
          borderRadius={"xl"}
        />
      );
    });
  };

  const slider = (
    <Slide infinite={false} arrows={imageList.length > 1} autoplay={false}>
      {renderImages(imageList)}
    </Slide>
  );

  return (
    <>
      <Box w={350}>{slider}</Box>
    </>
  );
};
