import React from "react";
import { Helmet } from "react-helmet-async";
import banner from "../images/banner.png";

const CustomHelmet = ({ title, url, image, description }) => {
  const generatedTitle =title ? title : "In A Pulse";
  const generatedDescription = description
    ? description
    : "A Fast Same Day Delivery!";
  const generatedImage = image ? image : banner;
  const generatedUrl = url ? url : "https://www.inapulse.com";
  return (
    <Helmet>
      <title>{generatedTitle?generatedTitle:"In A Pulse"}</title>
      <meta name="title" content={generatedTitle} />
      <meta name="description" content={generatedDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={generatedUrl} />
      <meta property="og:title" content={generatedTitle} />
      <meta property="og:description" content={generatedDescription} />
      <meta property="og:image" content={generatedImage} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={generatedUrl} />
      <meta property="twitter:title" content={generatedTitle} />
      <meta property="twitter:description" content={generatedDescription} />
      <meta property="twitter:image" content={generatedUrl} />
    </Helmet>
  );
};

export default CustomHelmet;
