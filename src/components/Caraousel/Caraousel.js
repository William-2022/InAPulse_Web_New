import React from "react";
import { Box } from "@mui/system";
import { Swiper, SwiperSlide } from "swiper/react";
import CaraouselCard from "./CaraouselCard";

import { Pagination, Autoplay, Navigation } from "swiper";
import "./style.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Caraousel = ({ list }) => {
  return (
    <Box display="flex" justifyContent="center" my={10}>
      <Swiper
        navigation={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        effect={"cards"}
        grabCursor={true}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        {list.map((reason) => (
          <SwiperSlide key={reason.title}>
            <CaraouselCard  {...reason} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Caraousel;
