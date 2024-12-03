import React from "react";
import ImageCarousel from "./ImageCarousel";
import "./style.css";

const images = [
  "https://via.placeholder.com/600x300?text=Slide+1",
  "https://via.placeholder.com/600x300?text=Slide+2",
  "https://via.placeholder.com/600x300?text=Slide+3",
];
const ImageCarouselPage = () => {
  return <ImageCarousel images={images} />;
};

export default ImageCarouselPage;
