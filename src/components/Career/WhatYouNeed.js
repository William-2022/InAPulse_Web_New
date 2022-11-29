import React from "react";

import Section from "../general/Section";
import vinfo from "../../images/v-info.svg";
import proof from "../../images/proof.svg";
import license from "../../images/licence.svg";
import bkcheck from "../../images/bk-check.svg";
import ResponsiveSection from "../../layout/ResponsiveSection";
import LabeledImage from "../general/LabeledImage";

function WhatYouNeed() {
  const list = [
    { label: "Drivers License", svg: license },
    { label: "Vehicle Information", svg: vinfo },
    { label: "Work Eligibility", svg: proof },
    { label: "Background Check", svg: bkcheck },
  ];

  return (
    <ResponsiveSection>
      <Section title="What you'll need">
        <LabeledImage color="#003579" list={list} perRow={4} />
      </Section>
    </ResponsiveSection>
  );
}

export default WhatYouNeed;
