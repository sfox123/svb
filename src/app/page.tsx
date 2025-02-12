import HomeOne from "@/components/homes/home";
import React from "react";

import type { Metadata } from "next";
import Wrapper from "@/layouts/Wrapper";
export const metadata: Metadata = {
  title: "SVB - Driving School",
  description:
    "SVB Driving School is a driving school in the heart of the city of Canada. We offer driving lessons, intensive driving courses, and driving instructor training.",
};

export default function index() {
  return (
    <Wrapper>
      <HomeOne />
    </Wrapper>
  );
}
