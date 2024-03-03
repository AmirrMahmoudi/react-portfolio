import "react-slideshow-image/dist/styles.css";
import { useState } from "react";
import {
  Box,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import { Slide } from "react-slideshow-image";

export const ImageSlider = ({ imageList }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModalSlider = (imgIndex) => {
    setCurrentImageIndex(imgIndex);
    setIsModalOpen(true);
  };

  const renderImages = () => {
    return imageList.map((imageLink, i) => {
      return (
        <Image
          onClick={() => openModalSlider(i)}
          key={imageLink}
          src={imageLink}
          boxShadow={"xl"}
          borderRadius={"xl"}
        />
      );
    });
  };

  const slider = (
    <Slide
      defaultIndex={currentImageIndex}
      infinite={false}
      arrows={imageList.length > 1}
      autoplay={false}
    >
      {renderImages(imageList)}
    </Slide>
  );

  const modalSlider = (
    <Modal
      bg="transparent"
      size={"5xl"}
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
    >
      <ModalOverlay />
      <ModalContent bg="transparent" boxShadow={"none"}>
        <ModalCloseButton zIndex={1} bg={"white"} />
        <ModalBody>{slider}</ModalBody>
      </ModalContent>
    </Modal>
  );

  return (
    <>
      <Box w={350}>{slider}</Box>
      {modalSlider}
    </>
  );
};
