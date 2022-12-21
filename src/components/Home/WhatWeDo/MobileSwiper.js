import React from "react";
import "swiper/css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Card,
  CardContent,
  CardMedia,
  Box,
  Typography,
  useMediaQuery,
} from "@mui/material";

const MobileSwiper = ({ list }) => {
  const xs = useMediaQuery((theme) => theme.breakpoints.up("xs"));
  const md = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const lg = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const sm = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  const xl = useMediaQuery((theme) => theme.breakpoints.up("xl"));

  return (
    <Swiper className="mySwiper" slidesPerView={1.5}>
      {list.map((list) => (
        <SwiperSlide>
          <Card sx={{ boxShadow: "none" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <CardMedia
                component="img"
                sx={{ width: 200 }}
                image={list.icon}
                alt="Live"
              />
              <CardContent>
                <Typography sx={{ fontSize: 20 }}>{list.label}</Typography>
              </CardContent>
            </Box>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MobileSwiper;
