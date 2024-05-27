import React, { useRef, useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../assets/css/styleSwipper.css";

import img1 from "../img/slider1.png";
import img2 from "../img/slider2.jpg";
// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <Card sx={{ width: "100%", height: "550px", position: "relative" }}>
            <CardMedia
              sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              image={img1}
              title="green iguana"
            />
          </Card>
          <Box
            sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
              background: "#00000064",
              color: "white",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                height: "inherit",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "85px",
                  paddingLeft: "100px",
                  textTransform: "uppercase",
                }}
              >
                Best in <br /> Gaming <br /> History
              </Typography>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Card sx={{ width: "100%", height: "550px" }}>
            <CardMedia
              sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              image={img2}
              title="green iguana"
            />
          </Card>
          <Box
            sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
              background: "#00000064",
              color: "white",
            }}
          ></Box>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
