"use client";
import { Gallery } from "react-grid-gallery";

const images = [
  {
    src: "./assets/img/gallery/0.jpg",
    width: 320,
    height: 274,
    caption: "1",
  },
  {
    src: "./assets/img/gallery/1.jpg",
    width: 320,
    height: 274,
    caption: "2",
  },
  {
    src: "./assets/img/gallery/2.jpg",
    width: 220,
    height: 274,
    caption: "3",
  },
  {
    src: "./assets/img/gallery/3.jpg",
    width: 220,
    height: 274,
    caption: "4",
  },
  {
    src: "./assets/img/gallery/4.jpg",
    width: 320,
    height: 274,
    caption: "5",
  },
  {
    src: "./assets/img/gallery/5.jpg",
    width: 220,
    height: 274,
    caption: "6",
  },
  {
    src: "./assets/img/gallery/6.jpg",
    width: 220,
    height: 274,
    caption: "7",
  },
  {
    src: "./assets/img/gallery/7.jpg",
    width: 320,
    height: 274,
    caption: "8",
  },
  {
    src: "./assets/img/gallery/8.jpg",
    width: 220,
    height: 274,
    caption: "9",
  },
];

const GalleryHome = () => {
  return (
    <div>
      <Gallery images={images} />
    </div>
  );
};

export default GalleryHome;
