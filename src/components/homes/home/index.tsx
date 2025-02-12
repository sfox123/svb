import HeaderOne from "@/layouts/headers/HeaderOne";
import React from "react";
import HeroHomeOne from "./HeroHomeOne";
import FeatureHomeOne from "./FeatureHomeOne";
import AboutHomeOne from "./AboutHomeOne";
import GalleryHome from "./Gallery";
import CoursesHomeOne from "./CoursesHomeOne";
import Certified from "@/components/certified";
import ReviewHomeOne from "./ReviewHomeOne";
import FooterOne from "@/layouts/footers/FooterOne";

export default function HomeOne() {
  return (
    <>
      <HeaderOne />
      <HeroHomeOne />
      <Certified />
      <FeatureHomeOne />
      <AboutHomeOne />
      <CoursesHomeOne />
      {/* <GalleryHome /> */}
      <ReviewHomeOne />
      <FooterOne />
    </>
  );
}
